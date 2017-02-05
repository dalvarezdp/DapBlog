var $ = require('jquery');
var comentarioService = require('./comentarioService');
var comentariosListManager = require('./comentariosListManager');
var inputMensaje = $("#mensaje");

var textContador = $('<p>', {
  id: 'contador',
  name: 'contador',
});

$(inputMensaje).keyup(function(){
     palabras = $(this).val().split(/\b[\s,\.\-:;]*/).length;

     textContador.text('Has escrito en total '+ palabras +' palabras')
     $(this).parent().append(textContador);
});


$('.new-comentario-form').on('submit',function () {
    var contador = 0;
    var self = this;

    // validacion rapida de inputs
    var inputs = $(this).find("input").each(function (i) {
      // Para cada input (find("input")) del formulario (this)
      var input = this;
      if (input.checkValidity() == false) {
        alert(input.validationMessage);
        input.focus();
        return false;
      }
    });

    if($(inputMensaje)[0].checkValidity() == false) {
  		alert("El mensaje no puede ir vacío.");
      event.preventDefault();
  		inputMensaje.focus();
  		return false;
      console.log(palabras);
    }else if (palabras > 5) {
      alert("El mensaje no puede tener mas de 120 palabras.");
      event.preventDefault();
  		inputMensaje.focus();
  		return false;
    }

    // con todos los campos OK, guardamos en el backend la canción.

    // creamos el objeto cancion que quiero guardar con los datos del formulario
    var comentario = {
      nombre: $("#nombre").val(),
      apellidos: $("#apellidos").val(),
      email: $("#email").val(),
      mensaje: $("#mensaje").val()
    }

    console.log(comentario);

    // antes de enviar el formulario, bloqueamos el boton de enviar
    $(this).find("button").text("Guardando comentario...").attr("disabled", true);

    // lo enviamos al backend
    comentarioService.save(comentario,
      function (data) {
        // si se guarda bien
        alert("comentario guardado correctamente");
        $("p#contador").remove();
        self.reset();
        $(self).find("button").text("Añadir").attr("disabled", false); // TODO: refactorizar esto
        comentariosListManager.loadcomentarios();
      },
      function (error) {
        alert("Se ha producido un error");
        console.error("Error al guardar el comentario", error);
        $(self).find("button").text("Añadir").attr("disabled", false);
      });

    return false; // no queremos enviar el formulario nunca

})
