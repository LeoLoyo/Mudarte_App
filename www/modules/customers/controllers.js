(function(){
 var app = angular.module('CustomersCtrl',[]);
  app.controller('CustomersCtrl',function($scope,$http , $state,$ionicLoading, $ionicPopup,$cordovaToast, $timeout, collectiondb, Service_sexo, Service_Customers, Service_typeofrelationship,Services_messanges){
    'use strict';
    // $scope.mytitle = $state.current.data.title;
    $scope.customers = Service_Customers.get();

    $scope.sync = function(){

      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="spiral"></ion-spinner>'});
      // if(db==null){
        var url='modules/customers/clientes.json';
      // // }else{
      //   var url='http://192.168.0.114:8000/api/v1/cliente/?format=json';
      // // }
        $http.get(url).then(function success(data){
          // console.log(data.data);
          (Service_Customers.customer_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
          // Service_Customers.load(data.data);
          $scope.customers = [];
          $scope.customers = Service_Customers.get();
          $ionicLoading.hide();

        }, function error(e){
          $ionicLoading.hide();
          Services_messanges.message('No hubo respuesta del servidor');
        });
    }





    // $scope.customers = Service_Customers.get();

    // $scope.sexos = Service_sexo;


    // $scope.tiporelaciones = Service_typeofrelationship;


    // Methods
    $scope.new = function(){
      // collectiondb.insertm();
      $state.go('app.customers-new');
    }

    $scope.CustomerPopup = function(model){
      console.log(model);
      if(model.id_web == undefined){
        console.log(model.tipo_de_cliente_id);
        if(model.nombre != undefined && model.tipo_de_cliente_id != undefined ){
          var myPopup = $ionicPopup.show({
          title: 'Desea Continuar con el cliente?',
          subTitle: "<p>"+model.nombre+"</p>",
          scope: $scope,
          buttons: [{
                     text: 'Cancelar'
                    },
                    {
                     text: 'Guardar',
                     type: 'button-positive',
                     onTap:function(){
                      if(model.tipo_de_cliente_id == 1){
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('app.contacts');
                        console.log('aqui');
                      }else{
                        console.log('o aqui');
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('app.customers');
                      }
                     }
                    }]
            });
        }else{
          alert('Faltan Campos');
        }
      }else{
        console.log('actualizare al cliente '+ model.nombre);
        Service_Customers.update(model);
        $state.go('dash.customers.list');
      }


    }
    $scope.ContactPopup = function(model){
   if(model.nombre != undefined && model.dni != undefined ){
    var myPopup = $ionicPopup.show({
        title: 'Nuevo Registro',
        subTitle: "<p>" + model.nombre + "?</p>",
        scope: $scope,
        buttons: [{
                   text: 'Cancelar'
                  },
                  {
                   text: 'Guardar',
                   type: 'button-energized',
                   onTap:function(){
                    console.log("Registro de Contacto me voy a lista");
                    $state.go('dash.customers.list');
                   }
                  }]
      });

   }

    }
  });
  app.controller('CustomersDetailCtrl',function($scope,$state, $stateParams,$ionicPopup, Service_Customers){
    'use strict';
    var customers = Service_Customers.findOne($stateParams.id);
    // console.log(customers.tipo_de_cliente_id);
    $scope.customer = customers;
    $scope.CustomerPopup = function(model){
      console.log(model);
      if(model.id_web == undefined){
        console.log(model.tipo_de_cliente_id);
        if(model.nombre != undefined && model.tipo_de_cliente_id != undefined ){
          var myPopup = $ionicPopup.show({
          title: 'Desea Continuar con el cliente?',
          subTitle: "<p>"+model.nombre+"</p>",
          scope: $scope,
          buttons: [{
                     text: 'Cancelar'
                    },
                    {
                     text: 'Guardar',
                     type: 'button-positive',
                     onTap:function(){
                      if(model.tipo_de_cliente_id == 1){
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('app.contacts');
                        console.log('aqui');
                      }else{
                        console.log('o aqui');
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('app.customers');
                      }
                     }
                    }]
            });
        }else{
          alert('Faltan Campos');
        }
      }else{
        console.log('actualizare al cliente '+ model.nombre);
        Service_Customers.update(model);
        $state.go('app.customers');
      }


    }
   });
})()
