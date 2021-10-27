const instaSwiper = new Swiper(".insta__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".insta-swiper-button-next",
        prevEl: ".insta-swiper-button-prev",
    },
    breakpoints: {
        1349: {
            // grid: {
            //     rows: 2,
            // },
            spaceBetween: 0,
        },
    },
});