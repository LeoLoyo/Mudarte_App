// (function() {
  var app = angular.module('QuotationCtrl', ['services.customers']);
  app.controller('DashboardCtrl', function($scope,Service_Customers, Services_quotations,cotizador) {
    'use strict';

    // // $scope.quotations = {count:Services_quotations.all().length};
    // setTimeout(function() {
    //   // $scope.quotations = {count:Services_quotations.all().length};
    //   $scope.$apply();
    // },1000);
    //

  });
  app.controller('QuotationCtrl',['$scope', 'Services_quotations','cotizador', function($scope, Services_quotations,cotizador){
    'use strict';

    $scope.quotations = [];
    $scope.quotations = null;
    Services_quotations.all().then(function(quotations) {
      $scope.quotations = quotations;
    });


    // $scope.sync = function(){
    //   Services_quotations.quotations_sync(cotizador);
    //   $scope.quotations = Services_quotations.all();
    // }

  }]);
  app.controller('Quotation-DetailsCtrl',function(collectiondb, $scope, Services_quotations, $state, $stateParams, Service_Customers) {

    $scope.quotation  = {};
    $scope.contacts = [];
    $scope.address = [];
    $scope.customer = {};

    Services_quotations.get($stateParams.id).then(function(quotation) {
        $scope.quotation = quotation;
        Services_quotations.get_customer(Number(quotation.cliente_id)).then(function(customer) {
            $scope.customer = customer;
            Services_quotations.all_contacts(customer.id_web).then(function(contacts) {
              $scope.contacts = contacts;
            });
        });
    });
    
    Services_quotations.all_address($stateParams.id).then(function(address) {
      $scope.address = address;
    });


    // console.log($scope.customer.nombre);

    // Services_quotations.all_contacts($scope.customer.id_web).then(function(contacts) {
    //   $scope.contacts = contacts;
    // });
    //
    // Services_quotations.all_addresses($stateParams.id).then(function(address) {
    //   $scope.address = address;
    // });

    // var address = Services_quotations.quotation_address_get($stateParams.id);
    // var environments = Services_quotations.quotation_environments_get($stateParams.id);




    //  $scope.contacts = contacts;


    setTimeout(function() {
      // var address = Services_quotations.quotation_address_get($stateParams.id);
      // var environments = Services_quotations.quotation_environments_get($stateParams.id);
      //
      // $scope.address = address;
      // $scope.environments = environments;
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
  });
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

// })()
