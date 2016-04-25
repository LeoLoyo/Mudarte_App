(function() {
  var app = angular.module('app.controllers');
  app.controller('QuotationCtrl',['$scope', 'quotations',function($scope, quotations){
    'use strict';
    // $scope.quotations = quotations.all();
    console.log(quotations.findOne(3,1));
    // var qs = quotations.findArray(3);
    var quotation = quotations.findOne(3,1);
    $scope.quotations = [quotation];

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
