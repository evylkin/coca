import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.insight__slider-btn',
    },
  });
};
export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
