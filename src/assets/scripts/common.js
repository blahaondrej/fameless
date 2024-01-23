import LocomotiveScroll from 'locomotive-scroll';
import 'bootstrap';
import $ from "jquery";
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'
import { Navigation, Pagination } from 'swiper/modules';

// import styles bundle
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import lightbox from 'lightbox2';
/* import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin"; */

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'albumLabel': "Obrázek %1 z %2"
});


/*gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,TextPlugin);
 const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
}); */

const swiper = new Swiper('.swiper-clients', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  centeredSlides: true,
  speed: 5000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 6.5,
      spaceBetween: 30,
    },
  }
});

const teamswiper = new Swiper('.swiper-team', {
  // Optional parameters
  modules: [Pagination],
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 1000,
  pauseonmouseenter: true,
  autoplay: {
    delay: 200000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.7,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.8,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3.4,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 5.2,
      spaceBetween: 20,
    },
  }
});

const blogswiper = new Swiper('.swiper-blog', {
  // Optional parameters
  modules: [Navigation],
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  pauseonmouseenter: true,
  autoplay: {
    delay: 200000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.8,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});

const studieswiper = new Swiper('.swiper-studie', {
  // Optional parameters
  modules: [Navigation],
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 1000,
  pauseonmouseenter: true,
  autoplay: {
    delay: 200000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-studie-next',
    prevEl: '.swiper-button-studie-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.8,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});

var swiperstudie = new Swiper(".swiper-detail-studie", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiperstudie2 = new Swiper(".swiper-detail-studie2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperstudie,
  },
});

var swiperblogdetail = new Swiper(".swiper-detail-blog", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

  // Accordion

  $(document).ready(function() {
    $('.accordion-item').click(function() {
        // Kontrola, zda kliknutý element již má třídu 'active'
        if ($(this).hasClass('active')) {
            // Odebrání třídy 'active', pokud již element třídu má
            $(this).removeClass('active');
        } else {
            // Odebrání třídy 'active' od všech ostatních elementů
            $('.accordion-item').removeClass('active');

            // Přidání třídy 'active' k aktuálně kliknutému elementu
            $(this).addClass('active');
        }
    });

    $('.accordion-item').click(function() {
      // Nejprve odstraníme speciální třídu ze všech accordion-itemů
      $('.accordion-item').removeClass('no-border');
  
      // Nyní přidáme třídu 'special-class' předcházejícímu elementu toho, na který bylo kliknuto
      $(this).prev('.accordion-item').addClass('no-border');
  });
  
});

var lastScrollTop = 0;
$(window).on('scroll', function() {
  // Sticky element

  // Aktuální pozice scrollování
  var st = $(this).scrollTop();
    
  // Vypočítáme rozdíl mezi aktuální scrollovací pozicí a poslední uloženou scrollovací pozicí
  var delta = st - lastScrollTop;
  
  // Aktualizujeme poslední scrollovací pozici
  lastScrollTop = st;
  
  // Aplikujeme zpoždění pomocí transformace, ale omezíme ho pouze na změny v delta
  $('.sticky-element').css('transform', 'translateY(' + delta + 'px)');
  
  // Reset transformace po dojezdu
  setTimeout(function() {
    $('.sticky-element').css('transform', 'none');
  }, 200); // Zpoždění odpovídající CSS transition

  // Změna barvy body při scrollu
  /* var scrollTop = $(this).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(this).height();

    console.log("scrollTop: " + scrollTop);
    console.log("documentHeight: " + documentHeight);
    console.log("windowHeight: " + windowHeight);

    // Vypočítáme, jaký podíl stránky byl proskrolován
    var scrollPercent = (scrollTop / (documentHeight - windowHeight));
    console.log("scrollPercent: " + scrollPercent);

    // Interpolujeme barvy
    var r = Math.floor(173 + (255 - 173) * scrollPercent);
    var g = Math.floor(232 + (255 - 232) * scrollPercent);
    var b = Math.floor(255 + (255 - 255) * scrollPercent);

    console.log("rgb(" + r + "," + g + "," + b + ")");

    // Nastavíme barvu pozadí
    $('body').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')'); */

    

  var header = $('.header-container');
  if ($(this).scrollTop() > 100) {
      header.addClass('small-header');
  } else {
      header.removeClass('small-header');
  }
  $('.counter').each(function() {
    var $this = $(this);

    // Kontrola, zda je element ve viewportu
    if ($this.is(':visible') && !$this.hasClass('counted')) {
      var countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
        countNum: countTo
      },
      {
        duration: 4000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          // Případně jiné akce po dokončení
        }
      });

      $this.addClass('counted');
    }
  });
  /* var scroll = $(window).scrollTop();
  var newSize = 40 - scroll * 0.50; // 0.20 je faktor změny velikosti
  newSize = Math.max(newSize, 30);  // Minimální velikost obrázku je 40px
  $('.app-logo').css('height', newSize + 'px'); */
});

