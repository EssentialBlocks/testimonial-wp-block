<?php
/**
 * Load google fonts.
 *
 * Fonts are derived from the block's own typography attributes at render time.
 *
 * The previous implementation collected families on the `render_block` filter and
 * enqueued them on `wp_footer`, then asked Google for all eighteen weight/italic
 * variants of every family. That request is invalid for any family that does not
 * ship those variants: the v1 API answers 400 Bad Request when the family is alone
 * in the request and silently drops it from a combined one. Variants are now
 * filtered against the same catalog the editor's font picker is built from.
 *
 * Collection also moved to the block's render_callback, matching the sibling
 * plugins, so a font request is only ever built for a block that actually rendered
 * and nothing depends on the global `$post` -- which is null or points at the wrong
 * object on archives, FSE templates and widget areas.
 *
 * @package testimonial-wp-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'Testimonial_Font_Loader' ) ) {
    class Testimonial_Font_Loader {

        /**
         * Style handle for the combined Google Fonts request.
         */
        const HANDLE = 'eb-block-fonts';

        protected static $instances = null;

        /**
         * Block name this loader was registered for. Retained so the
         * `essential-blocks` mode below keeps behaving as it did before.
         *
         * @var string
         */
        private static $block_name = '';

        /**
         * Collected fonts for this request, keyed by family name.
         *
         * @var array<string, array{weights: string[], italic: bool}>
         */
        private static $fonts = [];

        /**
         * Google Fonts catalog: family name => variants that family actually ships.
         *
         * @var array<string, string>|null Null until the catalog file has been read.
         */
        private static $catalog = null;

        /**
         * Locally available families that must never be requested from Google.
         */
        private static $system = [
            'Arial',
            'Tahoma',
            'Verdana',
            'Helvetica',
            'Times New Roman',
            'Trebuchet MS',
            'Georgia',
        ];

        /**
         * Registers the loader.
         */
        public static function get_instance( ...$args ) {
            if ( self::$instances == null ) {
                self::$instances = new static( ...$args );
            }
            return self::$instances;
        }

        public function __construct( $block_name = '' ) {
            self::$block_name = (string) $block_name;
        }

        /**
         * Collect the Google fonts used by one rendered block and enqueue them.
         *
         * Called from the block's render_callback, so it only ever runs for blocks
         * that are actually on the page -- no post meta and no content parsing.
         *
         * @param array $attributes Block attributes.
         */
        public static function enqueue_for_attributes( $attributes ) {
            if ( ! is_array( $attributes ) || empty( $attributes ) ) {
                return;
            }
            if ( ! self::google_fonts_enabled() ) {
                return;
            }

            $changed = false;

            foreach ( $attributes as $key => $value ) {
                // Mirrors the editor's own /^(\w+)FontFamily/ match in the controls
                // package, so both sides pick up exactly the same attributes.
                if ( ! is_string( $key ) || ! preg_match( '/^(.+)FontFamily$/', $key, $matches ) ) {
                    continue;
                }
                if ( ! is_string( $value ) ) {
                    continue;
                }

                $family = self::normalize_family( $value );
                if ( '' === $family || 'Default' === $family ) {
                    continue;
                }
                if ( in_array( $family, self::$system, true ) ) {
                    continue;
                }

                $prefix = $matches[1];

                if ( ! isset( self::$fonts[ $family ] ) ) {
                    self::$fonts[ $family ] = [
                        'weights' => [],
                        'italic'  => false,
                    ];
                    $changed = true;
                }

                $weight = isset( $attributes[ $prefix . 'FontWeight' ] ) && is_scalar( $attributes[ $prefix . 'FontWeight' ] )
                    ? (string) $attributes[ $prefix . 'FontWeight' ]
                    : '';

                // The control only ever emits 100-900 in hundreds; ignore anything else
                // so a stray value cannot produce a variant Google will reject.
                if ( preg_match( '/^[1-9]00$/', $weight )
                    && ! in_array( $weight, self::$fonts[ $family ]['weights'], true ) ) {
                    self::$fonts[ $family ]['weights'][] = $weight;
                    $changed = true;
                }

                $style = isset( $attributes[ $prefix . 'FontStyle' ] ) && is_scalar( $attributes[ $prefix . 'FontStyle' ] )
                    ? (string) $attributes[ $prefix . 'FontStyle' ]
                    : '';

                if ( 'italic' === $style && ! self::$fonts[ $family ]['italic'] ) {
                    self::$fonts[ $family ]['italic'] = true;
                    $changed = true;
                }
            }

            if ( $changed ) {
                self::enqueue();
            }
        }

        /**
         * Honour the Essential Blocks "Google Fonts" setting.
         *
         * Unchanged from the previous implementation: the option is only consulted
         * when this loader runs for the whole `essential-blocks` namespace, not for a
         * single standalone block plugin.
         *
         * @return bool
         */
        private static function google_fonts_enabled() {
            if ( 'essential-blocks' !== self::$block_name ) {
                return true;
            }

            $eb_settings = get_option( 'eb_settings', [] );
            $googleFont  = ! empty( $eb_settings['googleFont'] ) ? $eb_settings['googleFont'] : 'true';

            return 'false' !== $googleFont;
        }

        /**
         * Read the bundled family => variants catalog once per request.
         *
         * @return array<string, string> Empty when the catalog file is missing.
         */
        private static function catalog() {
            if ( null !== self::$catalog ) {
                return self::$catalog;
            }

            self::$catalog = [];

            $file = __DIR__ . '/google-fonts-variants.php';
            if ( is_readable( $file ) ) {
                // `include`, not `include_once`: a repeat `include_once` returns bool
                // `true` rather than the array. The static above already guarantees
                // this runs at most once per request.
                $catalog = include $file;
                if ( is_array( $catalog ) ) {
                    self::$catalog = $catalog;
                }
            }

            return self::$catalog;
        }

        /**
         * Clean up a stored font family value and resolve it to a catalog family.
         *
         * @param string $family Raw attribute value.
         * @return string Normalised family name, empty when there is nothing to load.
         */
        private static function normalize_family( $family ) {
            $family = trim( preg_replace( '/\s+/', ' ', (string) $family ) );
            if ( '' === $family ) {
                return '';
            }

            $catalog = self::catalog();
            if ( isset( $catalog[ $family ] ) || false === strpos( $family, '-' ) ) {
                return $family;
            }

            // Older content can hold the picker's slug form ("ADLaM-Display") instead of
            // the family name. No family in the catalog contains a hyphen, so swapping
            // hyphens for spaces cannot collide with a real name.
            $spaced = str_replace( '-', ' ', $family );

            return isset( $catalog[ $spaced ] ) ? $spaced : $family;
        }

        /**
         * Variants a family actually ships.
         *
         * @param string $family Family name.
         * @return string[]|null Null when the family is not in the bundled catalog.
         */
        private static function supported_variants( $family ) {
            $catalog = self::catalog();

            if ( ! isset( $catalog[ $family ] ) || ! is_string( $catalog[ $family ] ) || '' === $catalog[ $family ] ) {
                return null;
            }

            return explode( ',', $catalog[ $family ] );
        }

        /**
         * Work out the variant list to request for one collected family.
         *
         * @param string $family Family name.
         * @param array  $data   Collected weights and italic flag.
         * @return string[] Variants, never empty for a family in the catalog.
         */
        private static function build_variants( $family, $data ) {
            $supported = self::supported_variants( $family );
            $weights   = $data['weights'];

            if ( null === $supported ) {
                // Not in the bundled catalog: a Google release newer than the snapshot, or
                // a hand-edited attribute. Anchor on 400, which every family that ships a
                // regular face accepts. A family Google does not recognise is dropped from
                // a combined request rather than failing it, so this cannot take the other
                // families down with it.
                if ( ! in_array( '400', $weights, true ) ) {
                    $weights[] = '400';
                }

                sort( $weights, SORT_STRING );

                $variants = $weights;
                if ( $data['italic'] ) {
                    foreach ( $weights as $weight ) {
                        $variants[] = $weight . 'italic';
                    }
                }

                return $variants;
            }

            // Only ever ask for variants the family actually ships. Asking for a weight a
            // family does not have makes the v1 API answer 400 Bad Request when that
            // family is alone in the request -- `?family=ADLaM+Display:700` is the case
            // that started this -- and silently drops the family from a combined request.
            $weights = array_values( array_intersect( $weights, $supported ) );

            // Always keep the regular face. A typography prefix with no explicit
            // FontWeight emits no font-weight rule at all, so the browser renders it at
            // 400 and needs that face present.
            if ( in_array( '400', $supported, true ) && ! in_array( '400', $weights, true ) ) {
                $weights[] = '400';
            }

            // A handful of families ship no regular face at all (Buda, Sunflower,
            // UnifrakturCook). Anchor those on the lightest weight they do ship, because
            // an empty variant list -- `?family=Buda` -- is itself a 400 from the API.
            if ( empty( $weights ) ) {
                $numeric = array_values(
                    array_filter(
                        $supported,
                        function ( $variant ) {
                            return (bool) preg_match( '/^[1-9]00$/', $variant );
                        }
                    )
                );
                if ( ! empty( $numeric ) ) {
                    sort( $numeric, SORT_STRING );
                    $weights[] = $numeric[0];
                }
            }

            // Sort so the same set of fonts always produces the same URL, which keeps it
            // cacheable and avoids duplicate requests across renders.
            sort( $weights, SORT_STRING );

            $variants = $weights;

            if ( $data['italic'] ) {
                foreach ( $weights as $weight ) {
                    if ( in_array( $weight . 'italic', $supported, true ) ) {
                        $variants[] = $weight . 'italic';
                    }
                }
            }

            if ( empty( $variants ) ) {
                // Italic-only families such as Molle: `?family=Molle` is a 400 from the API
                // while `?family=Molle:400italic` is fine, so fall back to what it ships.
                $variants = $supported;
            }

            return $variants;
        }

        /**
         * Build the combined Google Fonts URL for everything collected so far.
         *
         * @return string Empty string when there is nothing to request.
         */
        private static function build_url() {
            $families = [];

            foreach ( self::$fonts as $family => $data ) {
                $variants = self::build_variants( $family, $data );
                if ( empty( $variants ) ) {
                    continue;
                }

                $families[] = str_replace( ' ', '+', $family ) . ':' . implode( ',', $variants );
            }

            if ( empty( $families ) ) {
                return '';
            }

            // `|`, `:` and `,` all survive esc_url(); its allowlist permits them.
            return '//fonts.googleapis.com/css?family=' . implode( '|', $families ) . '&display=swap';
        }

        /**
         * Register and enqueue the combined stylesheet.
         *
         * Re-registers on each change so that a second block on the same page extends
         * the single existing request rather than adding another stylesheet.
         */
        private static function enqueue() {
            $url = self::build_url();
            if ( '' === $url ) {
                return;
            }

            if ( wp_style_is( self::HANDLE, 'registered' ) ) {
                wp_deregister_style( self::HANDLE );
            }

            // null version: Google rejects nothing, but an appended ?ver= is noise.
            wp_register_style( self::HANDLE, $url, [], null );
            wp_enqueue_style( self::HANDLE );
        }
    }
}

Testimonial_Font_Loader::get_instance( 'testimonial-wp-block/testimonial' );
