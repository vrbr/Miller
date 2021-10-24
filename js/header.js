const headerMenu = document.querySelector('.header-menu');
const headerContainer = document.querySelector('.header__container');
const buttonMenu = document.querySelector('.header__nav-btn');

const buttonSearch = document.querySelector('.header__interaction-search');
const headerSearch = document.querySelector('.header-search');
const buttonCancel = document.querySelector('.header-search__btn');

// открыть/закрыть меню
buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('btn-opened');

    if(buttonMenu.classList.contains('btn-opened')) {
        headerMenu.classList.add('active');
        headerContainer.classList.add('header-closed');
    } else {
        headerMenu.classList.remove('active');
        headerContainer.classList.remove('header-closed');
    }
});

// открыть поиск
const searchOpen = () => {
    headerSearch.classList.add('active');

    if (document.documentElement.clientWidth < 1349) {
        headerContainer.classList.add('header-closed');
        buttonMenu.style.display = "none";
    }
}
buttonSearch.addEventListener('click', searchOpen);

// закрыть поиск
const searchClose = () => {
    headerSearch.classList.remove('active');

    if (document.documentElement.clientWidth < 1349) {
        headerContainer.classList.remove('header-closed');
        buttonMenu.style.display = "block";
    }
}

buttonCancel.addEventListener('click', searchClose);

