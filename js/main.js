$(document).ready((function(){$(".metriki-tab__item").on("click",(function(){$(this).addClass("active").siblings().removeClass("active"),$(".metriki-tab__content").eq($(this).index()).addClass("active").siblings().removeClass("active")})),$(".burger").on("click",(function(){$(".header__menu").slideToggle(500),$(".main-screen__content h1").toggleClass("hidden"),$(this).toggleClass("active"),$(".main-screen img").toggleClass("static")})),window.addEventListener("resize",(function(){i()}));var e=new Swiper(".advantages__inner",{spaceBetween:30,slidesPerView:3,slidesPerGroup:1,speed:800,effect:"slide",breakpoints:{280:{slidesPerView:"auto",loop:!0,centeredSlides:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},660:{slidesPerView:3,loop:!1,centeredSlides:!1,effect:"slide"}}});function i(){window.innerWidth<=1023?$(".header__menu").appendTo(".main-screen__content"):$(".header__menu").appendTo(".header-menu__wrapper")}e.on("slideChange",(function(){$(".advantages__circle-item").eq(e.realIndex).addClass("active").siblings().removeClass("active")})),$(".advantages__item").on("click",(function(){e.slideTo($(this).index(),800),$(".advantages__circle-item").eq($(this).index()).addClass("active").siblings().removeClass("active")})),i()}));