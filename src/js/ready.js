var $ = jQuery = require('jquery');

// Añado animación para subir arriba
$('.button-up').click(function(e){
    e.preventDefault();

    $('html,body').stop().animate({
      scrollTop: 0
    }, 1000);

});
