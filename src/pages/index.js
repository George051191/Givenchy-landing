import './index.css';
import { BurgerMenu } from '../components/burgermenu';

///////////
const burgerButton = document.querySelector('.header__burger-menu');
const closeBurgerMenuButton = document.querySelector('.header__nav-close-button');
const headerNav = document.querySelector('.header__nav')

const firstBlock = document.querySelector('#sec')
const secondBlock = document.querySelector('#pre')

const menu = new BurgerMenu(headerNav, 'header__nav-open');


burgerButton.addEventListener('click', () => {
    menu.openMenu();
})

closeBurgerMenuButton.addEventListener('click', () => {
        menu.closeMenu()
    })
    ////////////////






const text = '“To me, fashion expresses a point of view where formality and informality, construction and comfort co-exist. My ethos is about the luxury of infusing clothes with your own personality, not being worn by them ”'

const array = [...text]
const makeBeautyText = () => {
    /*  array.forEach((el, index) => {
         const letter = document.createElement('span');
         letter.classList.add('about__letter');
         const txt = document.createTextNode(el);
         letter.append(txt);


     }) */


    const bl = document.querySelector('#pre');



    for (let i = 0; i <= array.length; i++) {
        const style = array[i].match(/[a-zA-z]/) ? array[i] + i : 'l';
        console.log(style)
        const txt = document.createTextNode(array[i])
        const letter = document.createElement('span');
        console.log(letter)
        letter.classList.add('about__letter', style)
        letter.append(txt)

        bl.append(letter)

        setTimeout(() => document.querySelector(`.${style}`).classList.add('about__letter-visible'), i * 10)

    }
}


/* document.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
        makeBeautyText();
    }
txt = document.createTextNode("your cool text");
}) */

makeBeautyText()