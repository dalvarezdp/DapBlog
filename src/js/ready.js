var $ = jQuery = require('jquery');
var comentariosListManager = require("./comentariosListManager");
var comentarioService = require("./comentarioService");
var previous;

// Añado animación para subir arriba
$('.button-up').click(function(e){
    e.preventDefault();

    $('html,body').stop().animate({
      scrollTop: 0
    }, 1000);

});


$(window).scroll(function () {
  if ($('.panel-heading').length) {
    var posicion = $(window).scrollTop();
    var comentarios = Math.floor($('.panel-heading').offset().top) - $(window).height();

    if(posicion >= comentarios) {
      if(!previous) {
  			previous = 1;
        comentariosListManager.loadcomentarios();
  		} else if(previous == 1) {
  			return false;
  		}
    }
  }
});
