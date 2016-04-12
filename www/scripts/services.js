(function(){
  var app = angular.module('app.services', ['ionic','starter','ngCordova','services.customers']);
  app.factory('collectiondb', ['$cordovaSQLite', function($cordovaSQLite){
    'use strict';
    var menssages = "Operacion Exitosa";
    return {
            all:function(query,param){
                  var collection = [];
                  if(param === undefined ){
                    $cordovaSQLite.execute(db, query, []).then(function(res){
                      var r = res.rows;
                      if(r.length > 0){
                        for(var i = 0; i<r.length;i++){
                          collection.push(r.item(i));
                        }
                      }
                      else{
                        alert("no hay registros")
                      }
                    },function(error){
                      alert('hubo un error all '+query+ error.menssages)
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
                      else{
                        alert("no hay registros")
                      }
                    },function(error){
                      alert('hubo un error all sp '+ error.menssages)
                        return error.menssages;
                    });
                  }
                  return collection;
            },find:function(id,query){
                  $cordovaSQLite.execute(db,query,id).then(function(result){
                    if(result.rows.length > 0){
                      return result.rows.item;
                    }
                  },function(error){
                      alert('hubo un error find '+ error.menssages)
                      return error;
                  });
            },create:function(query,params){
                   $cordovaSQLite.execute(db,query,params).then(function(result){
                      // return result;
                      return true;
                    },function(error){
                      alert('hubo un error cre '+ error.menssages)
                        return false;
                        // return error.menssages;
                    });
            },update:function(query, data, id){
                    var sql = query + id;
                    $cordovaSQLite.execute(db,sql,data).then(function success(result){
                      return result;
                    });
            },delete:function(query,id){
              $cordovaSQLite.execute(db,query,[id]).then(function(result){
                return result;
              },function(error){
                alert('hubo un error  del '+ error.menssages)
                return error.menssages;
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
})()

