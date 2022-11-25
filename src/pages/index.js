import './index.css';
import { BurgerMenu } from '../components/burgermenu';
import { About } from '../components/about';

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

const text = '“To me, fashion expresses a point of view where formality and informality, construction and comfort co-exist. My ethos is about the luxury of infusing clothes with your own personality, not being worn by them”'
const lastText = '“In each of these portraits, a strong character wears a look that reflects who they are: they are the ones who bring the clothes to life.”'
const array = [...text];
const lastBlockText = [...lastText];
const firstBlockText = document.querySelector('#sec');
const secondBlockText = document.querySelector('.about__article');
const thirdBlockText = document.querySelector('#three');
const endBlockText = document.querySelector('#end');


const aboutSection = new About(
    array,
    lastBlockText,
    firstBlockText,
    secondBlockText,
    'pre',
    'about__letter',
    'about__letter-visible',
    'about__article_type_visible',
    thirdBlockText,
    endBlockText,
    'about_type_visible',
    'about__subtitle-animated')
let isScrollingEnd = true;
let isScrolling = true;
document.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > 400 && isScrolling) {
        aboutSection.makeBeautyText(array, secondBlockText)
        isScrolling = false;
    }
    if (window.pageYOffset > 90) {
        aboutSection.makeTextScale(firstBlockText);
    }
    if (window.pageYOffset > 800) {
        aboutSection.makeTextScale(thirdBlockText);
    }
    if (window.pageYOffset > 1700 && isScrollingEnd) {
        aboutSection.makeBeautyText(lastBlockText, endBlockText)
        isScrollingEnd = false;
    }
})






/* const makeBeautyText = () => {


    const bl = document.querySelector('#pre');



    for (let i = 0; i < array.length; i++) {

        const style = array[i].match(/[a-zA-z]/) ? array[i] + i : `${'l'+ i}`;

        const txt = document.createTextNode(array[i])
        const letter = document.createElement('span');

        letter.classList.add('about__letter', style)
        letter.append(txt)

        bl.append(letter)

        setTimeout(() => document.querySelector(`.${style}`).classList.add('about__letter-visible'), i * 10)

    }
    document.querySelector('.about__article').classList.add('about__article_type_visible')
}



makeBeautyText() */