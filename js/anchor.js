const catalogLink = document.querySelector('.catalog-link');
const buttonMainMenu = document.querySelector('.header__nav-btn');
const headerMainMenu = document.querySelector('.header-menu');
const headerMainContainer = document.querySelector('.header__container');
const htmlMain = document.querySelector('html');

catalogLink.addEventListener('click', () => {
    buttonMainMenu.classList.remove('btn-opened');
    headerMainMenu.classList.remove('active');
    headerMainContainer.classList.remove('header-closed');
    htmlMain.style.overflowY = 'visible';
});