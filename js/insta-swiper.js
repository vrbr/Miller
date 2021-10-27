// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     grid: {
//         rows: 2,
//     },
//     spaceBetween: 30,
//         pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
var instaSwiper = new Swiper(".insta__swiper", {
    // slidesPerView: 2,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: ".insta-swiper-button-next",
        prevEl: ".insta-swiper-button-prev",
    },
});