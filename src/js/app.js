import * as functions from "./modules/functions.js";
import "./modules/animation.js";
import "./modules/smoothScroll.js";

// functions.isWebp();

functions.range();
functions.mobileMenu();
functions.videoIndexPage();
functions.emailValidation();
functions.emailSubscribe();

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToScroll: 1,
    slidesToShow: 8,
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
                slidesToScroll: 5,
                slidesToShow: 8,
                vertical: false,
                arrows: false,
                dots: false,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToScroll: 5,
                slidesToShow: 6,
                vertical: false,
                arrows: false,
                dots: false,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToScroll: 5,
                slidesToShow: 5,
                vertical: false,
                arrows: false,
                dots: false,
            }
        }, {
            breakpoint: 575,
            settings: {
                // slidesToShow: 8,
                slidesToShow: 4,
                vertical: false,
                arrows: false,
                dots: false,
            }
        }
    ]
});

// $(window).resize(function(){
//     $('.slider-for').slick('refresh');
//     $('.slider-nav').slick('refresh');
// });