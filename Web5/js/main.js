$(document).ready(function () {
    
$('.friend__slick').slick({
    slidesToShow: 3,
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
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
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
});