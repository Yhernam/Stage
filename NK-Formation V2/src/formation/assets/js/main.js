function initSwiper(containerSelector, paginationSelector, nextButtonSelector, prevButtonSelector, breakpoints) {
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

    breakpoints: breakpoints,
  });
}

// Définissez les breakpoints spécifiques pour chaque swiper
const breakpointsSwiper1 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper2 = {
  600: {slidesPerView: 2,},
  968: {slidesPerView: 3,}
};
const breakpointsSwiper3 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper4 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper5 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper6 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper7 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper8 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper9 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper11 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper12 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper13 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper14 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper15 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper16 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
const breakpointsSwiper10 = {
  600: {slidesPerView: 1,},
  991: {slidesPerView: 2,},
};
// Initialisez chaque swiper avec des breakpoints différents
let swiperCards1 = initSwiper(".swiper1", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper1);
let swiperCards2 = initSwiper(".swiper2", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper2);
let swiperCards3 = initSwiper(".swiper3", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper3);
let swiperCards4 = initSwiper(".swiper4", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper4);
let swiperCards5 = initSwiper(".swiper5", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper5);
let swiperCards6 = initSwiper(".swiper6", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper6);
let swiperCards7 = initSwiper(".swiper7", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper7);
let swiperCards8 = initSwiper(".swiper8", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper8);
let swiperCards9 = initSwiper(".swiper9", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper9);
let swiperCards10 = initSwiper(".swiper10", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper10);
let swiperCards11 = initSwiper(".swiper11", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper11);
let swiperCards12 = initSwiper(".swiper12", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper12);
let swiperCards13 = initSwiper(".swiper13", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper13);
let swiperCards14 = initSwiper(".swiper14", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper14);
let swiperCards15 = initSwiper(".swiper15", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper15);
let swiperCards16 = initSwiper(".swiper16", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev", breakpointsSwiper16);



// =================== SLIDERS => HIDE AND SHOW =================== //
// Array of IDs to be controlled
const controlledIds = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth'];

function hideShow(id) {
  if (controlledIds.includes(id)) {
    // Hide all other divs
    controlledIds.forEach(otherId => {
      if (otherId !== id) {
        var otherDiv = document.getElementById(otherId);
        if (otherDiv) {
          otherDiv.style.display = 'none';
        }
      }
    });

    // Toggle the clicked div
    var div = document.getElementById(id);
    if (div) {
      if (div.style.display === 'none') {
        div.style.display = 'block';
      } else {
        div.style.display = 'none';
      }
    }
  }
}
controlledIds.forEach(id => {
  var div = document.getElementById(id);
  if (div) {
    div.addEventListener('click', () => hideShow(id));
  }
});


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


// =================== DEPLIANT MODULE => CHANGER CARD  =================== //
document.addEventListener('DOMContentLoaded', () => {
  const moduleSelectElements = document.querySelectorAll('.modules-dropdown');

  moduleSelectElements.forEach(selectElement => {
      selectElement.addEventListener('change', (event) => {
          const selectedModules = event.target.value;
          const cardDataElement = event.target.closest('.card__data_Formation');

          updateCardContent(cardDataElement, selectedModules);
      });
  });

  function updateCardContent(cardDataElement, selectedModules) {
      const descriptionList = cardDataElement.querySelector('.card__description_Formation');
      const learnMoreButton = cardDataElement.querySelector('.card__button_Formation');

      let hours, modulesText, price, description, learnMoreLink;
// Changer de méthode, par autre chose que de l'injection html
// faire comme pour l'apparition des sliders, voir pourquoi l'injection html n'est pas bien
      switch(selectedModules) {
          case '1':
              hours = '57h';
              modulesText = '5 Modules';
              description = 'Les Assurances de Personnes';
              learnMoreLink = '#';
              break;
          case '2':
              hours = '37h';
              modulesText = '6 Modules';
              description = '<strong>Les assurances de personnes</strong><br> assurances vie et capitalisation';
              learnMoreLink = '#';
              break;
          case '3':
              hours = '43h';
              modulesText = '8 Modules';
              description = '<strong>Les assurances de personnes</strong><br> les contrats collectifs';
              learnMoreLink = '#';
              break;
          case '4':
              hours = '27h';
              modulesText = '2 Modules';
              description = 'Les assurances de biens et de responsabilité';
              learnMoreLink = '#';
              break;

          case '5':
              hours = '15h';
              modulesText = '2 Modules';
              description = "Les assurances de Personnes + Le Plan d'Épargne Salariale";
              learnMoreLink = '#';
              break;
          case '6':
              hours = '15h';
              modulesText = '2 Modules';
              description = "Les assurances IARD + Le Plan d'Épargne Salariale";
              learnMoreLink = '#';
              break;
          case '7':
              hours = '15h';
              modulesText = '2 Modules';
              description = "RGPD + L'assurance Emprunteur";
              learnMoreLink = '#';
              break;
          case '8':
              hours = '15h';
              modulesText = '2 Modules';
              description = 'Les Médias Sociaux + Les assurances IARD';
              learnMoreLink = '#';
              break;
          case '9':
                hours = '15h';
                modulesText = '2 Modules';
                description = "Techniques de Vente + Le Plan d'Épargne Salariale";
                learnMoreLink = '#';
                break;
            case '10':
                hours = '15h';
                modulesText = '2 Modules';
                description = 'Techniques de Vente + Prévention et Conformité';
                learnMoreLink = '#';
                break;
            case '11':
                hours = '15h';
                modulesText = '2 Modules';
                description = 'Techniques de Vente + Les Médias Sociaux';
                learnMoreLink = '#';
                break;
            case '12':
                hours = '15h';
                modulesText = '2 Modules';
                description = 'Les assurances de Personnes + Les Médias Sociaux';
                learnMoreLink = '#';
                break;
            case '13':
                hours = '15h';
                modulesText = '2 Modules';
                description = 'Les assurances IARD + Prévention et Conformité';
                learnMoreLink = '#';
                break;
            case '14':
                hours = '15h';
                modulesText = '2 Modules';
                description = 'Les assurances de Personnes + Prévention et Conformité';
                learnMoreLink = '#';
                break;
            case '15':
                hours = '15h';
                modulesText = '2 Modules';
                description = "L'environnement de la Distribution d'assurance et ses Évolutions + Le Plan d'Épargne Salariale";
                learnMoreLink = '#';
                break;
            case '16':
                hours = '15h';
                modulesText = '2 Modules';
                description = "L'environnement de la Distribution d'assurance et ses Évolutions + Prévention et Conformité";
                learnMoreLink = '#';
                break;
            case '17':
                hours = '15h';
                modulesText = '2 Modules';
                description = "L'environnement de la Distribution d'assurance et ses Évolutions + Les Médias Sociaux";
                learnMoreLink = '#';
                break;
            case '18':
                  hours = '15h';
                  modulesText = '2 Modules';
                  description = "L'assurance Vie et l'Épargne Retraite + L'assurance Emprunteur";
                  learnMoreLink = '#';
                  break;

            case '19':
                hours = '16h';
                modulesText = '2 Modules';
                description = 'Parcours Financement immobilier + Prêts locatifs';
                learnMoreLink = '#';
                break;
            case '20':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = "Parcours Garanties immobilières (+Techniques de vente)";
                  learnMoreLink = '#';
                  break;
            case '21':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Rachat de crédit';
                  learnMoreLink = '#';
                  break;
            case '22':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Financement immobilier + Protection et assurance Emprunteur';
                  learnMoreLink = '#';
                  break;
            case '23':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Crédit immobilier';
                  learnMoreLink = '#';
                  break;
            case '24':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Financement immobilier + Prêts viagers hypothécaires et hypothèques';
                  learnMoreLink = '#';
                  break;
            case '25':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Financement immobilier + Réseaux Sociaux RGPD';
                  learnMoreLink = '#';
                  break;
            case '26':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Défiscalisation';
                  learnMoreLink = '#';
                  break;
            case '27':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'VEFA';
                  learnMoreLink = '#';
                  break;
            case '28':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'SCI';
                  learnMoreLink = '#';
                  break;
            case '29':
                    hours = '16h';
                    modulesText = '2 Modules';
                    description = 'Parcours Réseaux Sociaux';
                    learnMoreLink = '#';
                    break;
            case '30':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Parcours Force de vente';
                  learnMoreLink = '#';
                  break;
            case '31':
                  hours = '16h';
                  modulesText = '2 Modules';
                  description = 'Copropriété';
                  learnMoreLink = '#';
                  break;
            case '32':
                    hours = '16h';
                    modulesText = '2 Modules';
                    description = 'Parcours Rac Consommation';
                    learnMoreLink = '#';
                    break;
          default:
              return;
      }

      // Met à jour les éléments de la card
      descriptionList.querySelector('li:nth-child(1)').innerHTML = `<img src="assets/img/assurance/clock.svg" alt="">${hours}<br>`;
      descriptionList.querySelector('li:nth-child(2)').innerHTML = `<img src="assets/img/assurance/chapter.png" alt="">${modulesText}`;
      descriptionList.querySelector('.info-label').innerHTML = description;
      learnMoreButton.setAttribute('href', learnMoreLink);
  }
});
