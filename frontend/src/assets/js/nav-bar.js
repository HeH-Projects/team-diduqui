$(document).ready(function() {
    // Get current pathname and assign 'active' class to the correct link
    $('.navbar-nav > li > a').mouseenter(function() {
        $(this).children().addClass('fa-spin');
    });

    $('.navbar-nav > li > a').mouseleave(function() {
        $(this).children().removeClass('fa-spin');
    });
});
