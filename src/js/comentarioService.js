var $ = require('jquery');

var API_URL = "/api/comentarios/";


module.exports = {

  // recuperar todos los comentarios
  list: function (successCallback, errorCallback) {
    $.ajax({
      url: "/api/comentarios/",
      type: "get", // recuperar datos en una API REST
      success: function (data) {
        successCallback(data);
      },
      error: function (error) {
        errorCallback(error);
        console.error("comentariosServiceError", error);
      }
    });
  },

  // guardar un comentario
  save: function (comentario, successCallback, errorCallback) {
    $.ajax({
      url: "/api/comentarios/",
      type: "post",
      data: comentario,
      success: function (data) {
        successCallback(data);
      },
      error: function (error) {
        errorCallback(error);
        console.error("comentariosServiceError", error);
      }
    });
  }


}
