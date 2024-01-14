import Isotope from "isotope-layout";
import "isotope-packery";
import $ from "jquery";

const Packery = require('packery');

let isIsotopeInit = false;

let $grid;

$(document).ready(function () {
    let hashFilter;

    const getHashFilter = () => {

        if (location.hash) {
            hashFilter = location.hash.replace('#','');
        }

        return hashFilter;
    }

    const onHashchange = () => {
        var hashFilter = getHashFilter();

        if (!hashFilter && isIsotopeInit) {
            return;
        }
        isIsotopeInit = true;
        if (hashFilter) {
            $grid.arrange({filter: '.filter-' + hashFilter});
            $('.category__wrapper .is-checked').removeClass('is-checked');
            $('.category__wrapper').find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
        }
    }

    const elem = document.querySelector('.grid');

    if (elem) {
        $grid = new Isotope(elem, {
            layoutMode: 'packery',
            itemSelector: '.grid-item'
        });
    }

    $('.js-filter-menu').on('click', '.js-category__item', function () {
        var filterValue = $(this).attr('data-filter');
        /*$grid.arrange({filter: filterValue});*/
        $('.js-filter-menu .js-category__item').removeClass('is-checked');
        $(this).toggleClass('is-checked');

        location.hash = encodeURIComponent($(this).attr('data-filter'));
        $('html, body').animate({
            scrollTop: parseInt($(".grid").offset().top-85)
        }, 100);
    })

    if ($(window).width() < 900) {
        $('.filter-button-group').on('click', '.js-category__item', function () {
            $('.category__wrapper').toggleClass('active');
        })
    }

    $(window).on('hashchange', onHashchange.bind($grid));
    onHashchange($grid);
});

