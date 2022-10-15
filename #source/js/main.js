$(document).ready(function () {
    $('.metriki-tab__item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.metriki-tab__content').eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
    $('.burger').on('click', function () {
        $('.header__menu').slideToggle(500);
        $('.main-screen__content').find('h1').toggleClass('hidden')
        $(this).toggleClass('active');
        $('.main-screen img').toggleClass('static');
    })
    window.addEventListener('resize', function () {
        mobMenu();
    })
    //var circleSlider = new Swiper(".advantages__circle", {
    //    spaceBetween: 0,
    //    slidesPerView: 1,
    //    slidesPerGroup: 1,
    //    speed: 300,
    //    watchSlidesProgress: true,
    //    breakpoints: {
    //        280: {
    //            effect: "slide",
    //        },
    //        1360: {
    //            effect: "fade",
    //        },
    //    },
    //});

    var advantagesSlider = new Swiper(".advantages__inner", {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 800,
        effect: "slide",
        breakpoints: {
            280: {
                slidesPerView: "auto",
                loop: true,
                centeredSlides: true,
                effect: "coverflow",
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },
            },
            660: {
                slidesPerView: 3,
                loop: false,
                centeredSlides: false,
                effect: "slide",
            },
        },
    });
    advantagesSlider.on('slideChange', function () {
        $('.advantages__circle-item').eq(advantagesSlider.realIndex).addClass('active').siblings().removeClass('active');
    });
    $('.advantages__item').on('click', function () {
        advantagesSlider.slideTo(($(this).index()), 800)
        $('.advantages__circle-item').eq($(this).index()).addClass('active').siblings().removeClass('active')
    })
    function mobMenu() {
        if (window.innerWidth <= 1023) {
            $('.header__menu').appendTo('.main-screen__content')
        } else {
            $('.header__menu').appendTo('.header-menu__wrapper')
        }
    }
    mobMenu();
})