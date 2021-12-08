let imgBg = document.querySelector('.img-container');
let arrowRight = document.querySelector('.fa-arrow-right');
let arrowLeft = document.querySelector('.fa-arrow-left');
let counterOne = document.querySelector('.counter');
let counterTwo = document.querySelector('.counter2');
let closeNav = document.querySelector('.fa-window-close');
let openNav = document.querySelector('.fa-bars');
let Nav = document.querySelector('.mobile-nav');
let city = document.querySelector('.place');


openNav.addEventListener('click', showNav);
closeNav.addEventListener('click', hideNav);



function showNav() {
    Nav.classList.add('showNav');
}

function hideNav() {
    Nav.classList.remove('showNav');
}

let locations = ['aarhus', 'tokyo', 'seoul', 'manila'];
imgBg.style.backgroundImage = 'url(/bgimgs/1.jpg)';
counterOne.innerText = '1/4';
counterTwo.innerText = '1/4';
city.innerText = locations[0];

arrowLeft.addEventListener('click', () => {
    let num = +imgBg.style.backgroundImage.split('/')[2][0];
    num == 1 ? num = 4 : num--;
    imgBg.style.backgroundImage = `url(/bgimgs/${num}.jpg)`;
    counterOne.innerText = `${num}/4`;
    counterTwo.innerText = `${num}/4`;
    city.innerText = `${locations[num - 1]}`;
})

arrowRight.addEventListener('click', () => {
    let num = +imgBg.style.backgroundImage.split('/')[2][0];
    num == 4 ? num = 1 : num++;
    imgBg.style.backgroundImage = `url(/bgimgs/${num}.jpg)`;
    counterOne.innerText = `${num}/4`;
    counterTwo.innerText = `${num}/4`;
    city.innerText = `${locations[num - 1]}`;
})

