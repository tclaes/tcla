/**
 * @author Tom Claes
 */

var main = function(){
  
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  
  function getViewport() {

    $('#viewport').html('Viewport: '+viewportWidth+' x '+viewportHeight+' px');
  }

  getViewport();

  $(window).resize(function() {
    getViewport()
  });
  
  $('.home').click(function(){
		var view = viewportHeight;
		setPosition(view);		
		/*$('.site').animate({scrollTop: view},800);*/
  });
	
	$('#skills').click(function(){
		var view = viewportHeight * 2;
		setPosition(view);
  });
	
	$('#exp').click(function(){
		var view = viewportHeight * 3;
		setPosition(view);
	});
	
	$('#studies').click(function(){
		var view = viewportHeight * 4;
	  setPosition(view);
  });
  
  function setPosition(x){
		$('.site').animate({scrollTop: x},1000);
	}
  
};

$(document).ready(main);