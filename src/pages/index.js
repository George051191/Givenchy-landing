import './index.css';
import { BurgerMenu } from '../components/burgermenu';

///////////
const burgerButton = document.querySelector('.header__burger-menu');
const closeBurgerMenuButton = document.querySelector('.header__nav-close-button');
const headerNav = document.querySelector('.header__nav')

const menu = new BurgerMenu(headerNav, 'header__nav-open');


burgerButton.addEventListener('click', () => {
    menu.openMenu();
})

closeBurgerMenuButton.addEventListener('click', () => {
        menu.closeMenu()
    })
    ////////////////




document.addEventListener('scroll', () => {


})