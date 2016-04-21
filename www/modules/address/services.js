(function(){
    'use strict';
    var app = angular.module('services.address', []);
    app.factory('Services_Address', function($cordovaSQLite, collectiondb,$ionicLoading){
      'use strict';

      //variables

      var countrys = [];
      var provinces = [];
      var cities = [];
      var neighborhoods = [];
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

                  }else{

                      angular.forEach(data, function(object, key){
                        if(collectiondb.findOne(get(countrys,'direccion_pais'),object.id,"id")==undefined){
                          countrys.push(object);
                        }else{
                          countrys[collectiondb.findOne(countrys,object.id,"id")]=object;
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
                    for(var j = 0; j<data.length; j++){
                      if(collectiondb.searchweb(provinces,data[j].id)==undefined){
                      provinces.push(data[j]);
                      }else{
                        provinces[collectiondb.searchid(provinces,data[j].id)]=data[j];
                      }
                    }

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
                    for(var j = 0; j<data.length; j++){
                      if(collectiondb.searchweb(cities,data[j].id)==undefined){
                      cities.push(data[j]);
                      }else{
                        cities[collectiondb.searchid(cities,data[j].id)]=data[j];
                      }
                    }

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
                    for(var j = 0; j<data.length; j++){
                      if(collectiondb.searchweb(neighborhoods,data[j].id)==undefined){
                      neighborhoods.push(data[j]);
                      }else{
                        neighborhoods[collectiondb.searchid(neighborhoods,data[j].id)]=data[j];
                      }
                    }

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
                    for(var j = 0; j<data.length; j++){
                      if(collectiondb.searchweb(streets,data[j].id)==undefined){
                      streets.push(data[j]);
                      }else{
                        streets[collectiondb.searchid(streets,data[j].id)]=data[j];
                      }
                    }

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
                    for(var j = 0; j<data.length; j++){
                        if(collectiondb.searchweb(address,data[j].id)==undefined){
                        address.push(data[j]);
                        }else{
                          address[collectiondb.searchid(address,data[j].id)]=data[j];
                        }
                      }

                }
                return true;}
      }
    });
})()
