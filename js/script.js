$(function () {
    'use strict'

    // Hamburger Menu js start here
    $(document).ready(function () {
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });

    // Preloader
    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 1000);

    // Menu Fixing js start here
    var navOff = $('.navbar').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 1) {
            $('.navbar').addClass('menu_fix');
        } else {
            $('.navbar').removeClass('menu_fix');
        }

    });

});