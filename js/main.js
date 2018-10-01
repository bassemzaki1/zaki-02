/*global $ */

$(function () {
    'use strict';
    
    // Click To Move To Another Section
	$('.navbar .navbar-nav .nav-item a.nav-link').click(function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop:  $($(this).data('scroll')).offset().top
        }, 1000);
    });
    
    
    // Click Button To Go To Top
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    
});