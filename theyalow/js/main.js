
$(document).ready(function(){
 
$('.aboutus-slick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
   responsive: [


    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
       
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
          prevArrow: '<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
      }
    },
    {
      breakpoint: 582,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          prevArrow: '<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          prevArrow: '<button class="prev"></button>',
        nextArrow:'<button class="next"></button>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
			$('.button[filter="all"]').click(function(event) {
				/* Act on the event */
				$('.work__block > div').hide(300);
				$('.work__block > div').show(300);

			});
			$('.button[filter="design"]').click(function(event) {
				/* Act on the event */
				$('.work__block > div').hide(300);
				$('.work__block > div[filter="design"]').show(300);

			});
			$('.button[filter="branding"]').click(function(event) {
				/* Act on the event */
				$('.work__block > div').hide(300);
				$('.work__block > div[filter="branding"]').show(300);

			});
			$('.button[filter="development"]').click(function(event) {
				/* Act on the event */
				$('.work__block > div').hide(300);
				$('.work__block > div[filter="development"]').show(300);

			});
			$('.button[filter="strategy"]').click(function(event) {
				/* Act on the event */
				$('.work__block > div').hide(300);
				$('.work__block > div[filter="strategy"]').show(300);

			});
		$(".header-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	});