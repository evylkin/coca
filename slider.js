import Swiper from 'swiper';
import 'swiper/css';
export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  });
};
