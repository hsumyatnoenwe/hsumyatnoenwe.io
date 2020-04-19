
$(document).ready(function(){
	$(".blocks.work-vector-info .vector-txt a").click(function(){
		$(".page-middle-content").addClass("slide-left");
		$(".second-div").addClass("second-div-left");
		$(".last-layer-wp .blocks-inner").addClass("show-goback");
		$("body").addClass("switch-color");
	});
	$(".last-layer-wp a").click(function(){
		$(".page-middle-content").removeClass("slide-left");
		$(".second-div").removeClass("second-div-left");
		$(".last-layer-wp .blocks-inner").removeClass("show-goback");
		$("body").removeClass("switch-color");
	})

	$(".work-slider-wp").slick({
		slidesToShow: 3,
		infinite: false
	})
	
});

