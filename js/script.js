$(document).ready(function(){

	function calcwidth() {
		var bigwidth = $(".all-item-wrapper").width();
		var midwidth = $(".second-div .page-inner-content").width();
		var ow = $(".blocks.ellipse-info").width();

		var lefteli = $(".blocks.ellipse-info").css('left');

		lefteli = parseInt(lefteli)
		lefteli = Math.abs(lefteli)

		var sw = (bigwidth - midwidth) / 2;
		var allw = (ow + sw) - lefteli;

		$(".work-slider-wp .slick-slide").each(function(){
			if ($(this).offset().left <= allw) {
				$(".work-place a", this).addClass("color-update");
			}
			else {
				$(".work-place a", this).removeClass("color-update");
			}
		})
	}

	const slider = $(".work-slider-wp").slick({
  	arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
		infinite: false,
		 responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
      	breakpoint: 600,
      	settings: {
      		slidesToShow: 1,
      		slidesToScroll: 1
      	}
      }
     ]
  });

	$(".see-work").click(function(){
		$(".page-middle-content").toggleClass("slide-left");
		$(".second-div").toggleClass("second-div-left");
		$("body").toggleClass("switch-color");
		$(".work-slider-wp .slick-list").toggleClass("no-overflow");
		$(".slide-details .work-type p").toggleClass("wt-switch");
		e.preventDefault();

		calcwidth();

		setTimeout(function() {
			calcwidth();
		}, 800);
	});

	$(".last-layer-wp a").click(function(){
		$(".page-middle-content").removeClass("slide-left");
		$(".second-div").removeClass("second-div-left");
		$(".last-layer-wp .blocks-inner").removeClass("show-goback");
		$("body").removeClass("switch-color");
		$(".work-slider-wp .slick-list").addClass("no-overflow");
		$(this).removeClass("show-arrow");

		slider.slick('slickGoTo', 0);

		calcwidth();

		setTimeout(function() {
			calcwidth();
		}, 800);
	});

	slider.on('wheel', (function(e) {
	  e.preventDefault();

	  if (e.originalEvent.deltaY < 0) {
	    $(this).slick('slickPrev');
	  } else {
	    $(this).slick('slickNext');
	  }
	}));

  slider.on('afterChange', function(event, slick, currentSlide){
  	calcwidth();
  });

	calcwidth();

});

