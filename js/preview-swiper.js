document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 1349){
        const previewSwiper = new Swiper('.preview-swiper', {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            initialSlide: 1,
            coverflowEffect: {
                scale: 0.8,
                stretch: 0,
                depth: 100,
                modifier: 0.7,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination.preview-pagination",
                clickable: true,
            },
        });
    }
});