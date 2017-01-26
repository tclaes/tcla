/**
 * @author Tom Claes
 */

var main = function(){
	
	$("down").click(function(){
		$("main").animate({scrollTop: '+=100vh'},800);
	})
	
}
$(document).ready(main);
		