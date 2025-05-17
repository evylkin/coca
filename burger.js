export const useBurger = () => {
  const burgerBtn = document.querySelector('[data-burger="btn"]');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const body = document.body;

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
    body.classList.toggle('body--fixed');
  });

  overlay.addEventListener('click', closeBurgerMenu);
};

// Получаем шапку
const header = document.querySelector('.header');

// Порог скролла, после которого добавляется фон (например, 10px)
const scrollThreshold = 10;

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }
});
