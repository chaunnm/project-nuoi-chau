document.addEventListener("DOMContentLoaded", () => {
  if (window.__swiperInitialized) return;
  window.__swiperInitialized = true;

  new Swiper(".reviewSwiper", {
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
      delay: 20000,
      disableOnInteraction: false,
    },
  });
});
