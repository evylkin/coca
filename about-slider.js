import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
export const useAboutSlider = () => {
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
      nextEl: '.hero__slider-btn',
    },
  });
};
export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    spaceBetween: 32,
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 3,
      },
    },
    loop: true,
    modules: [Navigation],
    navigation: {
      nextEl: '.team__slider-btn',
    },
  });
};
