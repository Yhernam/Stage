/*=============== SWIPER JS ===============*/
function initSwiper(containerSelector, paginationSelector, nextButtonSelector, prevButtonSelector) {
  return new Swiper(containerSelector + " .card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
      el: containerSelector + " " + paginationSelector,
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: containerSelector + " " + nextButtonSelector,
      prevEl: containerSelector + " " + prevButtonSelector,
    },

    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
}


let swiperCards1 = initSwiper(".swiper1", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards2 = initSwiper(".swiper2", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards3 = initSwiper(".swiper3", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards4 = initSwiper(".swiper4", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

