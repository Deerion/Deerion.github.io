// Efekt parallax - Ruch tła podczas przewijania strony
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    let offset = window.pageYOffset;
    header.style.backgroundPosition = 'center ' + offset * 0.5 + 'px';
});
