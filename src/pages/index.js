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




document.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
        secondBlock.classList.add('about_type_visible')
    }
    console.log(window.pageYOffset)
})