import LocomotiveScroll from 'locomotive-scroll';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/swiper-bundle.css';
/* const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
}); */

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  function shortText(selektor, maxDelka) {
    const elementy = document.querySelectorAll(selektor);
    elementy.forEach(element => {
      if (element.innerText.length > maxDelka) {
        element.innerText = element.innerText.substring(0, maxDelka) + '...';
      }
    });
  }
  
  // Použití funkce
  shortText('.blog-item__text', 200);