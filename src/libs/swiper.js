import Swiper from 'swiper';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

document.addEventListener('astro:page-load', function () {
    const swiper = new Swiper(".drinksSwiper", {
        modules: [FreeMode, Scrollbar],
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
            dragSize: 400
        },
    });
});