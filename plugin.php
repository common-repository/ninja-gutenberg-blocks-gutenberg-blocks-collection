<?php
/**
 * Plugin Name: Ninja Gutenberg Blocks - Gutenberg Blocks Collection
 * Plugin URI: https://wordpress.org/plugins/ninja-gutenberg-blocks-gutenberg-blocks-collection/
 * Description: A wide collection of beautiful, customizable page building blocks for the new Gutenberg editor in WordPress.
 * Author: gutendev
 * Author URI: https://gutendev.com
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: ninja-gutenberg-blocks
 * @package ninja-gutenberg-blocks
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Initializer.
 */
if (!function_exists('ninja_gutenberg_blocks_loader')) {
    function ninja_gutenberg_blocks_loader()
    {
        require_once plugin_dir_path(__FILE__).'src/init.php';
        require_once plugin_dir_path(__FILE__).'src/blocks/post-grid/index.php';
        require_once plugin_dir_path(__FILE__).'src/blocks/social-share/index.php';
    }

    add_action('plugins_loaded', 'ninja_gutenberg_blocks_loader');
}
