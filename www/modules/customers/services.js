(function(){
  'use strict';
    var app = angular.module('services.customers',[]);

    app.factory('Service_Customers',function($cordovaSQLite,collectiondb,$ionicLoading){
     'use strict';
     var customer = {};
     var customers = [];

     function buscar(Id){
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].id === parseInt(Id)) {
              return customers[i];
            }
        }
        return null;
    }
    function buscarindex(Id){
      for (var i = 0; i < customers.length; i++) {
          if (customers[i].id === parseInt(Id)) {
            return i;
          }
      }
      return null;
    }
     return {
              load:function(data){
                var result = false;
                    $ionicLoading.show({
                                        animation: 'fade-in',
                                        showBackdrop: true,
                                      });
                  if(db!=null){
                    var params = [];
                    var i = 0;
                    for(i; i<data.length; i++)
                    {
                      params = [data[i]['nombre'],data[i]['observaciones'],data[i]['cuit'],data[i]['tipo_de_cliente_id']];
                      collectiondb.create('INSERT INTO cliente_cliente (nombre,observaciones,cuit,tipo_de_cliente_id) VALUES(?,?,?,?)',params);
                    }//for
                    // $ionicLoading.hide();
                    result = true;
                  }else{
                    customers = [];
                    for(var i = 0; i<data.length; i++)
                    {
                      var obj = data[i];
                      customers.push(obj);
                    }
                    result = true;
                  }
                  $ionicLoading.hide();
                 return result;
              },new:function(data){
                if(!db){
                  console.log(data);
                  customer.nombre = data.nombre;
                  customer.cuit = data.cuit;
                  customer.observaciones = data.observaciones;
                  customer.tipo_de_cliente_id = data.tipo_de_cliente_id;
                  customers.push(customer);
                  customer = {};
                }else{
                  params = [data.nombre,data.cuit,data.observaciones,data.tipo_de_cliente_id];
                  return collectiondb.create('INSERT INTO cliente_cliente (nombre,cuit,observaciones,tipo_de_cliente_id) VALUES(?,?,?,?)',params);
                }

                return customer;
              },get:function(){
                if(db != null){
                  var query = 'SELECT observaciones, nombre, cuit, tipo_de_cliente_id FROM cliente_cliente'
                  customers = [];
                  customers = collectiondb.all(query);
                 }
                 return customers;
              },findOne: function(Id){
                for (var i = 0; i < customers.length; i++) {
                    if (customers[i].id === parseInt(Id)) {
                     return customers[i];
                    }
                }
                return null;
              },update:function(model){
                // if(!db){
                  console.log('grabare');
                  customers[buscarindex(model.id)] = model;
                // }
              },count:function(){return customers.length;
              },load_db:function(){
                if(db!=null){
                  var cliente1 = ['obs1','Leonardo','1234',1];
                  var cliente2 = ['obs12','antonio','4321','asda'];
                  var data = [cliente1,cliente2];

                  var query = "INSERT INTO cliente_cliente (observaciones,nombre,cuit,tipo_de_cliente_id) VALUES (?,?,?,?)";
                  db.transaction(function(tx){
                    for(var i=0; i<data.length;i++){
                      // alert(i);
                      $cordovaSQLite.execute(db,query,data[i]).then(function success(result){
                        // alert(result);
                      },function error(e){
                        alert(e);
                        return false;
                      });
                    }
                  return true;
                  },function(e){
                    alert('errorrrrr');
                    return false;
                  });

                }
              }
           }
     });
})()

