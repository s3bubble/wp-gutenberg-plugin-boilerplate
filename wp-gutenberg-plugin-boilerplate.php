<?php
/**
 * Plugin Name: WordPress Gutenberg Plugin Boilerplate
 * Plugin URI: https://github.com/s3bubble/wp-gutenberg-plugin-boilerplate
 * Description: We use this as a starter template to build our plugins
 * Author: S3Bubble
 * Author URI: https://s3bubble.com
 * Version: 1.0.0
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package GTS
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
