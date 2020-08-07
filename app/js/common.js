$('.main-home').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true
});

$('.catalog-item-dropdown').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn();
    $('.category-dropdown').slideToggle();
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