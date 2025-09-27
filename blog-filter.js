export const useFilter = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const buttonsContainer = document.querySelector('.hero__buttons');
    const slides = document.querySelectorAll('.hero__slide');
    const buttonElements = document.querySelectorAll('.hero__button');

    if (!buttonsContainer || slides.length === 0) return;

    // Обработчик кликов
    buttonsContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('hero__button')) {
        const filter = e.target.dataset.f;

        // Фильтруем слайды
        slides.forEach((slide) => {
          slide.style.display =
            filter === 'all' || slide.classList.contains(filter) ? '' : 'none';
        });

        // Убираем активный класс у всех кнопок
        buttonElements.forEach((btn) => {
          btn.classList.remove('hero__button--active');
        });

        // Добавляем активный класс к нажатой кнопке
        e.target.classList.add('hero__button--active');
      }
    });

    // Активируем кнопку "View all" при загрузке
    const allButton = document.querySelector('[data-f="all"]');
    if (allButton) {
      allButton.classList.add('hero__button--active');
    }
  });
};
