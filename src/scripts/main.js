'use strict';

const heroSwiper = new Swiper('.hero__photo', {
  loop: true,

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  speed: 1200,

  autoplay: {
    delay: 30000, // ⏱️ 30 секунд
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: '.hero__arrow--right',
    prevEl: '.hero__arrow--left',
  },
});
