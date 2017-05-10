<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title><?php bloginfo('name'); ?> | 
    <?php is_front_page() ? bloginfo('description'): wp_title(); ?></title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- CSS Files -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" />
    
    <!-- Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300,500,900' rel='stylesheet' type='text/css'>
    
    <!-- Icon fonts -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!-- Scripts -->
    <script src="<?php bloginfo('template_url'); ?>/js/base.js"></script>
    <?php wp_head(); ?>

  </head>

	<body>		

	<div class="jumbotron jumbotron-main">
		<nav class="navbar" role="navigation">
    <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only" style="background-color:white;">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
     <a class="navbar-brand" href="index.php"><span style="color: #DF0B05">.</span><?php bloginfo('name'); ?> </a>
      <div class="container">
         <?php
            wp_nav_menu( array(
                'menu'              => 'primary',
                'theme_location'    => 'primary',
                //'depth'             => 2,
                'container'         => 'div',
                'container_class'   => 'collapse navbar-collapse',
                'container_id'      => 'navbar',
                'menu_class'        => 'nav navbar-nav navbar-right',
                //'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback'
                //'walker'            => new WP_Bootstrap_Navwalker()
                )
            );
        ?>
      </div>
      </div>
    </nav>		

    <div class="container">
      <!--<h1><span style="color: #DF0B05">.</span><?php bloginfo('name'); ?></h1>-->
      <p class="lead"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
</p>
    </div>
  </div>