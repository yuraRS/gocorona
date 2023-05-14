/*----slider-----*/
const swiper = new Swiper('.slider-image', {
    /*  ------стрілки---------
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    */



    /*--------булети------*/

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets', 
        clickable : false,

        /*-----динамічні булети---*/
        dynamicBullets: false,
    },


    /*-----можливість перетягувати на ПК---*/
    simulateTouch: true,

    /*-----курсор перетягування------*/
    grabCursor: true,




    /* -----управління колесом миші----
        mousewheel: {
            /--в яку сторону--/
            invert: true,
        },
    */


    
    /*--кількість слайдів для показу---*/
    slidesPerView: 1,
    
    /*--кількість пролистуємих слайдів слайдів---*/
    slidesPerGroup: 1,



    /*-----відступ між слайдами-----*/
    spaceBetween: 30,




    /*-----безкінечний слайер-----*/
    loop: true,

    /*------вільний режим--------*/
    freeMode: false,




    /*--------брекпоінти---------*/
    breakpoints: {
        450: {
            slidesPerView: 2,
        },

        767: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        },

        1100: {
            slidesPerView: 5,
        },
    },  
})



























