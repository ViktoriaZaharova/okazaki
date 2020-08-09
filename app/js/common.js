$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
        $('.wrapper, .category-dropdown').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
        $('.wrapper, .category-dropdown').removeClass('fixed');
    }
});

$('.main-home').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true
});

$('.product-image__slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    dots: true
});

$('.catalog-item-dropdown').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.category-dropdown').slideToggle();
});


$('.radio input:radio').change(function(){
    if($(this).is(":checked")) {
        $(this).parents('.form-group__selection').find('.radio').removeClass('radio-click');
        $(this).parents('.radio').addClass('radio-click');
    } else {
        $(this).parents('.radio').removeClass('radio-click');
    }
});

$(".polzunok-1").slider({
    min: -2000,
    max: 1000,
    values: [100, 700],
    range: true,
    animate: "fast",
    slide : function(event, ui) {
        $(".polzunok-input-left-1").val(ui.values[ 0 ]);
        $(".polzunok-input-right-1").val(ui.values[ 1 ]);
    }
});
$(".polzunok-input-left-1").val($(".polzunok-1").slider("values", 0));
$(".polzunok-input-right-1").val($(".polzunok-1").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-left-1").val().replace(/[^0-9]/g, ''),
        opt_left = $(".polzunok-1").slider("option", "min"),
        where_right = $(".polzunok-1").slider("values", 1),
        input_right = $(".polzunok-input-right-1").val().replace(/[^0-9]/g, ''),
        opt_right = $(".polzunok-1").slider("option", "max"),
        where_left = $(".polzunok-1").slider("values", 0);
    if (input_left > where_right) {
        input_left = where_right;
    }
    if (input_left < opt_left) {
        input_left = opt_left;
    }
    if (input_left == "") {
        input_left = 0;
    }
    if (input_right < where_left) {
        input_right = where_left;
    }
    if (input_right > opt_right) {
        input_right = opt_right;
    }
    if (input_right == "") {
        input_right = 0;
    }
    $(".polzunok-input-left-1").val(input_left);
    $(".polzunok-input-right-1").val(input_right);
    $(".polzunok-1").slider( "values", [ input_left, input_right ] );
});

$(".polzunok-2").slider({
    min: 0,
    max: 1000,
    value: 700,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {
        $(".polzunok-input-left-2").val(ui.value);
    }
});

$(".polzunok-input-left-2").val($(".polzunok-2").slider("value"));


$(".polzunok-3").slider({
    min: 0,
    max: 1000,
    value: 700,
    range: "min",
    animate: "fast",
    slide : function(event, ui) {
        $(".polzunok-input-left-3").val(ui.value);
    }
});

$(".polzunok-input-left-3").val($(".polzunok-3").slider("value"));

$('.links-call').click(function (e) {
    e.preventDefault();
    $('.contact-popup').fadeToggle();
});

$('.contact-popup .modal__close').click(function () {
    $('.contact-popup').fadeOut();
});

$('.btn-search').click(function () {
    $(this).toggleClass('click')
    $('.form-search').fadeToggle();
});

$('.dropdown-item').click(function () {
    $(this).siblings('.dropdown-wrapper').fadeToggle();
});

$('.links-toggle').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.text');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть описание раздела');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.html('Прочитать описание раздела');

        content.slideUp();
    }
});

$(document).ready(function () {
    var penImg = $('.product-image__max img');

    $('.product-image__min div.item').on('click', function () {
        $('.product-image__min div.item').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);

    });
});

$('.load-more').on('click', function (e) {
    e.preventDefault();
    $('.card-product:hidden').slice(0, 6).slideDown();
});

$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".category-dropdown"); // тут указываем ID элемента
    var btn = $('.catalog-item-dropdown');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.slideUp(200); // скрываем его
    }
});

$('input[name=phone]').mask('+ 7 (999) - 999 - 99 - 99');

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-ok');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();

        modal.animate({
            opacity: 0,
            top: '45%'
        }).css('display', 'none');
        overlay.fadeOut(400);

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end