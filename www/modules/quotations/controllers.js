(function() {
  var app = angular.module('QuotationCtrl', []);
  app.controller('DashboardCtrl', function($scope, Services_quotations) {
    'use strict';
    $scope.quotations = {count:Services_quotations.all().length}

  });
  app.controller('QuotationCtrl',['$scope', 'Services_quotations','cotizador',function($scope, Services_quotations,cotizador){
    'use strict';
    $scope.quotations = Services_quotations.all();

    $scope.sync = function(){
      Services_quotations.quotations_sync(cotizador);
      $scope.quotations = Services_quotations.all();
    }

  }]);
  app.controller('Quotation-DetailsCtrl',['$scope', 'Services_quotations', '$state', '$stateParams','Service_Customers', function($scope, Services_quotations, $state, $stateParams, Service_Customers) {
    // Load data from the quotation
    var quotation = Services_quotations.findOne($stateParams.id);
    var customer = Service_Customers.findOne(quotation.cliente_id);
    var contacts = Service_Customers.contacts_get(customer.id_web);
    var address = Services_quotations.quotation_address_get($stateParams.id);
    var environments = Services_quotations.quotation_environments_get($stateParams.id);

    $scope.address = address;
    $scope.environments = environments;
    $scope.quotation = quotation;
    $scope.customer = customer;
    $scope.contacts = contacts
    // var address  = [{id:10,direccion:"Carrera 19 con calle 24 y 25", barrio:"La Pe;a",ambientes:[]},{id:2,direccion:"Carrera 18 con calle 24 y 25", barrio:"La Pe;a",ambientes:[]}];
    // var environments = [{id:10, ambiente:"Cocina"},{id:20, ambiente:"Lobby"},{id:30,ambiente:"Cuarto Estudio"},{id:40,ambiente:"Cuarto Principal"}];
    // for (var i = 0; i < address.length; i++) {
    //   for (var j = 0; j < environments.length; j++) {
    //       address[i].ambientes.push(environments[j]);
    //   }
    // }
    // $scope.address = address;
    // delete an environment
    // $scope.delete_env = function(a,e) {
    //   console.log("el id de cotizacion: "+ a +"el id de ambiente: " + e );
    //   for (var i = 0; i < address.length; i++) {
    //     if(address[i].id==a){
    //       for (var j = 0; j < address[i].ambientes.length; j++) {
    //         if(address[i].ambientes[j].id==e){
    //           console.log(address[i].ambientes.splice(j,1));
    //         }
    //       }
    //     }
    //   }
    //   $scope.address = address;
    // };
    // add address
    $scope.new_address = function(num){
      (num==0)?console.log('es una nueva direccion de origen'):console.log('es una nueva direccion de destino');
      $state.go('app.address-new');
    };
    //toggle
    $scope.toggleGroup = function(address) {
      if ($scope.isGroupShown(address)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = address;
      }
    };
    $scope.isGroupShown = function(address) {
      return $scope.shownGroup === address;
    };
  }]);
  app.controller('PanelQuotationCtrl',['$scope', function($scope){
      'use strict';
      $scope.groups = [
      {
          "title":"Cliente",
          "icon":"icon ion-android-person",
          "items":[
                      {
                          "title":"Datos Biograficos",
                          "link":".client"
                      },
                      {
                          "title":"Datos de Contacto"
                      },
                      {
                          "title":"Fuente de Captacion"
                      }
                      ]
      },{
          "title":"Cotizacion",
          "icon":"icon ion-android-list",
          "items":[
                      {
                          "title":"Ambientes",
                          "link":".quotation"
                      },
                      {
                          "title":"Muebles"
                      },
                      {
                          "title":"Otros"
                      }]
      },{
          "title":"Direccion",
          "icon":"icon ion-android-locate",
          "items":[
                      {
                          "title":"Datos Basicos",
                           "link":".address"
                       },
                      {
                          "title":"Edificacion",
                          "link":".edification"
                      },
                      {
                          "title":"Ascensores",
                          "link":".elevators"
                      },
                      {
                          "title":"Horario Disponible",
                          "link":".shedule_avalible"
                      },{
                          "title":"Inmueble",
                          "link":".property"
                      }]

      },{
          "title":"Forma de Pago",
          "icon":"icon ion-card",
          "items":[{"title":"Credito","link":".way_to_pay"},{"title":"debito","link":".way_to_pay"}]

      },{
          "title":"Resumen de Cotizacion",
          "icon":"icon ion-android-checkbox-outline",
          "link":".summary"

      }];
    $scope.toggleGroup = function(group) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
      };
      $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
      };
  }]);

})()
