const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const isHeaderFixed = header.classList.contains('fixed');

    if (scrollY > 0 && !isHeaderFixed) {
        header.classList.add('fixed');
    } else if (scrollY === 0 && isHeaderFixed) {
        header.classList.remove('fixed');
    }
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.querySelector(".mySwiper").addEventListener('mouseenter', function() {
    swiper.autoplay.stop();
});

document.querySelector(".mySwiper").addEventListener('mouseleave', function() {
    swiper.autoplay.start();
});

var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

document.querySelector(".mySwiper1").addEventListener('mouseenter', function() {
    swiper1.autoplay.stop();
});
document.querySelector(".mySwiper1").addEventListener('mouseleave', function() {
    swiper1.autoplay.start();
});

var swiper1 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

document.querySelector(".mySwiper2").addEventListener('mouseenter', function() {
    swiper1.autoplay.stop();
});
document.querySelector(".mySwiper2").addEventListener('mouseleave', function() {
    swiper1.autoplay.start();
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

document.querySelector(".mySwiper3").addEventListener('mouseenter', function() {
    swiper.autoplay.stop();
});

document.querySelector(".mySwiper3").addEventListener('mouseleave', function() {
    swiper.autoplay.start();
});









