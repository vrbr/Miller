const swiper = new Swiper(".mySwiper.sale-swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-sale-button-next",
        prevEl: ".swiper-sale-button-prev",
    },
    breakpoints: {
        1349: {
            spaceBetween: 15,
        },
        1904: {
            spaceBetween: 20,
        },
    },
});