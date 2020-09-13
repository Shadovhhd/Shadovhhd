$(function () {

    $(".photo__slider").slick({
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/Arrow-left.svg" alt=""></img>',

        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/Arrow-right.svg" alt=""></img>',
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 700,
            settings: {
                infinite: true,
                arrows: false
            }
        }, ]
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
    $('.footer__inner-title').on('click', function () {
        $('.footer__inner-list').slideToggle();
        if ($('.footer-down').hasClass("true")) {
            $('.footer-down').hide();
            $('.footer-down').removeClass("true");
        } else {
            $('.footer-down').show();
            $('.footer-down').addClass("true");
        };
    });
});