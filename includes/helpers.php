<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Testimonial_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        global $pagenow;

        $query_string = isset($_SERVER['QUERY_STRING'])
            ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING']))
            : '';

        /**
         * Only for Admin Add/Edit Pages
         *
         * strpos() rather than str_contains() -- str_contains() is PHP 8.0+ and
         * this plugin supports PHP 7.4.
         */
        if ($pagenow == 'post-new.php' || $pagenow == 'post.php' || $pagenow == 'site-editor.php' || ($pagenow == 'themes.php' && !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false)) {

            $controls_asset_path = TESTIMONIAL_BLOCKS_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }

            // include (not include_once): include_once returns true rather than
            // the array when the file has already been included in this request.
            $controls_dependencies = include $controls_asset_path;
            if (!is_array($controls_dependencies) || !isset($controls_dependencies['dependencies'])) {
                return;
            }

            $controls_version = isset($controls_dependencies['version'])
                ? $controls_dependencies['version']
                : TESTIMONIAL_BLOCKS_VERSION;

            wp_register_script(
                "testimonial-blocks-controls-util",
                TESTIMONIAL_BLOCKS_ADMIN_URL . '/dist/modules.js',
                array_merge((array) $controls_dependencies['dependencies'], ['lodash']),
                $controls_version,
                true
            );

            /**
             * StyleComponent builds the editor's tablet/mobile media queries from
             * these values. Without them the queries render as "max-width: undefinedpx"
             * and responsive preview silently stops working.
             *
             * Defaults match the breakpoints style-handler hardcodes for the frontend
             * (lib/style-handler/includes/class-parse-css.php), so the editor preview
             * agrees with what actually renders. The option is read only -- the full
             * Essential Blocks plugin owns writing it.
             */
            $eb_settings    = get_option('eb_settings', array());
            $eb_breakpoints = isset($eb_settings['responsiveBreakpoints']) ? $eb_settings['responsiveBreakpoints'] : '';
            if (is_string($eb_breakpoints) && strlen($eb_breakpoints) > 0) {
                $eb_breakpoints = (array) json_decode(html_entity_decode(stripslashes($eb_breakpoints)), true);
            }
            if (!is_array($eb_breakpoints) || !isset($eb_breakpoints['tablet'], $eb_breakpoints['mobile'])) {
                $eb_breakpoints = array('tablet' => 1024, 'mobile' => 767);
            }

            wp_localize_script('testimonial-blocks-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
                'responsiveBreakpoints' => array(
                    'tablet' => (int) $eb_breakpoints['tablet'],
                    'mobile' => (int) $eb_breakpoints['mobile'],
                ),
            ));

            if ($pagenow == 'post-new.php' || $pagenow == 'post.php') {
                wp_localize_script('testimonial-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($pagenow == 'site-editor.php' || $pagenow == 'themes.php') {
                wp_localize_script('testimonial-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

			wp_register_style(
				'essential-blocks-iconpicker-css',
				TESTIMONIAL_BLOCKS_ADMIN_URL . 'dist/style-modules.css',
				[],
				TESTIMONIAL_BLOCKS_VERSION,
				'all'
			);

            wp_enqueue_style(
                'essential-blocks-editor-css',
                TESTIMONIAL_BLOCKS_ADMIN_URL . '/dist/modules.css',
                array('essential-blocks-iconpicker-css'),
                $controls_version,
                'all'
            );
        }
    }

    /**
     * Resolve the argument passed to register_block_type().
     *
     * The historical `WP <= 5.6` fallback that returned $blockname has been
     * removed: this plugin declares a WP 6.0 floor, so that branch was
     * unreachable. Signature kept for call-site compatibility.
     */
    public static function get_block_register_path($blockname, $blockPath)
    {
        return $blockPath;
    }
}
Testimonial_Helper::register();
