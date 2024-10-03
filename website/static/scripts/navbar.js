document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    navbarToggler.addEventListener('click', function () {
        navbarTogglerIcon.style.backgroundImage = navbarToggler.classList.contains('collapsed') 
            ? "url('/static/icons/cross.svg')" 
            : "url('/static/icons/burger.svg')";
    });

    navbarTogglerIcon.style.backgroundImage = navbarToggler.classList.contains('collapsed') 
        ? "url('/static/icons/burger.svg')" 
        : "url('/static/icons/cross.svg')";

    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('fixed-top', window.scrollY > 50);
    });
});