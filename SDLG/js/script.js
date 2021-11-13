jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
///SWIPERS
var swiper = new Swiper(".js-main-page-top-block__slider", {
    navigation: {
        nextEl: ".js-main-page-top-block__slider-next",
        prevEl: ".js-main-page-top-block__slider-prev",
    },
});


var swiper2 = new Swiper(".js-mp-sdlg-technique__slider1", {

    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper3 = new Swiper(".js-mp-sdlg-technique__slider2", {
    spaceBetween: 117,
    slidesPerView: 'auto',
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: '1',
        },
        // when window width is >= 480px
        769: {
            spaceBetween: 50,
            slidesPerView: 'auto',
        },
        992: {
            spaceBetween: 75,
        },
        // when window width is >= 640px
        1200: {
            spaceBetween: 117,
        }
    },
    navigation: {
        nextEl: ".js-mp-sdlg-technique__slider1-next",
        prevEl: ".js-mp-sdlg-technique__slider1-prev",
    },
    thumbs: {
        swiper: swiper2,
    },
});


var swiper5 = new Swiper(".js-mp-stock-and-services__slider2", {
    // spaceBetween: 10,
    slidesPerView: '4',
    direction: 'vertical',
    freeMode: true,
    watchSlidesProgress: true,

});

var swiper4 = new Swiper(".js-mp-stock-and-services__slider1", {
    // 320: {
    //     slidesPerView: '1',
    // },
    // // when window width is >= 480px
    // 769: {
    //
    // },
    pagination: {
        el: ".js-mp-stock-and-services-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".js-mp-stock-and-services__slider2-next",
        prevEl: ".js-mp-stock-and-services__slider2-prev",
    },
    thumbs: {
        swiper: swiper5,
    },
});


swiper4.on('slideChange', function () {

    let number = swiper4.realIndex + 1;

    let allSlides = document.querySelectorAll('.mp-stock-and-services__slider2-slide');
    let allSlidesFinal = allSlides.length;

    if (allSlidesFinal.length > 9) {
        $('.js-mp-stock-and-services__slide-all').html(allSlidesFinal);
    } else {
        $('.js-mp-stock-and-services__slide-all').html('0' + allSlidesFinal);
    }


    if (number > 9) {
        $('.js-mp-stock-and-services__slide-active').html(number);
    } else {
        $('.js-mp-stock-and-services__slide-active').html('0' + number);
    }
});

var swiper6 = new Swiper(".js-mp-about__slider", {
    breakpoints: {
        320: {
            slidesPerView: '1',
        },
        // when window width is >= 480px
        769: {
            slidesPerView: '1.2',
        },
    },
    slidesPerView:1.2,
    loop: true,
    //loopAdditionalSlides:4,
    pagination: {
        el: ".js-mp-about__slider-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".js-mp-about__slider-next",
        prevEl: ".js-mp-about__slider-prev",
    },
});
var swiper7 = new Swiper(".js-mp-advices__slider", {
    pagination: {
        el: ".js-mp-advices__slide-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".js-mp-advices__slider-next",
        prevEl: ".js-mp-advices__slider-prev",
    },

});

swiper7.on('slideChange', function () {
    let number = swiper7.realIndex + 1;
    // let number = numberItem + 1;
    let allSlides = document.querySelectorAll('.mp-advices__slider-slide');
    let allSlidesFinal = allSlides.length;
    // allSlidesFinal ++;
    if (allSlidesFinal.length > 9) {
        $('.js-mp-advices__slide-all').html(allSlidesFinal);
    } else {
        $('.js-mp-advices__slide-all').html('0' + allSlidesFinal);
    }
    //$('.mp-advices__slide-all').text(swiper7.slides.length);

    // console.log(numberItem);
    if (number > 9) {
        $('.js-mp-advices__slide-active').html(number);
    } else {
        $('.js-mp-advices__slide-active').html('0' + number);
    }
});

//product card page

var swiper8 = new Swiper(".p-c-p-product__slider1", {
    breakpoints: {
        320: {
            spaceBetween: 5,
        },
        // when window width is >= 480px
        769: {
            spaceBetween: 10,
        },
    },

    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper9 = new Swiper(".p-c-p-product__slider2", {
    //spaceBetween: 10,
    navigation: {
        nextEl: ".js-p-c-p-product__slider-next",
        prevEl: ".js-p-c-p-product__slider-prev",
    },
    thumbs: {
        swiper: swiper8,
    },
});

var swiper10 = new Swiper(".p-c-p-product-same__slider", {
    breakpoints: {
        320: {
            slidesPerView:1,
        },
        // when window width is >= 480px
        651: {
            slidesPerView:2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView:3,
            spaceBetween: 20,
        },
    },
    navigation: {
        nextEl: ".js-p-c-p-product-same__slider-next",
        prevEl: ".js-p-c-p-product-same__slider-prev",
    },
});

var swiper11 = new Swiper(".js-fin-page-partners__slider", {
    breakpoints: {
        320: {
            spaceBetween: 10,
        },
        // when window width is >= 480px
        651: {
            spaceBetween: 20,
        },
    },
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".js-fin-page-partners__slider-next",
        prevEl: ".js-fin-page-partners__slider-prev",
    },
});

var swiper12 = new Swiper(".js-news-page-important__slider", {
    breakpoints: {
        19: {
            slidesPerView:1,
        },

        769: {
            slidesPerView:2,
        },
    },
    navigation: {
        nextEl: ".js-news-page-important__slider-next",
        prevEl: ".js-news-page-important__slider-prev",
    },
});

var swiper13 = new Swiper(".js-maintenance-page-station__slider1", {
    spaceBetween: 20,
    slidesPerView:'auto',
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper14 = new Swiper(".js-maintenance-page-station__slider2", {
    breakpoints: {
        19: {
            slidesPerView:1,
        },

        769: {
            slidesPerView:1.2,
        },
    },
    slidesPerView:1.2,
    navigation: {
        nextEl: ".js-maintenance-page-station__slider-next",
        prevEl: ".js-maintenance-page-station__slider-prev",
    },
    pagination: {
        el: ".js-maintenance-page-station__pagination",
        type: "fraction",
    },
    thumbs: {
        swiper: swiper13,
    },
});

//news-tabulation
if(document.querySelector('.js-news-share-page__tab')){
    function openNews(evt, cityName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("js-news-share-page__tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("js-news-share-page__tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

}

//tabs-station

function openStation(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("js-maintenance-page-station-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("js-maintenance-page-station__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.onload = function() {
    let numberItem1 = $('.js-mp-stock-and-services__slider1').find('.swiper-slide-active').index();
    let number1 = numberItem1 + 1;
    if (number1 > 9) {
        $('.js-mp-stock-and-services__slide-active').html(number1);
    } else {
        $('.js-mp-stock-and-services__slide-active').html('0' + number1);
    }

    let allSlides1 = document.querySelectorAll('.mp-stock-and-services__slider2-slide');
    let allSlidesFinal1 = allSlides1.length;

    if (allSlidesFinal1.length > 9) {
        $('.js-mp-stock-and-services__slide-all').html(allSlidesFinal1);
    } else {
        $('.js-mp-stock-and-services__slide-all').html('0' + allSlidesFinal1);
    }

    let numberItem = $('.js-mp-advices__slider').find('.swiper-slide-active').index();
    let number = numberItem + 1;
    if (number > 9) {
        $('.js-mp-advices__slide-active').html(number);
    } else {
        $('.js-mp-advices__slide-active').html('0' + number);
    }

    let allSlides = document.querySelectorAll('.mp-advices__slider-slide');
    let allSlidesFinal = allSlides.length;
    // allSlidesFinal ++;

    if (allSlidesFinal.length > 9) {
        $('.js-mp-advices__slide-all').html(allSlidesFinal);
    } else {
        $('.js-mp-advices__slide-all').html('0' + allSlidesFinal);
    }
}


//tabs-main-page
function openTabMainPage(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//tabs-product-page
if(document.querySelector('.js-about-product-tablinks')){
    function openAbout(evt, cityName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("js-about-product-tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("js-about-product-tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}

//rig-tabs
if(document.querySelector('.js-rg-pg-rig__tablinks')) {

    function openRig(evt, cityName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("js-rg-pg-rig__tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("js-rg-pg-rig__tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
}
if(document.querySelector('.js-news-share-page')) {

    function openNewsSecond(evt, cityName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("js-news-share-page-tabcontent2");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("js-news-share-page-tablinks2");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "flex";
        evt.currentTarget.className += " active";
    }
}
//
const accordions = document.querySelectorAll('.brand-page-history__date-block');
for(item of accordions){
    item.addEventListener('click', function (){
        if(this.classList.contains('active')){
            this.classList.remove('active');
        }
        else{
            for(el of accordions){
                el.classList.remove('active');
            }
            this.classList.add('active');
        }
    })
}




//mask-input
if (document.querySelector('#number-phone')){
    $("#number-phone").inputmask("+38 (099) 999 99 99");
}
if (document.querySelector('#number-phone2')) {
    $("#number-phone2").inputmask("+38 (099) 999 99 99");

}

if (document.querySelector('#number-phone3')) {
    $("#number-phone3").inputmask("+38 (099) 999 99 99");

}
if (document.querySelector('#number-phone4')) {
    $("#number-phone4").inputmask("+38 (099) 999 99 99");
}
if (document.querySelector('#number-phone5')) {
    $("#number-phone5").inputmask("+38 (099) 999 99 99");
}
if (document.querySelector('#number-phone6')) {
    $("#number-phone6").inputmask("+38 (099) 999 99 99");
}
if (document.querySelector('#number-phone7')) {
    $("#number-phone7").inputmask("+38 (099) 999 99 99");
}
if (document.querySelector('#now-price-popup__first-phone')) {
    $("#now-price-popup__first-phone").inputmask("+38 (099) 999 99 99");
}

if ($(window).width() < 992) {
    document.querySelector('.js-header__logo-down-menu').addEventListener('click', function (){
        this.classList.toggle('hamburger-active');
        document.querySelector('.js-hamburger').classList.toggle('hamburger-active');
        document.querySelector('.header').classList.toggle('hamburger-active');
        document.querySelector('.js-header__logo-down').classList.toggle('hamburger-active');
        document.body.classList.toggle('noscroll');
    })

}

//popups
if(document.querySelector('.js-header__top-right-connection')){
    document.querySelector('.js-header__top-right-connection').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.js-connection-popup').classList.add('active');
        document.querySelector('.bg-popups').classList.add('active');
        document.body.classList.add('noscroll');
    })
}

if(document.querySelector('.js-p-c-p-product__info-price2')){
    document.querySelector('.js-p-c-p-product__info-price2').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.js-connection-popup').classList.add('active');
        document.querySelector('.bg-popups').classList.add('active');
        document.body.classList.add('noscroll');
    })
}

if(document.querySelector('.js-connection-popup__plus')){
    document.querySelector('.js-connection-popup__plus').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.js-connection-popup').classList.remove('active');
        document.querySelector('.bg-popups').classList.remove('active');
        document.body.classList.remove('noscroll');
    })
}

if(document.querySelector('.js-p-c-p-product__info-price')){
    document.querySelector('.js-p-c-p-product__info-price').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.js-know-price-popup').classList.add('active');
        document.querySelector('.bg-popups').classList.add('active');
        document.body.classList.add('noscroll');
    })
}
if(document.querySelector('.js-know-price-popup__plus')){
    document.querySelector('.js-know-price-popup__plus').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.js-know-price-popup').classList.remove('active');
        document.querySelector('.bg-popups').classList.remove('active');
        document.body.classList.remove('noscroll');
    })
}

$(document).on('click', '.mp-about__slide-map g', function (e){
    $('.js-popup-map').show();
    $('.bg-popups').addClass('active');
    $('body').addClass('noscroll');
});

$(document).on('click', '.js-popup-map-btn-exit', function (e){
    $('.js-popup-map').hide();
    $('.bg-popups').removeClass('active');
    $('body').removeClass('noscroll');
});

$(document).on('click', '.js-maintenance-map .js-on', function (e){
    e.preventDefault();
    let region = $(this).attr('data-class');
    console.log(region)
    $('.js-maintenance-tab-map').find('.maintenance-tab-map__item').removeClass('js-active');
    $('.js-maintenance-tab-map').find("." + region).addClass('js-active');
});