import ScrollReveal from "scrollreveal";

var slideUp100 = {
    distance: '50%',
    origin: 'bottom',
    duration: 1500,
    opacity: 0,
    delay: 100
};

var slideUp200 = {
    distance: '50%',
    origin: 'bottom',
    duration: 1500,
    opacity: 0,
    delay: 200
};

var slideUp300 = {
    distance: '50%',
    origin: 'bottom',
    duration: 1500,
    opacity: 0,
    delay: 300
};

var slideUp400 = {
    distance: '50%',
    origin: 'bottom',
    duration: 1500,
    opacity: 0,
    delay: 400
};

var slideLeft = {
    distance: '50%',
    origin: 'left',
    duration: 1500,
    opacity: 0,
    delay: 250
};

var slideRight = {
    distance: '50%',
    origin: 'right',
    duration: 1500,
    opacity: 0,
    delay: 250
};

var revealDown = {
    duration: 1500,
    scale: 0.7,
    opacity: 0
};

var opacity = {
    duration: 2000,
    scale: 0.9,
    opacity: 0.1,
    delay: 300
};

ScrollReveal().reveal('.reveal-up100', slideUp100);
ScrollReveal().reveal('.reveal-up200', slideUp200);
ScrollReveal().reveal('.reveal-up300', slideUp300);
ScrollReveal().reveal('.reveal-up400', slideUp400);
ScrollReveal().reveal('.reveal-left', slideLeft);
ScrollReveal().reveal('.reveal-right', slideRight);
ScrollReveal().reveal('.reveal-down', revealDown);
ScrollReveal().reveal('.reveal-opacity', opacity);