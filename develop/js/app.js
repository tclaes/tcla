var main = function() {
  
     /** $('.icon_menu').click( function() {
        
        $('.mnu__horizontal').toggle();
        $('#menu').addClass ("col-m-2");
        $('#main').toggleClass ("main");
        $('#main').toggleClass ("col-m-10");
             
       });
      
     */
  /** Slide out menu */
  $('.page').click(function(){
    
    
      $('.page').removeClass('current');    
      
    $(this).addClass('current');
      $(this).children('.current').animate({
				width: "100%"
			}, 300
			);
      
      $(this).children('.content').toggleClass('con-left');
      
      
  }
                      );
	

  
  /** ScrollToTop */
  
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
 
    };

$(document).ready(main);