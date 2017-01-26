var main = function(){
	
  $(".block").click(function(){
		
    var blocks = $(this).parent().children(".block");
		blocks.children(".event").removeClass("overflow");
		blocks.children(".event").children("div").addClass("hidden");
		// Check if item is open
	 if($(this).hasClass("open_click")===false){
			blocks.removeClass("open_click");
		 	$(this).children(".event").children("div").removeClass("hidden");
		 	$(this).children(".event").addClass("overflow");
			$(this).addClass("open_click");
		  $("html, body").animate({
      	scrollTop:$(this).position().top
       }, 200);
			 }
   else {
		 $(this).removeClass("open_click");	 
	 }
	
  $(this).children(".open_btn").children(".fa-chevron-down").toggleClass("hidden");
  $(this).children(".open_btn").children(".fa-chevron-up").toggleClass("hidden");
		
	//Set block position to top
	
		
  });
  
  
}
$(document).ready(main);