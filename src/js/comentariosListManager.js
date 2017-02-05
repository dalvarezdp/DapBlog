var $ = require('jquery');
var comentarioService = require('./comentarioService');

module.exports = {

    setUiIdeal: function() {
        $('.comentarios-list').removeClass().addClass('comentarios-list ideal');
    },

    setUiBlank: function() {
        $('.comentarios-list').removeClass().addClass('comentarios-list blank');
    },

    setUiError: function() {
        $('.comentarios-list').removeClass().addClass('comentarios-list error');
    },

    setUiLoading: function() {
        $('.comentarios-list').removeClass().addClass('comentarios-list loading');
    },

    loadcomentarios: function() {
        var self = this;
        // mostrar el mensaje de cargando
        self.setUiLoading();

        // cargamos las canciones desde el backend
        comentarioService.list(function(comentarios){ // si nos devuelve canciones
            console.log(comentarios.length);
            if (comentarios.length == 0) {
                self.setUiBlank(); // si no hay canciones -> estado en blanco
            } else {
                // pintar las canciones en el listado
                self.rendercomentarios(comentarios);
                self.setUiIdeal(); // ponemos el estado ideal
            }
        }, function(error){ // si se produce algún error
            self.setUiError(); // ponemos el estado error
        });
    },

    rendercomentarios: function(comentarios) {
        var html = '';
        for (var i in comentarios) {
            var comentario = comentarios[i];
            var cover_url = comentario.cover_url;
            html += '<li class="list-group-item">';
            html += '<div class="media">';
            html += '<div class="media-left media-middle">';
            html += '<img class="img-circle media-object" src="./src/img/avatar.png"></div>';
            html += '<div class="media-body">';
            html += '<div class="nomComentario">';
            html += '<h4 class="media-heading">' + comentario.nombre +' '+ comentario.apellidos + '</h4></div>';
            html += '<div class="comentario">' + comentario.mensaje + '</div></div></li>';
        }
        $(".comentarios-list .ui-ideal").html(html);
    }

}
