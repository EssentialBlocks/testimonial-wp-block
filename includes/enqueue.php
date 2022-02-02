<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Testimonial_Enqueue
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
        /**
         * Only for Admin Add/Edit Pages 
         */
        if ($hook == 'post-new.php' || $hook == 'post.php' || $hook == 'site-editor.php') {

            $controls_dependencies = include_once TESTIMONIAL_BLOCKS_ADMIN_PATH . '/controls/dist/index.asset.php';
            wp_register_script(
                "essential-blocks-controls-util",
                TESTIMONIAL_BLOCKS_ADMIN_URL . '/controls/dist/index.js',
                array_merge($controls_dependencies['dependencies'], array("essential-blocks-edit-post")),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('essential-blocks-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
            ));

            wp_enqueue_style(
                'essential-blocks-editor-css',
                TESTIMONIAL_BLOCKS_ADMIN_URL . '/controls/dist/index.css',
                array(),
                $controls_dependencies['version'],
                'all'
            );
        }
    }
    public static function get_block_register_path()
    {
        if ( (float) get_bloginfo('version') <= 5.6) {
            return 'testimonial-wp-block/testimonial';
        } else {
            return TESTIMONIAL_BLOCKS_ADMIN_PATH;
        }
    }
}
Testimonial_Enqueue::register();
