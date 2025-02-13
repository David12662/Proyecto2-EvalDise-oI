document.addEventListener('DOMContentLoaded', function () {
    var cartOffcanvas = document.getElementById('cartOffcanvas');
    cartOffcanvas.addEventListener('shown.bs.offcanvas', function () {
        cartOffcanvas.classList.add('fade-in');
    });
});