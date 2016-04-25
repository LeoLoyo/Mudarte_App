(function() {
  var app = angular.module('services.quotations',[]);
  app.factory('quotations', function() {
    var quotations = [{
      "cliente" : 'Leonardo Antonio Loyo ',
      "direccion" : 'Cabudare Tarabana',
      "codigo" : 1,
      "cotizador":2
    },{
      "cliente" : 'Pedro Loyo ',
      "direccion" : 'Cabudare Tarabana',
      "codigo" : 2,
      "cotizador":1
    },{
      "cliente" : 'Anais Loyo ',
      "direccion" : 'Cabudare Tarabana 2',
      "codigo" : 3,
      "cotizador":1
    }];
    return {
      all:function() {
        return quotations;
      },
      findArray:function(cotizador) {
        var array = [];
        for (var i = 0; i < quotations.length; i++) {
          if(quotations[i].cotizador == cotizador){
            array.push(quotations[i]);
          }
        }
        return array;
      },
      findOne:function(id,cotizador) {
        for (var i = 0; i < quotations.length; i++) {
          if(quotations[i].codigo == id && quotations[i].cotizador == cotizador) return quotations[i];
        }
        return false;
      }
    };
  });

})()
