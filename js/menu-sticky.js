$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.nav_menu').addClass('fixed');
    } else {
        $('.nav_menu').removeClass('fixed');
    }
});
