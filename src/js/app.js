import * as functions from "./modules/functions.js";
import "./modules/animation.js";
import "./modules/smoothScroll.js";

functions.isWebp();

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

    // autoplay: true,
    // autoplaySpeed: 4000,

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
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

const sliderBlock = document.querySelector('#key_features');

if (sliderBlock) {
    document.addEventListener('scroll', onScroll);

    function onScroll() {
        const posTop = sliderBlock.getBoundingClientRect().top;

        if (posTop + sliderBlock.clientHeight <= window.innerHeight && posTop >= 0) {
            sliderBlock.classList.add('visible');
            $('.slider-for').slick('slickSetOption', {
                autoplay: true,
                autoplaySpeed: 6000,
            }, true);
            document.removeEventListener('scroll', onScroll);
        }
    }
}

// $(window).resize(function(){
//     $('.slider-for').slick('refresh');
//     $('.slider-nav').slick('refresh');
// });