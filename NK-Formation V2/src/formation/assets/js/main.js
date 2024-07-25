function initSwiper(containerSelector, paginationSelector, nextButtonSelector, prevButtonSelector, breakpoints) {
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

    breakpoints: breakpoints,
  });
}

// Définissez les breakpoints spécifiques pour chaque swiper
const breakpointsSwiper1 = {
  600: {
    slidesPerView: 1,
  },
  991: {
    slidesPerView: 2,
  },
};

const breakpointsSwiper2 = {
  600: {
    slidesPerView: 2,
  },
  968: {
    slidesPerView: 3,
  }
};

// Initialisez chaque swiper avec des breakpoints différents
let swiperCards1 = initSwiper(".swiper1", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper1);
let swiperCards2 = initSwiper(".swiper2", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper2);





var div = document.getElementById('main');
var display = 0;

function hideShow()
{
  if(display == 1)
  {
    div.style.display = 'block';
    display = 0;
  }
  else
  {
    div.style.display = 'none';
    display = 1;
  }
}