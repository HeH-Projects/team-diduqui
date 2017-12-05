$(document).ready(function() {
    // Get current pathname and assign 'active' class to the correct link
    var path = window.location.pathname;
    $('.navbar-nav > li').removeClass("active");
    $('a[href="'+path+'"]').parent().addClass('active');
});
