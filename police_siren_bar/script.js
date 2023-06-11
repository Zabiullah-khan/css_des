const lights=['blue','red','blue','yellow','red']
var x=0;
$(document).ready(function() {
	
	function light_change() {
		var change= lights[x];
		$("#sr1").css({
			"background-color":lights[x],
			"box-shadow": `10px 10px 50px ${change}`
			
		});
		
		
		
		$(this).css('-webkit-box-shadow', '10px 10px 5px lights[x]');
		$(this).css('-moz-box-shadow', '10px 10px 5px #888');
		$(this).css('box-shadow', '10px 10px 5px #888');
		
		$("#sr3").css({
			"background-color":lights[lights.length-x],
			"box-shadow": `10px 10px 50px ${lights[lights.length-x]}`
		});
		
		/**if (x >= lights.length ) {
			x=0;
		}
		
		x+=1;**/
		
		x= (x+1) % lights.length
	
		
	}setInterval(light_change,10)
	
	$("<audio></audio>").attr({
		    'src':'policesiren.mp3',
		    'volume':0.4,
		    'autoplay':'autoplay',
		    'loop':true,
	}).appendTo("body");
	
	
});
