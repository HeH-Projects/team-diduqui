$(document).ready(function() {
    // Get current pathname and assign 'active' class to the correct link
    var path = window.location.pathname;
    $('.navbar-nav > li').removeClass('active');
    $('a[href="'+path+'"]').parent().addClass('active');

    $('.navbar-nav > li > a').mouseenter(function() {
        $(this).children().addClass('fa-spin');
    });

    $('.navbar-nav > li > a').mouseleave(function() {
        $(this).children().removeClass('fa-spin');
    });
});
