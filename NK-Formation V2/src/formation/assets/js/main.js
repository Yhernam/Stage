/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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