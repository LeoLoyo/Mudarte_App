(function(){
 var app = angular.module('CustomersCtrl',[]);
  app.controller('CustomersCtrl',function($scope, $state,$ionicLoading, $ionicPopup,$cordovaToast, $timeout, collectiondb, Service_sexo, Service_Customers, Service_typeofrelationship,Services_messanges){
    'use strict';

    $scope.customers = [];
    $scope.customers = null;
    Service_Customers.all('vcliente').then(function(customers) {
      $scope.customers = customers;
    });

    $scope.sync = function() {
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="spiral"></ion-spinner>'});
      (Service_Customers.customer_sync())?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
      $scope.customers = customers;
      $ionicLoading.hide();
    };


    // Methods
    $scope.new = function(customer){
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
                        $scope.customers = Service_Customers.all();
                        $state.go('app.contacts');
                        console.log('aqui');
                      }else{
                        console.log('o aqui');
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.all();
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
                        $scope.customers = Service_Customers.all();
                        $state.go('app.contacts');
                        console.log('aqui');
                      }else{
                        console.log('o aqui');
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.all();
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
  app.controller('ContactsCtrl', ['$scope', '$state', '$stateParams', 'Service_Contacts', function($scope, $state, $stateParams, Service_Contacts) {
    'use strict';

    $scope.customer = {
                          dni:'',
                          nombre:'',
                          cliente_id: Number($state.params.customerId),
                          sexo_id:2,
                          estado_civil_id:1,
                          fecha_nacimiento:' ',
                          tipo_de_relacion_id: 1,
                          observaciones:''
                      };

    $scope.new = function() {

      var object = angular.copy($scope.customer);
      Service_Contacts.add(object).then(function(result){
        console.log(result);
        $state.go('app.quotations');
      }).catch(function(e) {
        console.log(e);
      });
    };

  }]);
})()
