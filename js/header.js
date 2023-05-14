"use strict";
/*-----burger---------*/
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');

function activeFuntction (e) {
    const targetElement = e.target;
    if (e.target.closest('.header__burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    }
}

document.addEventListener('click', activeFuntction);


/*--------------зменшення висоти шапки при скроллі-----------------*/
const headerConteiner = document.querySelector('.header__conteiner');
const stiki = headerConteiner.clientHeight;

function myFunction () {
    if (window.scrollY > stiki) {
        headerConteiner.classList.add('scroll');
    } else {
        headerConteiner.classList.remove('scroll');
    };
}


document.addEventListener('scroll', myFunction);
