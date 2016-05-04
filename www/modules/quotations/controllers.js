(function() {
  var app = angular.module('QuotationCtrl', []);
  app.controller('DashboardCtrl', function($scope,Service_Customers, Services_quotations,cotizador) {
    'use strict';
    $scope.quotations = Services_quotations.all();

    // Service_Customers.customer_sync()
    //
    // Services_quotations.quotations_sync(cotizador);
    //
    // setTimeout(function() {
    //   $scope.quotations = {count:Services_quotations.all().length};
    //   $scope.$apply();
    // },0);


  });
  app.controller('QuotationCtrl',['$scope', 'Services_quotations','cotizador',function($scope, Services_quotations,cotizador){
    'use strict';
    $scope.quotations = Services_quotations.all();

    $scope.sync = function(){
      Services_quotations.quotations_sync(cotizador);
      $scope.quotations = Services_quotations.all();
    }

  }]);
  app.controller('Quotation-DetailsCtrl',['$scope', 'Services_quotations', '$state', '$stateParams','Service_Customers', function( $scope, Services_quotations, $state, $stateParams, Service_Customers) {
    // Load data from the quotation
    var quotation = Services_quotations.findOne($stateParams.id);
    var customer = Service_Customers.findOne(quotation.cliente_id);
    var contacts = Service_Customers.contacts_get(customer.id_web);
    var address = Services_quotations.quotation_address_get($stateParams.id);
    var environments = Services_quotations.quotation_environments_get($stateParams.id);


     $scope.quotation = quotation;
     $scope.customer = customer;
     $scope.contacts = contacts;


    setTimeout(function() {
      var address = Services_quotations.quotation_address_get($stateParams.id);
      var environments = Services_quotations.quotation_environments_get($stateParams.id);

      $scope.address = address;
      $scope.environments = environments;
      $scope.$apply();
    },0);

    // delete an environment
    $scope.delete_env = function(a,e) {
      $scope.environments = Services_quotations.deleteOne_env(a,e);
      setTimeout(function() {
        var environments = Services_quotations.quotation_environments_get($stateParams.id);
        $scope.environments = environments;
        $scope.$apply();
      },0);
    };
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
