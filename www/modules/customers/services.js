(function(){
  'use strict';
    var app = angular.module('services.customers',[]);
    app.factory('Service_Customers', function($cordovaSQLite,collectiondb){
      'use strict';
      var customer = {};
      var customers = [{
                      "id":1,
                      "nombre":"Leonardo Loyo",
                      "id_web":1,
                      "cuit":"v-21295782",
                      "tipo_de_cliente_id":1
                     },{
                      "id":2,
                      "nombre":"BLeonardo Loyo",
                      "id_web":2,
                      "cuit":"v-121295782",
                      "tipo_de_cliente_id":1
                     },{
                      "id":300,
                      "nombre":"ALeonardo Loyo",
                      "id_web":300,
                      "cuit":"v-321295782",
                      "tipo_de_cliente_id":1
                     }];

      function buscar(Id){
      for (var i = 0; i < customers.length; i++) {
      if (customers[i].id === parseInt(Id)) {
        return customers[i];
      }
      }
      return null;}
      function buscarindex(Id){
        for (var i = 0; i < customers.length; i++) {
                if (customers[i].id === parseInt(Id)) {
                  return i;
                }
          }
        return null;}
       return {
                load:function(data){
                    if(db!=null){
                      var params = [];
                      angular.forEach(data, function(object, key){
                        if(collectiondb.search(customers,object.id)==undefined){
                          params = [
                                    object.id,
                                    object.nombre,
                                    object.observaciones,
                                    object.cuit,
                                    object.tipo_de_cliente.id
                                    ];
                          collectiondb.create('INSERT INTO cliente_cliente (id_web,nombre,observaciones,cuit,tipo_de_cliente_id) VALUES(?,?,?,?,?)',params);
                        }else{
                          params = [object.nombre,
                                    object.observaciones,
                                    object.cuit,
                                    object.tipo_de_cliente.id
                                    ];
                          collectiondb.update('UPDATE cliente_cliente set nombre=?, observaciones=?, cuit=?, tipo_de_cliente_id=? where id_web =',params,object['id']);
                        }//else
                      });
                     }else{
                      for(var j = 0; j<data.length; j++){
                        if(collectiondb.search(customers,data[j].id)==undefined){
                        customers.push(data[j]);
                        }else{
                          customers[collectiondb.searchid(customers,data[j].id)]=data[j];
                          customers[collectiondb.searchid(customers,data[j].id)]=data[j].id;
                        }
                      }
                    }
                    return true;
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
                  if(db!=null){
                    var query = 'SELECT * FROM cliente_cliente'
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

