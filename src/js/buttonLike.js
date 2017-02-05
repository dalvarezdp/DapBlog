var $ = jQuery = require('jquery');
var articulos = $('.article-list');
var buttonsLike = $('.meGusta');



function cargarLikes() {

  buttonsLike.each(function () {
    var likeId = $(this).data("id");
    if (localStorage.getItem(likeId) == "1") {
      var spanDato = $(this).children(".glyphicon-heart");
      spanDato.addClass("meGustaOn");
    }
  });

}


function getLike(dato) {
  var likeId = dato.data("id");
  var valor = localStorage.getItem(likeId);

  return valor;
}


function addLike(dato) {
  var likeId = dato.data("id");
  var spanDato = dato.children(".glyphicon-heart");

  localStorage.setItem(likeId, "1");
  spanDato.addClass("meGustaOn");

}


function deleteLike(dato) {
  var likeId = dato.data("id");
  var spanDato = dato.children(".glyphicon-heart");

  localStorage.setItem(likeId, "0");
  spanDato.removeClass("meGustaOn");

}



$(document).ready(function () {

  if	(typeof(Storage)	!==	"undefined")	{
    // Agregar un me gusta
    articulos.on("click",".meGusta", function () {
      if (getLike($(this)) == "1") {
        deleteLike($(this))
      } else {
        addLike($(this));
      }
    });

    // cargar los like
    cargarLikes();
  }	else	{
    console.log("No tienes Storage");
  }

});
