<?php

add_action( 'wp_enqueue_scripts', 'load_scripts' );

function load_scripts() {
  global $post;

  if( is_page() || is_single() )
  {
    switch($post->post_name)
    {
      case is_front_page():
        wp_enqueue_script( 'homepage_icons', get_stylesheet_directory_uri() . './js/homepage.js', array('jquery') );
        break;
      case 'contact':
        wp_enqueue_script( 'contact_icons', get_stylesheet_directory_uri() . './js/contact.js', array('jquery') );
        break;
      case 'web' || 'graphics' || 'apparel':
        wp_enqueue_script( 'galleries', get_stylesheet_directory_uri() . './js/galleries.js', array('jquery') );
        break;
    }
  }
}

?>
