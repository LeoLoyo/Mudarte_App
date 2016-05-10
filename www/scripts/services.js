(function(){
  var app = angular.module('app.services', ['ionic','starter','ngCordova','services.customers','services.address','services.quotations', 'services.environments']);
  app.factory('DBA', function($cordovaSQLite, $q, $ionicPlatform) {
  var self = this;

  // Handle query's and potential errors
  self.query = function (query, parameters) {
    parameters = parameters || [];
    var q = $q.defer();

    $ionicPlatform.ready(function () {
      $cordovaSQLite.execute(db, query, parameters)
        .then(function (result) {
          q.resolve(result);
        }, function (error) {
          console.warn('I found an error');
          console.warn(error);
          q.reject(error);
        });
    });
    return q.promise;
  }

  // Proces a result set
  self.getAll = function(result) {
    var output = [];

    for (var i = 0; i < result.rows.length; i++) {
      output.push(result.rows.item(i));
    }
    return output;
  }

  // Proces a single result
  self.getById = function(result) {
    var output = null;
    output = angular.copy(result.rows.item(0));
    return output;
  }

  return self;
});
  app.factory('collectiondb', ['$cordovaSQLite', function($cordovaSQLite){
    'use strict';
    var menssages = "Operacion Exitosa";
    return {
            findOne:function(objects, term,att) {
              for(var i = 0, len = objects.length; i < len; i++) {
                if (objects[i][att] == term){
                  return i;
                }
              }
            },all:function(query,param){
                  var collection = [];
                  if(param === undefined ){
                    $cordovaSQLite.execute(db, query, []).then(function(res){
                      var r = res.rows;
                      if(r.length > 0){
                        for(var i = 0; i<r.length;i++){
                          collection.push(r.item(i));
                        }
                      }
                    },function(error){
                      // alert('hubo un error all '+query+ error.menssages)
                        return error.menssages;
                    });
                  }else{
                    $cordovaSQLite.execute(db, query, [param]).then(function(result){
                      var r = result.rows;
                      if(r.length > 0){
                        for(var i = 0; i<r.length;i++){
                          collection.push(r.item(i));
                        }
                      }
                      // else{
                      //   alert("no hay registros")
                      // }
                    },function(error){
                      // alert('hubo un error all sp '+ error.menssages)
                        return error.menssages;
                    });
                  }
                  return collection;
            },find:function(table,att,id){
              var query = "SELECT * FROM "+table +" WHERE "+att+" = ?";
              $cordovaSQLite.execute(db,query,[id]).then(
                function(result){
                  if(result.rows.length > 0){
                    return result.rows.item(0);
                  }
                  alert('no hay registro');
                },function(error){
                      alert('hubo un error find '+ error.menssages)
                      return error;
                  });
            },create:function(query,params){
                   $cordovaSQLite.execute(db,query,params).then(function(result){
                      return result;
                    },function(error){
                      // alert('hubo un error cre '+ error.menssages)
                      return error;
                        // return error.menssages;
                    });
            },update:function(query, data, id){
                    var sql = query + id;
                    $cordovaSQLite.execute(db,sql,data).then(function success(result){
                      return result;
                    },function(error){
                      // alert('Update Error ');
                      return error;
                        // return error.menssages;
                    });
            },delete:function(query,id){
              $cordovaSQLite.execute(db,query,[id]).then(function(result){
                return result;
              },function(error){
                // alert('hubo un error  del '+ error.menssages)
                return error.menssages;
              });
            },
            count:function(table){
              $cordovaSQLite.execute(db, 'select count(*) from '+table,[]).then(function(result){
                return result.rows.item;
              },function(error){
                return error;
              });
            }
    }
}]);

app.factory('Service_sexo', ['$cordovaSQLite','collectiondb',function($cordovaSQLite,collectiondb){
  var sexs = [];
  if(db==null){
    sexs = [{id:1,descripcion:"Hombre"},{id:2,descripcion:"Mujer"}];
  }else{
    sexs = collectiondb.all('SELECT * FROM cliente_sexo');
  }
    return sexs;
}]);

app.factory('Service_typeofrelationship', ['$cordovaSQLite','collectiondb',function($cordovaSQLite,collectiondb){
  var array = [];
  if(db==null){
    array = [{id:1,descripcion:"Particular"},{id:2,descripcion:"Familiar"},{id:3,descripcion:"Empleado"},{id:4,descripcion:"Depencia Laboral"}];
  }else{
    array = collectiondb.all('SELECT * FROM cliente_tipoderelacion');
  }
    return array;
}]);
app.factory('Services_messanges', function($cordovaToast){
  var message = '';
  return{
    message:function(menssage){
      message ; menssage;
      if(db!=null){
      $cordovaToast.showLongBottom(menssage).then(function(success) {
        return success;
       }, function (error) {
        return success;
        });
      }else{
        console.log(menssage);
      }
     }
   }
});
})()
