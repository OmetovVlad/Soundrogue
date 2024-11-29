import * as functions from "./modules/functions.js";
import "./modules/animation.js";

// functions.isWebp();

functions.range();
functions.mobileMenu();
functions.videoIndexPage();
functions.smoothScroll();

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    infinite: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                // slidesToShow: 8,
                vertical: false,
                arrows: false,
                dots: false,
                variableWidth: true
            }
        }
    ]
});

$(window).resize(function(){
    $('.slider-for').slick('refresh');
    $('.slider-nav').slick('refresh');
});