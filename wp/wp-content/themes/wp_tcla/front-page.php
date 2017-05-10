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
    <h1><span style="color: #DF0B05">.</span>tcla</h1>
    <p class="lead">My Digital Playground</p>
    <p><a class="btn btn-primary" href="#">Lees meer...</a> <a class="btn btn-default" href="#">Contacteer me</a></p>
    </div>
  </div>

  <div class="container" id="services">
    <div class="row">

      <div class="col-md-4 box">
        <div class="well">
          <span class="glyphicon glyphicon-phone"></span>
          <h3>Development</h3>
          <p>Nood aan een nieuwe professionele website?
          <ul class="list-unstyled">
          <li>Single page website</li>
          <li>Small html5 apps</li>
          <li>Static website (max 5 pagina's)</li>
          <li>Website met CMS<li>
          </p>
        </div>
      </div>

      <div class="col-md-4 box">
        <div class="well">
          <span class="glyphicon glyphicon-search"></span>
          <h3>Online marketing</h3>
          <h4>SEO</h4>
          <p>Een aantal ingrepen op een website kunnen wonderen verrichten om je website zichtbaar te krijgen binnen een zoekmachine. </p>
          <h4>SEA</h4>
          <p>Als Google Partner kan ik je helpen met het optimaliseren van je SEA campagnes.</p>
          <p>Een zo groot mogelijk rendement behalen binnen een vooraf vastgesteld budget.</p>
        </div>
      </div>

      <div class="col-md-4 box">
        <div class="well">
          <span class="glyphicon glyphicon-film"></span>
          <h3>Multimedia</h3>
          <p>Ontwerp van print en web. </p>
          <p>Bekijk mijn realisaties hier: ...</p>
        </div>
      </div> 

    </div>
  </div>

<?php get_footer(); ?>