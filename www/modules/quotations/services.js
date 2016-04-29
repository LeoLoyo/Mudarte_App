(function() {
  var app = angular.module('services.quotations',[]);
  app.factory('Services_quotations', function($http, Services_messanges, collectiondb) {
    var quotations=[];
    // get quotation_address
    var quotations_address = [];
    // get quotations_environments
    var quotations_environments = [];
    //get all quotations
    var get = function(array,query) {
      if(db!=null){
        array = collectiondb.all(query);
      }
      return array;
    };
    var sync_address_quotations = function(cotizacion_id){
      var url='modules/quotations/json/';
      var co = cotizacion_id;
      $http.get(url+'cotizacion_direccion.json').then(
        function success(data){
          var objects = data.data;
          quotations_address = [];
          for (var i = 0; i < objects.length; i++) {
            if(objects[i].cotizacion.id_web == co){
              quotations_address.push(objects[i]);
            }
          }
        },
        function error(e){
          Services_messanges.message('No hubo respuesta del servidor');
        }
      );
    };

    var sync_environmets = function(cotizacion_id){
      var url='modules/quotations/json/';
      var co = cotizacion_id;
      $http.get(url+'cotizacion_ambiente.json').then(
        function success(data){
          var objects = data.data;
          quotations_environments = [];
          for (var i = 0; i < objects.length; i++) {
            if(objects[i].direccion.cotizacion.id_web == co){
              quotations_environments.push(objects[i]);
            }
          }
        },
        function error(e){
          Services_messanges.message('No hubo respuesta del servidor');
        }
      );
    };
    var environment_Address = function() {
      var amb_direc = [];
      var id_addres ='';
      var id_env_addres ='';
      angular.forEach(quotations_address, function(address,id) {
        id_address = address.cliente_direccion.direccion.id_web;
        // address.environments = [];
        angular.forEach(quotations_environments,
          function(env, key) {
            id_env_addres = env.direccion.cliente_direccion.direccion.id_web;
            if( id_address == id_env_addres ) {
              // amb_direc.push(address.environments.push(env));
              amb_direc.push(env);
            }
        },amb_direc);
      });
      return amb_direc;

    }
    return {
      quotations_sync:function(cotizador) {
        var co = cotizador;
        var url='modules/quotations/json/';
        $http.get(url+'cotizacion.json').then(
          function success(data){
            angular.forEach(data.data,
              function(value, key) {
                if(value.cotizador.id==co.id){
                  quotations.push(value);
                }
              }
            );
          },
          function error(e){
            Services_messanges.message('No hubo respuesta del servidor');
          }
        );
      },
      all:function() {
        var query = 'SELECT * FROM vcotizacion';
        return get(quotations, query);
      },
      findOne:function(id) {
        for (var i = 0; i < quotations.length; i++) {
          if(quotations[i].id_web == id) return quotations[i];
        }
        return false;
      },
      quotation_address_get:function(cotizacion_id) {
        var c = cotizacion_id;
        var query = 'SELECT * FROM vcotizacion_direccion';
        sync_address_quotations(c);
        // return get(quotations_address, query);
        return quotations_address;
      },
      quotation_environments_get:function(cotizacion_id) {
        var c = cotizacion_id;
        var query = 'SELECT * FROM vcotizacion_ambiente';
        sync_environmets(c);
        // return get(quotations_environments, query);
        // return quotations_environments;
        return environment_Address();
      }
    };
  });

})()
