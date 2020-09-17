$(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    dotsClass:'header-dots',
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.menu').on('click', function(){
  $('.menu__side').slideToggle();
});


  
});