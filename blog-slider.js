import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const useBlogSlider = () => {
  new Swiper('.hero__slider', {
    spaceBetween: 32,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.hero__slider-button',
    },
  });
};
export const useArticleSlider = () => {
  new Swiper('.articles-slider__wrapper', {
    spaceBetween: 32,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
      prevEl: '.articles-slider__btn--prev',
      nextEl: '.articles-slider__btn--next',
    },
  });
};
