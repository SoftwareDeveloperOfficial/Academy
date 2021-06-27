var navLinks = document.getElementById("nav-links");

function hideMenu(){
    navLinks.style.right = "-200px";
}

function showMenu(){
    navLinks.style.right = "0px";
}

$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
    });