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




// =================== SLIDERS => HIDE AND SHOW =================== //
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


// =================== MODAL => HIDE AND SHOW  =================== //

document.addEventListener("DOMContentLoaded", function () {
  const articles = document.querySelectorAll('.card__article_Formation');

  articles.forEach(article => {
    const infoBtn = article.querySelector('.info-btn');
    const infoLabel = article.querySelector('.info-label');
    const modal = article.querySelector('.info-modal_Formation');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;

    // Vérifiez que les éléments existent avant de continuer
    if (!infoBtn || !modal ) {
      return;
    }

    // Remplacer l'image du bouton en fonction de la taille de la fenêtre
    function replaceImage() {
      if (window.innerWidth <= 768) {
        infoBtn.src = 'assets/img/assurance/new-info.png'; // Remplacer par votre nouvelle image
      } else {
        infoBtn.src = 'assets/img/assurance/info.svg'; // Image par défaut
      }
    }

    // Remplacer le texte de l'étiquette en fonction de la taille de la fenêtre
    function replaceInfoLabelText() {
      if (window.innerWidth <= 768) {
        infoLabel.textContent = 'Cliquez pour plus d\'infos';
        infoLabel.classList.add('info-btn'); // Ajouter la classe pour rendre le texte cliquable
      } else {
        infoLabel.textContent = infoLabel.dataset.originalText; // Utiliser le texte original stocké dans data-original-text
        infoLabel.classList.remove('info-btn'); // Retirer la classe pour désactiver le clic
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
      if (window.innerWidth <= 768) {
        modal.style.display = 'block';
        modal.classList.add('show');
      }
    }

    infoBtn.addEventListener('click', showModal);
    infoLabel.addEventListener('click', showModal);


    // Fermer la modale lorsqu'on clique à l'extérieur
    window.addEventListener('click', function (event) {
      if (!modal.contains(event.target) && !infoBtn.contains(event.target) && !infoLabel.contains(event.target)) {
        modal.style.display = 'none';
        modal.classList.remove('show');
      }
    });
  });
});
