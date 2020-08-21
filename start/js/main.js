$(function () {
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: false,
              }
            },
            
          ]
    });
    
});