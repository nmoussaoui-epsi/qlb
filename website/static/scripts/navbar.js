document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    navbarToggler.addEventListener('click', function () {
        if (navbarToggler.classList.contains('collapsed')) {
            navbarTogglerIcon.style.backgroundImage = "url('/static/icons/cross.svg')";
        } else {
            navbarTogglerIcon.style.backgroundImage = "url('/static/icons/burger.svg')";
        }
    });

    if (!navbarToggler.classList.contains('collapsed')) {
        navbarTogglerIcon.style.backgroundImage = "url('/static/icons/cross.svg')";
    } else {
        navbarTogglerIcon.style.backgroundImage = "url('/static/icons/burger.svg')";
    }
});
