// Obsługa otwierania i zamykania menu
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Funkcja do otwierania/zamykania menu
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open'); // Dodajemy lub usuwamy klasę 'open'
});
