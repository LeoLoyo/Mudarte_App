(function() {
  var app = angular.module('services.quotations',[]);
  app.factory('Services_quotations', function($http, Services_messanges) {
    var quotations=[];

    return {
      quotations_sync:function() {
        var url='modules/quotations/json/cotizacion.json';
        $http.get(url).then(function success(data){
          // console.log(data.data);
          // quotations =[];
            angular.forEach(data.data, function(value, key) {
              // console.log(value);
              quotations.push(value);
            });
            // return quotations;

          }, function error(e){
            Services_messanges.message('No hubo respuesta del servidor');
          });

      }
      ,
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
          if(quotations[i].id_web == id && quotations[i].cotizador_id == cotizador) return quotations[i];
        }
        return false;
      }
    };
  });

})()
