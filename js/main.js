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

    $('#telefone').mask('(00) 00000-0000');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#voltar-topo').fadeIn();
        } else {
            $('#voltar-topo').fadeOut();
        }
    });

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira um telefone'
        },
        submitHandler: function(form){
            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: $(this).serialize(),
                success: function(response) {
                  console.log('Formulário enviado com sucesso:', response);
                  // Adicione aqui o que você deseja fazer após o envio (ex: mostrar uma mensagem de sucesso)
                  $('form')[0].reset();
                },
                error: function(xhr, status, error) {
                  console.error('Erro ao enviar o formulário:', error);
                }
              });
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})