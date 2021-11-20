const communicationsBtn = document.querySelector('.instruction__item-communications');
const storesBtn = document.querySelector('.instruction__item-stores');
const communicationsSection = document.querySelector('.contacts-communications');
const storesSection = document.querySelector('.contacts-stores');

communicationsBtn.addEventListener('click', () => {
    communicationsSection.style.display = 'block';
    storesSection.style.display = 'none';
});

storesBtn.addEventListener('click', () => {
    communicationsSection.style.display = 'none';
    storesSection.style.display = 'block';
});