(function(){
    'use strict';
    var app = angular.module('services.address', []);
    app.factory('Services_Address', function($cordovaSQLite, collectiondb,$ionicLoading, $http){
      'use strict';

      //variables

      var countrys = [{
              "id_web":1,
              "pais":"Afghanistan (AF)",
              "codigo_telefonico":""
          },
          {
              "id_web":10,
              "pais":"Argentina (AR)",
              "codigo_telefonico":"+54"
          }
      ];
      var provinces = [{
          "id_web":1,
          "provincia":"Buenos Aires",
          "pais_id":10,
          "codigo_telefonico":"+54",
          "pais":"Agentina"
        },
        {
          "id_web":2,
          "provincia":"Cordova",
          "pais_id":10,
          "codigo_telefonico":"+54",
          "pais":"Agentina"
      }];
      var cities = [
          {
              "id_web":1,
              "ciudad":"Azul",
              "provincia_id":2,
              "pais_id":10,
              "pais":"Agentina",
              "provincia":"Buenos Aires"
          },{
              "id_web":2,
              "ciudad":"Bahi­a Blanca",
              "provincia_id":1,
              "pais_id":10,
              "pais":"Agentina",
              "provincia":"Cordova"
            }
      ];
      var neighborhoods = [
          {
              "id_web":1,
              "barrio":"Agronomia",
              "ciudad_id":1,
              "provincia_id":10,
              "pais_id":10,
          },
          {
              "id_web":2,
              "barrio":"Almagro",
              "ciudad_id":2,
              "provincia_id":10,
              "pais_id":10,
            }
      ];
      var streets = [];
      var address = [];

      var get = function(array,table){
        if(db != null){
          var query = "SELECT * FROM " + table;
          array = [];
          array = collectiondb.all(query);
        }
        return array;}

      return {
              country_get:function(){return get(countrys,'direccion_pais');},
              province_get:function(){return get(provinces,'vprovincia');},
              cities_get:function(){return get(cities,'vciudad');},
              neighborhoods_get:function(){return get(neighborhoods,'vbarrio');},
              streets_get:function(){return get(streets,'vcalle');},
              address_get:function(){return get(address,'vdireccion');},

              country_sync:function(data){

                  if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_pais WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                        if(result.rows.length <= 0){
                          params = [
                                        object.id,
                                        object.pais,
                                        object.codigo_telefonico
                                        ];
                          collectiondb.create('INSERT INTO direccion_pais (id_web,pais,codigo_telefonico) VALUES(?,?,?)',params);
                        }else{
                          params = [
                                        object.pais,
                                        object.codigo_telefonico
                                        ];
                          collectiondb.update('UPDATE direccion_pais set pais=?, codigo_telefonico=? where id_web =',params,object.id);
                        }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });
                  countrys=[];
                  }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(countrys,'direccion_pais'),object.id,"id_web")==undefined){
                          countrys.push(object);
                        }else{
                          countrys[collectiondb.findOne(countrys,object.id,"id_web")]=object;
                        }
                      });//foreach web

                  }
                  return true;},
              province_sync:function(data){

                  if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_provincia WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                          if(result.rows.length <= 0){
                            params = [
                                        object.id,
                                        object.pais.id,
                                        object.provincia,
                                        object.codigo_telefonico
                                        ];
                              collectiondb.create('INSERT INTO direccion_provincia (id_web,pais_id,provincia,codigo_telefonico) VALUES(?,?,?,?)',params);
                          }else{
                            params = [
                                        object.pais.id,
                                        object.provincia,
                                        object.codigo_telefonico
                                        ];
                              collectiondb.update('UPDATE direccion_provincia set pais_id=?, provincia=?, codigo_telefonico=? where id_web =',params,object.id);
                          }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });

                  }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(provinces,'vprovincia'),object.id,"id_web")==undefined){
                          provinces.push(object);
                        }else{
                          provinces[collectiondb.findOne(provinces,object.id,"id_web")]=object;
                        }
                      });//foreach web

                  }
                  return true;},
              cities_sync:function(data){
                if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_ciudad WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                          if(result.rows.length <= 0){
                            params = [
                                    object.id,
                                    object.pais.id,
                                    object.provincia.id,
                                    object.ciudad
                                    ];
                          collectiondb.create('INSERT INTO direccion_ciudad (id_web,pais_id,provincia_id,ciudad) VALUES(?,?,?,?)',params);
                          }else{
                            params = [
                                    object.pais.id,
                                    object.provincia.id,
                                    object.ciudad,
                                    ];
                          collectiondb.update('UPDATE direccion_ciudad set pais_id=?, provincia_id=?, ciudad=? where id_web =',params,object.id);
                          }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });

                }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(cities,'vciudad'),object.id,"id_web")==undefined){
                          cities.push(object);
                        }else{
                          cities[collectiondb.findOne(cities,object.id,"id_web")]=object;
                        }
                      });//foreach web

                  }
                return true;},
              Neighborhoods_sync:function(data){

                if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_barrio WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                          if(result.rows.length <= 0){
                            params = [
                                      object.id,
                                      object.pais.id,
                                      object.provincia.id,
                                      object.ciudad.id,
                                      object.barrio
                                      ];
                            collectiondb.create('INSERT INTO direccion_barrio (id_web,pais_id,provincia_id,ciudad_id,barrio) VALUES(?,?,?,?,?)',params);
                          }else{
                            params = [
                                    object.pais.id,
                                    object.provincia.id,
                                    object.ciudad,
                                    ];
                          collectiondb.update('UPDATE direccion_ciudad set pais_id=?, provincia_id=?, ciudad=? where id_web =',params,object.id);
                          }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });

                }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(neighborhoods,'vbarrio'),object.id,"id_web")==undefined){
                          neighborhoods.push(object);
                        }else{
                          neighborhoods[collectiondb.findOne(neighborhoods,object.id,"id_web")]=object;
                        }
                      });//foreach web

                  }

                return true;},
              streets_sync:function(data){
                if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_calle WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                          if(result.rows.length <= 0){
                            params = [
                                      object.id,
                                      object.ciudad.id,
                                      object.calle
                                      ];
                            collectiondb.create('INSERT INTO direccion_calle (id_web,ciudad_id,calle) VALUES(?,?,?)',params);
                          }else{
                            params = [
                                      object.ciudad.id,
                                      object.calle
                                      ];
                            collectiondb.update('UPDATE direccion_calle set ciudad_id=?, calle=? where id_web =',params,object.id);
                          }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });

                }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(streets,'vcalle'),object.id,"id_web")==undefined){
                          streets.push(object);
                        }else{
                          streets[collectiondb.findOne(streets,object.id,"id_web")]=object;
                        }
                      });//foreach web

                  }
                return true;},
              address_sync:function(data){
                if(db!=null){

                      var params = [];
                      angular.forEach(data, function(object, key){
                        var query = "SELECT * FROM direccion_direccion WHERE id_web = ?";
                        $cordovaSQLite.execute(db,query,[object.id]).then(function(result){
                          if(result.rows.length <= 0){
                            params = [
                                      object.id,
                                      object.ciudad.id,
                                      object.calle
                                      ];
                            collectiondb.create('INSERT INTO direccion_direccion (id_web,ciudad_id,calle) VALUES(?,?,?)',params);
                          }else{
                            params = [
                                      object.ciudad.id,
                                      object.calle
                                      ];
                            collectiondb.update('UPDATE direccion_direccion set ciudad_id=?, calle=? where id_web =',params,object.id);
                          }
                        },function(error){
                          alert('hubo un error find '+ error.menssages)
                          return false;
                        });//foreach db
                      });

                }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(address,'vdireccion'),object.id,"id_web")==undefined){
                          address.push(object);
                        }else{
                          address[collectiondb.findOne(address,object.id,"id_web")]=object;
                        }
                      });//foreach web
                  }
                return true;},
                address_add:function(data){
                  var result = false;
                  if(db!=null){
                    var params = [];
                    params = [
                              data.pais_id,
                              data.provincia_id,
                              data.ciudad_id,
                              data.barrio_id,
                              data.calle,
                              data.zip,
                              data.altura,
                              data.punto_de_referencia,
                              ];
                    collectiondb.create('INSERT INTO direccion_direccion (pais_id, provincia_id, ciudad_id, barrio_id, calle, zip, altura, punto_de_referencia) VALUES(?,?,?,?,?,?,?,?)',params);
                    result = true;
                  }else{
                    address.push(data);
                    result = true;
                  }
                  return result;
                },
              address_findArray:function(cotizacion_id,customer_id) {
                var co = cotizacion_id; //cotizacion_id
                var cu = customer_id; //customer_id
                var a = []; //address
                return a;
              }

      }
    });
})()
