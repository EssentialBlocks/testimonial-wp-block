<?php

/**
 * Plugin Name:     Testimonial Block
 * Plugin URI:      https://essential-blocks.com
 * Description:     Display testimonials & gain instant credibility
 * Version:         1.3.2
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     testimonial-wp-block
 * Requires at least: 6.0
 * Requires PHP:    7.4
 * Tested up to:    7.0.4
 *
 * @package         testimonial-wp-block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/helpers.php';

/**
 * style-handler ships as a git submodule. A checkout with uninitialised
 * submodules must not fatal the whole site on load -- but it must not fail
 * silently either: this library is the only thing that generates the block's
 * CSS on the frontend, so without it the block renders unstyled.
 */
$testimonial_style_handler = __DIR__ . '/lib/style-handler/style-handler.php';
if ( file_exists( $testimonial_style_handler ) ) {
    require_once $testimonial_style_handler;
} else {
    add_action( 'admin_notices', 'testimonial_wp_block_style_handler_missing_notice' );
    if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
        error_log( 'Testimonial Block: lib/style-handler/style-handler.php is missing. Run `git submodule update --init lib/style-handler`. No frontend block CSS will be generated.' );
    }
}
unset( $testimonial_style_handler );

/**
 * Warn admins when the style-handler library is absent.
 *
 * Strings are translated inside the callback rather than at file scope:
 * admin_notices fires long after init, so no text domain is touched during
 * plugin load (WP 6.7+ notices on early translation).
 */
function testimonial_wp_block_style_handler_missing_notice() {
    // A sibling Essential Blocks plugin already supplied the handler; nothing is broken.
    if ( class_exists( 'EbStyleHandler' ) ) {
        return;
    }
    if ( ! current_user_can( 'activate_plugins' ) ) {
        return;
    }
    printf(
        '<div class="notice notice-error"><p><strong>%1$s</strong> %2$s <code>git submodule update --init lib/style-handler</code></p></div>',
        esc_html__( 'Testimonial Block:', 'testimonial-wp-block' ),
        esc_html__( 'the style-handler library is missing, so no block CSS is generated on the frontend. From the plugin directory run:', 'testimonial-wp-block' )
    );
}

function create_block_testimonial_block_init() {

    if ( ! defined( 'TESTIMONIAL_BLOCKS_VERSION' ) ) {
        define( 'TESTIMONIAL_BLOCKS_VERSION', '1.3.2' );
    }
    if ( ! defined( 'TESTIMONIAL_BLOCKS_ADMIN_URL' ) ) {
        define( 'TESTIMONIAL_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    }
    if ( ! defined( 'TESTIMONIAL_BLOCKS_ADMIN_PATH' ) ) {
        define( 'TESTIMONIAL_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );
    }

    $script_asset_path = TESTIMONIAL_BLOCKS_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        // Build output missing. Bail out of registration instead of fataling the site.
        return;
    }
    $index_js     = TESTIMONIAL_BLOCKS_ADMIN_URL . 'dist/index.js';
    $script_asset = require $script_asset_path;

    if ( ! is_array( $script_asset ) || ! isset( $script_asset['dependencies'] ) ) {
        return;
    }

    $all_dependencies = array_merge( (array) $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'testimonial-blocks-controls-util',
        'essential-blocks-eb-animation',
		'essential-blocks-image-loaded',
		'essential-blocks-isotope'
    ] );

    wp_register_script(
        'create-block-testimonial-block-editor-script',
        $index_js,
        $all_dependencies,
        isset( $script_asset['version'] ) ? $script_asset['version'] : TESTIMONIAL_BLOCKS_VERSION,
        true
    );

    $load_animation_js = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        TESTIMONIAL_BLOCKS_VERSION,
        true
    );

	$images_loaded_js = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/js/images-loaded.min.js';
    wp_register_script(
        'essential-blocks-image-loaded',
        $images_loaded_js,
        [],
        TESTIMONIAL_BLOCKS_VERSION,
        true
    );

	$isotop_js = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/js/isotope.pkgd.min.js';
    wp_register_script(
        'essential-blocks-isotope',
        $isotop_js,
        [],
        TESTIMONIAL_BLOCKS_VERSION,
        true
    );

    $animate_css = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        TESTIMONIAL_BLOCKS_VERSION
    );

	// Own handle: Essential Blocks registers Font Awesome 6 as `essential-blocks-fontawesome`,
	// and the first registration wins, so sharing it blanked FA6-only icons site-wide.
	$fontawesome = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/css/font-awesome5.css';
	wp_register_style(
        'testimonial-wp-block-fontawesome',
        $fontawesome,
        [],
        TESTIMONIAL_BLOCKS_VERSION
    );

    $style_css = TESTIMONIAL_BLOCKS_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'create-block-testimonial-block-frontend-style',
        $style_css,
        [ 'essential-blocks-animation', 'testimonial-wp-block-fontawesome' ],
        TESTIMONIAL_BLOCKS_VERSION
    );

    $eb_has_block = WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/testimonial' );
    $block_args   = [
        'editor_script'   => 'create-block-testimonial-block-editor-script',
        'editor_style'    => 'create-block-testimonial-block-frontend-style',
        'render_callback' => function ( $attributes, $content ) {
            if ( ! is_admin() ) {
                wp_enqueue_style( 'create-block-testimonial-block-frontend-style' );
                wp_enqueue_script( 'essential-blocks-eb-animation' );
                // Google fonts are derived from this block's own typography
                // attributes, so published posts work without a re-save.
                Testimonial_Font_Loader::enqueue_for_attributes( $attributes );
            }
            return $content;
        }
    ];

    // Essential Blocks has its own version of this block under another name. Posts saved
    // with this one still need its render callback and front-end assets, so keep it
    // registered, but leave out the editor bundle, which can't run beside Essential Blocks.
    if ( $eb_has_block ) {
        unset( $block_args['editor_script'], $block_args['editor_style'] );
    }

    register_block_type(
        Testimonial_Helper::get_block_register_path( "testimonial-wp-block/testimonial", TESTIMONIAL_BLOCKS_ADMIN_PATH ),
        $block_args
    );
}

add_action( 'init', 'create_block_testimonial_block_init' );

/**
 * Block icons are filled #6C3BFF, which almost disappears on the highlighted row of
 * the "/" inserter, a selected List View row and the drag chip. Recolour them there,
 * as Essential Blocks does. The handle is shared, so the stylesheet prints once when
 * several of these plugins are active.
 */
function testimonial_block_icon_selected_style() {
    wp_enqueue_style(
        'eb-block-icon-selected',
        plugins_url( 'assets/css/block-icon-selected.css', __FILE__ ),
        [],
        TESTIMONIAL_BLOCKS_VERSION
    );
}
add_action( 'enqueue_block_editor_assets', 'testimonial_block_icon_selected_style' );

/**
 * Let Essential Blocks' animation assets win on the front end when it is active.
 *
 * Both plugins register these handles and the first registration wins. This
 * plugin's loader doesn't set `window.ebAnimationLoaded`, so Essential Blocks'
 * failsafe would reveal every animated block without playing it. Essential Blocks
 * registers its own at priority 20 and handles the same `.eb___animated` classes.
 */
function testimonial_wp_block_use_essential_blocks_animation() {
    if ( defined( 'ESSENTIAL_BLOCKS_VERSION' ) ) {
        wp_deregister_script( 'essential-blocks-eb-animation' );
        wp_deregister_style( 'essential-blocks-animation' );
    }
}
add_action( 'wp_enqueue_scripts', 'testimonial_wp_block_use_essential_blocks_animation', 19 );
