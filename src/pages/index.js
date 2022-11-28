import './index.css';
import { BurgerMenu } from '../components/burgermenu';
import { About } from '../components/about';
import { Gallery } from '../components/gallery';
import image1 from '../images/photo9.svg'
import image2 from '../images/photo10.svg'
import image3 from '../images/photo11.svg'
import image4 from '../images/photo12.svg'
import image5 from '../images/photo13.svg'
import image6 from '../images/photo14.svg'
import image7 from '../images/photo1.svg'
import image8 from '../images/photo2.svg'
import image9 from '../images/photo3.svg'
import image10 from '../images/photo4.svg'
import image11 from '../images/photo6.svg'
import image12 from '../images/photo7.svg'
import image13 from '../images/photo8.svg'


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


///////////
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
    if (window.pageYOffset > 400 && isScrolling) {
        aboutSection.makeBeautyText('v', array, secondBlockText, 'o')
        isScrolling = false;
    }
    if (window.pageYOffset > 90) {
        aboutSection.makeTextScale(firstBlockText);
    }
    if (window.pageYOffset > 800) {
        aboutSection.makeTextScale(thirdBlockText);
    }
    if (window.pageYOffset > 1900 && isScrollingEnd) {
        aboutSection.makeBeautyText('l', lastBlockText, endBlockText, 'z')
        isScrollingEnd = false;
    }
})


////////////

const imagesArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13]
const nodeArray = document.querySelectorAll('.looks__image')
const gallery = new Gallery(nodeArray, imagesArray);

setInterval(() => gallery.pushImages(), 4000);
//////