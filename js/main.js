$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('.menu_media').slideToggle();
    })

    $('#corousel-imagens').slick({
        autoplay:true,
        arrows:false,
    });

    $('.scroll-link').click(function(e){
        e.preventDefault();
        const destino = $(this).data('target');
        const targetOffset = $('#' + destino).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        },1500)
    })

    $('.container').infiniteScroll({
        // options
        path: '.pagination__next',
        append: '.post',
        history: false,
      });
})