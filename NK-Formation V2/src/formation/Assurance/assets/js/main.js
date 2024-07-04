/*=============== SWIPER JS ===============*/
function initSwiper(containerSelector, paginationSelector, nextButtonSelector, prevButtonSelector) {
  return new Swiper(containerSelector + " .card__content", {
    loop: false,
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
        slidesPerView: 2,
      },
    },
  });
}


let swiperCards1 = initSwiper(".swiper1", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards2 = initSwiper(".swiper2", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards3 = initSwiper(".swiper3", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards4 = initSwiper(".swiper4", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");
let swiperCards5 = initSwiper(".swiper5", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll('.card__article');

  articles.forEach(article => {
    const infoBtn = article.querySelector('.info-btn');
    const infoLabel = article.querySelector('.info-label');
    const modal = article.querySelector('.info-modal');
    const modalClose = modal.querySelector('.close-btn');

    // Vérifiez que les éléments existent avant de continuer
    if (!infoBtn || !infoLabel || !modal || !modalClose) {
      return;
    }

    // Remplacer l'image du bouton en fonction de la taille de la fenêtre
    function replaceImage() {
      if (window.innerWidth <= 991) {
        infoBtn.src = 'assets/img/new-info.png';
      } else {
        infoBtn.src = 'assets/img/info.svg';
      }
    }

    // Remplacer le texte de l'étiquette en fonction de la taille de la fenêtre
    function replaceInfoLabelText() {
      if (window.innerWidth <= 991) {
        infoLabel.textContent = 'Cliquez pour plus d\'infos';
      } else {
        infoLabel.textContent = infoLabel.dataset.originalText; // Utiliser le texte original stocké dans data-original-text
      }
    }

    // Stocker le texte original dans un attribut de données
    infoLabel.dataset.originalText = infoLabel.textContent;

    // Remplacer l'image et le texte de l'étiquette au chargement de la page
    replaceImage();
    replaceInfoLabelText();

    // Remplacer l'image et le texte de l'étiquette lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
      replaceImage();
      replaceInfoLabelText();
    });

    // Afficher la modale lors du clic sur le bouton d'information ou le texte
    function showModal() {
      if (window.innerWidth <= 991) {
        modal.style.display = 'block';
      }
    }

    infoBtn.addEventListener('click', showModal);
    infoLabel.addEventListener('click', showModal);

    // Fermer la modale
    modalClose.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Fermer la modale lorsqu'on clique à l'extérieur
    window.addEventListener('click', function (event) {
      if (!modal.contains(event.target) && !infoBtn.contains(event.target) && !infoLabel.contains(event.target)) {
        modal.style.display = 'none';
      }
    });
  });
});
