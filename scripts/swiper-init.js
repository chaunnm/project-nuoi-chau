const swiper = new Swiper(".reviewSwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 20000, // 10 giây
    disableOnInteraction: false, // user bấm vẫn tiếp tục auto
  },
});
