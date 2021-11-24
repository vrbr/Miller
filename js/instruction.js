const instructionList = document.querySelector('.instruction__list');

instructionList.addEventListener('click', function(e) {
    const links = document.querySelectorAll('.instruction__link');
    const target = e.target;
    Array.from(links).forEach(link => {
        link.classList.remove('current');
    });
    target.classList.add('current');
});