$('.metriki-tab__item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.metriki-tab__content').eq($(this).index()).addClass('active').siblings().removeClass('active')
})
$('.burger').on('click', function () {
    $('.header__menu').addClass('active');
})
$('.close-menu').click(function () {
    $('.header__menu').removeClass('active');
})