<?php

/**
 * Plugin Name:     Testimonial Block
 * Plugin URI:      https://essential-blocks.com
 * Description:     Display testimonials & gain instant credibility
 * Version:         1.2.6
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     testimonial-wp-block
 *
 * @package         testimonial-wp-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_testimonial_block_init() {

    define( 'TESTIMONIAL_BLOCKS_VERSION', "1.2.6" );
    define( 'TESTIMONIAL_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    define( 'TESTIMONIAL_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );

    $script_asset_path = TESTIMONIAL_BLOCKS_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "block/testimonial" block first.'
        );
    }
    $index_js         = TESTIMONIAL_BLOCKS_ADMIN_URL . 'dist/index.js';
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
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
        $script_asset['version'],
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

	$fontawesome = TESTIMONIAL_BLOCKS_ADMIN_URL . 'assets/css/font-awesome5.css';
	wp_register_style(
        'essential-blocks-fontawesome',
        $fontawesome,
        [],
        TESTIMONIAL_BLOCKS_VERSION
    );

    $style_css = TESTIMONIAL_BLOCKS_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'create-block-testimonial-block-frontend-style',
        $style_css,
        [ 'essential-blocks-animation', 'essential-blocks-fontawesome' ],
        TESTIMONIAL_BLOCKS_VERSION
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/testimonial' ) ) {
        register_block_type(
            Testimonial_Helper::get_block_register_path( "testimonial-wp-block/testimonial", TESTIMONIAL_BLOCKS_ADMIN_PATH ),
            [
                'editor_script'   => 'create-block-testimonial-block-editor-script',
                'editor_style'    => 'create-block-testimonial-block-frontend-style',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
                        wp_enqueue_style( 'create-block-testimonial-block-frontend-style' );
                        wp_enqueue_script( 'essential-blocks-eb-animation' );
                    }
                    return $content;
                }
            ]
        );
    }
}

add_action( 'init', 'create_block_testimonial_block_init' );
