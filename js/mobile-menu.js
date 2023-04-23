
// Шукаємо елементи в html розмітці
const mobileMenu = document.querySelector('[data-menu]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const body = document.querySelector("body");
// Кінець 1 блоку

// Функція, яка додає та знімає класи через toggle
const toggleMenu = () => {
  const isMenuOpen =
    mobileMenu.classList.toggle('is-hidden');
  body.classList.toggle("scroll")
};
// Кінець 2 блоку

// Обробник події по кліку мишки
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
// Кінець 3 блоку

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.add('is-hidden');
  body.classList.remove('scroll');
});