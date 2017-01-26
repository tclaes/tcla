<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>TCLA Responsive Test</title>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Material design lite -->
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.2/material.indigo-pink.min.css">

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
<link rel="stylesheet" href="../css/styles.css" >

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


<script>
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
</script>

</head>


<div class="layout-transparent mdl-layout mdl-js-layout">
  <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <a href="index.php" class="mdl-layout-title"><img src="../img/logo_large.png" width="200px" /></a>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation -->
		<?php include 'menu.php' ?>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <a href="index.php" class="mdl-layout-title"><img src="img/logo_large.png" width="200px" /></a>
    	<?php include 'menu.php' ?>
  </div>
  <main class="mdl-layout__content">
  	
  	<div class="fullscreen">
		<?php include 'print.php' ?>
  	</div>
  	
  	<div class="fullscreen">
		<?php include 'wordpress/wp.php' ?>
  	</div>
  	
  	<div class="fullscreen">
	<?php include 'drupal.php' ?>
  	</div>
  	
  	  	<div class="fullscreen">
	<?php include 'contact.php' ?>
  	</div>
  	
  </main>
  
  <div id="top" class="scrollToTop"><i class="fa fa-chevron-circle-up fa-3x"></i></div>
  
</div>


</body>

</html>