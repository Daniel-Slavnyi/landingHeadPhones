'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.btn-burger'),
        menu = document.querySelector('.mobile-menu');


    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        menu.classList.toggle('close');
    });
});