new Swiper(".image-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    dynamicBullets: "true",
  },

  keyboard: {
    enabled: "true",
    onlyInViewport: "true",
    pageIpDown: "true  ",
  },
  slidesPerView: "3",
  spaceBetween: "10",
  loop: "true",
  autoHeight: "true",

  autoplay: {
    delay: "1000",
    stopOnLastSlide: "false",
    diasbledOnInteraction: "true",
  },
  speed: "1000",

  // effect: "fade",

  // fadeEffect: {
  //   crossfade: "true",
  // },

  breakpoints: {
    320: { slidesPerView: 1 },
    420: { slidesPerView: 2 },
    922: { slidesPerView: 3 },
  },
});
