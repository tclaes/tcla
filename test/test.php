<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mijn Baby - Fun for kids</title>
<link rel="stylesheet" type="text/css" href="css/main.css" >
<!-- fonts -->
<link href='http://fonts.googleapis.com/css?family=Merienda+One|Chewy|Oswald|Montserrat' rel='stylesheet' type='text/css'>
<!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/css/materialize.min.css">

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/js/materialize.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<link rel="stylesheet" href="../css/base.css" />

<style type="text/css">

body {
	font:16px/1.5 'Raleway',Arial,sans-serif;
    color:#fff;
    margin:0;
    padding:0
	}
	
h1 {
    font-size:50px;
    font-weight:300;
    text-align:center;
    font-weight:700
}



header {
    height:250px;
    background:#2ecc71;
    padding:23px 0;
	font-family: Merienda+One;
}

nav.main-nav {
    background:#fff;
    height:60px;
    border-bottom:1px solid #dadada;
    text-align: center;
}

nav.main-nav a {
    font-family:'Lato',sans-serif;
    font-size:20px;
    text-decoration:none;
    display:inline-block;
    padding:15px 19px;
    color:#27ae60;
}

.container {
    display: inline;
    margin:0 auto;
}

nav.main-nav.stickytop {
    position:fixed;
    top:0
}

.content {
    color:#222;
    padding:50px;
    -webkit-column-count:3;
/* Chrome, Safari, Opera */
    -moz-column-count:3;
/* Firefox */
    column-count:3;
    -webkit-column-gap:40;
    column-gap:40px;
}
 
.content h2 {
    margin:0;
}

@media all and (min-width: 360px) and (max-width: 480px) {
    header {
        padding:5px 0 55px;
    }
 
    nav.main-nav a {
        font-size:17px;
    }
 
    nav.main-nav {
        height:55px;
    }
 
    .container {
        margin:0 auto;
        width:50%;
 
    }
 
    .content {
        -webkit-column-count:1;
        /* Chrome, Safari, Opera */
        -moz-column-count:1;
        /* Firefox */
        column-count:1;
    }
}

@media screen and (max-width: 480px) {
    header {
        padding:5px 0 55px;
    }
 
    nav.main-nav a {
        font-size:17px;
    }
 
    nav.main-nav {
        height:55px;
    }
 
    .container {
        width:92%;
    }
 
    .content {
        -webkit-column-count:1;
        /* Chrome, Safari, Opera */
        -moz-column-count:1;
        /* Firefox */
        column-count:1
    }
}

.slogan {
	font-size: 24px;
	}

</style>
</head>

<body>
<header class="header">
	<a href="shop.php"><h1>Mijn Baby</h1><h2 class="slogan">Fun for Kids</h2></a>
</header>
<nav class="main-nav">
<div class="container">
	
    <a href="#1">Shop</a>
    <a href="#2">Blog</a>
    <a href="#3">Over</a>
</div>
</nav>

<div class="content">
	<h2>Main content</h2>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

</div>
<footer class="footer"><p>Example footer</p></footer>


<script>
$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 290) {
            $('nav.main-nav').addClass('stickytop');
        }
        else {
            $('nav.main-nav').removeClass('stickytop');
        }
    });
});
</script>

</body>

</html>