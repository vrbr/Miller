document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 1349){
        const newsSwiper = new Swiper(".news-swiper", {
            slidesPerView: "auto",
            spaceBetween: 20,
            navigation: {
                nextEl: ".news-swiper-button-next",
                prevEl: ".news-swiper-button-prev",
            },
            breakpoints: {
                768: {
                    spaceBetween: 40,
                },
            },
        });
    }
});