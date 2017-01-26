/**
 * @author Tom Claes
 */

/** StickyTop */

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 90) {
            $('.header').addClass('stickytop');
            $('.header').css ("border-top", "5px solid red");
        }
        else {
            $('.header').removeClass('stickytop');
            $('.header').css ("border-top", "none");
        }
    });
});

/** ScrollToTop */

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
		