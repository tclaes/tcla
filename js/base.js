/**
 * @author Tom Claes
 */

var main = function(){
	
    /* Top Navigation bar */
	$(window).scroll(function(){

        if ($(this).scrollTop() >= 60) {
        	$('.navbar').addClass("navbar-fixed-top");
            $('.navbar').css ("background-color","#333333");
            console.log("test");
        }
        else {
            $('.navbar').removeClass("navbar-fixed-top");
            $('.navbar').css ("background","none");
            console.log("terug boven");
        }
    });

    /* anchor positioning */

	
}

$(document).ready(main);
		