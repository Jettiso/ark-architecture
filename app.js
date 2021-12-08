let imgBg = document.querySelector('.img-container');
let arrowRight = document.querySelector('.fa-arrow-right');
let arrowLeft = document.querySelector('.fa-arrow-left');
let counterOne = document.querySelector('.counter');
let counterTwo = document.querySelector('.counter2');
let closeNav = document.querySelector('.fa-window-close');
let openNav = document.querySelector('.fa-bars');
let Nav = document.querySelector('.mobile-nav');


openNav.addEventListener('click', showNav);
closeNav.addEventListener('click', hideNav);



function showNav() {
    Nav.classList.add('showNav');
}

function hideNav() {
    Nav.classList.remove('showNav');
}