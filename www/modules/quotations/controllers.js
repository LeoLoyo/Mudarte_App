(function() {
  var app = angular.module('QuotationCtrl', []);
  app.controller('DashboardCtrl', function($scope, Services_quotations) {
    'use strict';
    $scope.quotations = {count:Services_quotations.all().length}

  });
  app.controller('QuotationCtrl',['$scope', 'Services_quotations','cotizador',function($scope, Services_quotations,cotizador){
    'use strict';
    $scope.quotations = Services_quotations.all();
    // console.log(cotizador);
      // $scope.quotations = Services_quotations.findArray(1);
    // var quotation = quotations.findOne(3,1);

    $scope.sync = function(){
      Services_quotations.quotations_sync();
      $scope.quotations = Services_quotations.all();
    }

  }]);
  app.controller('Quotation-DetailsCtrl',['$scope', 'Services_quotations', '$state', '$stateParams', 'cotizador', function($scope, Services_quotations, $state, $stateParams, cotizador) {
    // var quotations = [{
    //   id_web:1,
    //   numero_de_contrato:10,
    //   numero_de_cotizacion:'A511',
    //   fecha_de_cotizacion:"01/01/2016",
    //   hora_de_cotizacion:"08:00 AM",
    //   tiempo_carga: null,
    //   total_recorrido: null,
    //   total_recorrido_km: null,
    //   nivel_complejidad_riesgo: null,
    //   porcentaje_complejidad_riesgo: null,
    //   como_abona: "Efectivo"
    // },
    // {
    //   id_web:2,
    //   numero_de_contrato:11,
    //   numero_de_cotizacion:'A512',
    //   fecha_de_cotizacion:"02/01/2016",
    //   hora_de_cotizacion:"09:00 AM",
    //   tiempo_carga: null,
    //   total_recorrido: null,
    //   total_recorrido_km: null,
    //   nivel_complejidad_riesgo: null,
    //   porcentaje_complejidad_riesgo: null,
    //   como_abona: "TDC"
    // }];

    $scope.quotation = Services_quotations.findOne($stateParams.id,cotizador.id);
    $scope.customer = {nombre:"Leonardo Loyo", cuit:"V-21295782-4"};
    $scope.contact = {nombre:"Leonardo Loyo", dni:null, telefono:"0424-5177331"};
    $scope.address = {calle:"Carrera 19 con calle 24 y 25", barrio:"La Pe;a"};





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
