const headerMenu = document.querySelector('.header-menu');
const headerContainer = document.querySelector('.header__container');
const buttonMenu = document.querySelector('.header__nav-btn');
const html = document.querySelector('html');

const buttonSearch = document.querySelector('.header__interaction-search');
const headerSearch = document.querySelector('.header-search');
const buttonCancel = document.querySelector('.header-search__btn');

// открыть/закрыть меню
buttonMenu.addEventListener('click', () => {
    buttonMenu.classList.toggle('btn-opened');

    if(buttonMenu.classList.contains('btn-opened')) {
        headerMenu.classList.add('active');
        headerContainer.classList.add('header-closed');
        html.style.overflowY = 'hidden';
    } else {
        headerMenu.classList.remove('active');
        headerContainer.classList.remove('header-closed');
        html.style.overflowY = 'visible';
    }
});

//плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// открыть поиск
const searchOpen = () => {
    headerSearch.classList.add('active');

    if (document.documentElement.clientWidth < 1349) {
        headerContainer.classList.add('header-closed');
        buttonMenu.style.display = "none";
        html.style.overflowY = 'hidden';
    }
}
buttonSearch.addEventListener('click', searchOpen);

// закрыть поиск
const searchClose = () => {
    headerSearch.classList.remove('active');

    if (document.documentElement.clientWidth < 1349) {
        headerContainer.classList.remove('header-closed');
        buttonMenu.style.display = "block";
        html.style.overflowY = 'visible';
    }
}

buttonCancel.addEventListener('click', searchClose);

