import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,

  autoplay: {
    delay: 5000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
});
