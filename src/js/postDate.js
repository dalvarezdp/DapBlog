var $ = jQuery = require('jquery');
var moment = require('moment');
require('moment/locale/es');

var fechas = $('.postDate');
var fechaHoy = moment();
//var fechaTexto = moment(fecha.text(),"DD/MM/YYYY HH:mm:ss");


$(document).ready(function() {
  // Instrucciones a ejecutar al terminar la carga

  fechas.each(function () {
    var fechaTexto = moment($(this).text(),"DD/MM/YYYY HH:mm:ss");

    if (fechaHoy.diff(fechaTexto,"seconds") > 1 && fechaHoy.diff(fechaTexto,"seconds") < 60 ) {
      $(this).text("Publicado hace " +fechaHoy.diff(fechaTexto,"seconds") + ' segundos');
    } else if (fechaHoy.diff(fechaTexto,"minutes") >= 1 && fechaHoy.diff(fechaTexto,"minutes") < 60) {
      $(this).text("Publicado hace " +fechaHoy.diff(fechaTexto,"minutes") + ' minutos');
    } else if (fechaHoy.diff(fechaTexto,"hours") >= 1 && fechaHoy.diff(fechaTexto,"hours") < 24) {
      $(this).text("Publicado hace " +fechaHoy.diff(fechaTexto,"hours") + ' horas');
    } else if (fechaHoy.diff(fechaTexto,"days") >= 1 && fechaHoy.diff(fechaTexto,"days") <= 7) {
      $(this).text("Publicado el " + fechaTexto.format("dddd"));
    } else {
      $(this).text("Publicado el " + fechaTexto.format("DD/MM/YYYY HH:mm:ss"));
    }

  })

});
