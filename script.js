const menuToggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Abre e fecha o menu mobile ao clicar no botão hambúrguer
function toggleMobileMenu() {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggleButton.setAttribute('aria-expanded', String(isOpen));
}

menuToggleButton.addEventListener('click', toggleMobileMenu);

// Fecha o menu mobile automaticamente ao clicar em um link
// (a rolagem suave até a seção já é feita pelo CSS, não precisa de JS para isso)
navLinks.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('is-open');
    menuToggleButton.setAttribute('aria-expanded', 'false');
  });
});
