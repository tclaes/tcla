<?php
// Register navwalker class
//require_once('wp_bootstrap_navwalker.php');

//Theme support
function wpb_theme_setup(){

	add_theme_support('post-thumbnails');

	//Nav menus
	register_nav_menus(array(
		'primary' => __('Primary Menu')
		));
}

add_action('after_setup_theme', 'wpb_theme_setup');


//Set excerpt length
function set_excerpt_length(){
	return 50;
}

add_filter('excerpt_length','set_excerpt_length');

?>