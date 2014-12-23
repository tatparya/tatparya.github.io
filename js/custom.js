var main = function (){

	//	Nav bar active
	$(".right li").click(function(){
		$(".right").children().removeClass("active");
		$(this).addClass("active");
	});

	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		var pos = $(".debug").offset().top;
		$(".debug h3").text(pos);
	    if ($(".top-bar").offset().top < 50) {
	        $(".top-bar").addClass("custom-nav-bar");
	        $(".top-bar").removeClass("fixed-bar");
	    } else {
	        $(".top-bar").removeClass("custom-nav-bar");
	        $(".top-bar").addClass("fixed-bar");
	        $(".top-bar").addClass("fixed");
	    }
	});

}

$(document).ready(main);