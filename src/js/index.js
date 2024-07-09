import $ from "jquery"
import "slick-slider"
import "jquery-mask-plugin"

document.addEventListener('DOMContentLoaded', function() {
    // Добавляем класс 'active' к ul.tabs и класс 'current' к первому элементу li
    var tabs = document.querySelectorAll('.tab ul.tabs');
    tabs.forEach(function(tab) {
        tab.classList.add('active');
        tab.querySelector('li').classList.add('current');
    });

    // Обрабатываем щелчок по ссылке внутри li
    var tabLinks = document.querySelectorAll('.tab ul.tabs li a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            var tab = link.closest('.tab');
            var index = Array.from(link.closest('ul').children).indexOf(link.closest('li'));

            // Удаляем класс 'current' у всех li
            var lis = tab.querySelectorAll('ul.tabs > li');
            lis.forEach(function(li) {
                li.classList.remove('current');
            });

            // Добавляем класс 'current' к текущему li
            link.closest('li').classList.add('current');

            // Скрываем все div.tabs_item, кроме текущего
            var tabItems = tab.querySelectorAll('.tab_content .tabs_item');
            tabItems.forEach(function(item, idx) {
                if (idx !== index) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
            });
        });
    });
});


$(document).ready(function(){

    $(".active__burger").click(function(){
        $(".mobile__menu").slideDown(500);
        $(".overlay").show();
        $(".active__burger").hide(500);
        $(".close__burger").show(500);
    });


    $(".btn__popup").click(function(){
        $(".overlay__popup").show();
        $(".popup__feedback").slideDown();
    });


    $(".overlay__popup, .close").click(function(){
        $(".overlay__popup").hide();
        $(".popup__feedback").slideUp();
    });

    $('.phone__input').mask('+375 (00) 000-00-00');

    // $(".close__burger, .overlay").click(function(){
    //     $(".mobile__menu").slideUp(500);
    //     $(".overlay").hide();
    //     $(".active__burger").show(500);
    //     $(".close__burger").hide(500);
    // });


    $(".accordion-title").click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

        $(this).toggleClass("active-title");
        $("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

        $("i.fa-chevron-down",this).toggleClass("chevron-top");
        $("#"+accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
    });

    function checkScroll() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('header__active');
        } else {
            $('header').removeClass('header__active');
        }
    }

    // Проверяем положение прокрутки при загрузке страницы
    checkScroll();

    // Проверяем положение прокрутки при каждом скролле
    $(window).scroll(function() {
        checkScroll();
    });


    $('.slider').slick({
        arrows:true,
        dots: true,
        slidesToShow: 1,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1,
                    arrows:false
                }
            }
        ]
    });

    $('.slider__spec').slick({
        arrows:false,
        dots: true,
        slidesToShow: 3,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });

    $('.slider-product').slick({
        arrows:false,
        dots: true,
        slidesToShow: 4,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:4
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:4
                }
            }
        ]
    });


    $('.slider__related').slick({
        arrows:false,
        dots: true,
        slidesToShow: 6,
        autoplay:false,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:2
                }
            }
        ]
    });


    $('.slider__img').on('click', function(){
        var newSrc = $(this).attr('src');
        $('.main__img').attr('src', newSrc);
    });


    $('.title__catalog').click(function(){
        $('.list__categories').slideToggle();
        $('.title__catalog').toggleClass('active__title');

    })

    $('.filter__item').click(function(){
        $(this).next('.selects').slideToggle();
        $(this).toggleClass('filter__active');

    })

    $('.title__filter').click(function(){
        $('.list__filters').slideToggle();
        $('.title__filter').toggleClass('active__title');

    })


    $(".btn__popup-product").click(function(){
        $(".overlay__popup-product").show();
        $(".popup__product").slideDown();

        $('.product__descr').text($('.product__title__h1').text());
        $('.input__for__mail').val($('.product__title__h1').text());

        var newSrc = $('.main__img').attr('src');
        $('.product__image').attr('src', newSrc);

    });


    $(".close, .overlay__popup-product").click(function(){
        $(".overlay__popup-product").hide();
        $(".popup__product").slideUp();
    });


    $(".btn__popup-feedback").click(function(){
        $(".overlay__popup-feedback").show();
        $(".popup__feedback").slideDown();
    });


    $(".close__feedback, .overlay__popup-feedback").click(function(){
        $(".overlay__popup-feedback").hide();
        $(".popup__feedback").slideUp();
    });

    $('.filter__button').click(function(){
        $('.container__filters__categories').slideDown();
        $('.overlay__filters').show();

    })

    $('.cross__filter, .overlay__filters').click(function(){
        $('.container__filters__categories').slideUp();
        $('.overlay__filters').hide();
    })


    $('.burger').click(function(){
        $('.mobile__menu').slideDown();
        $('.burger').hide();
        $('.cross').show();
    })

    $('.cross').click(function(){
        $('.mobile__menu').slideUp();
        $('.burger').show();
        $('.cross').hide();
    })










});
