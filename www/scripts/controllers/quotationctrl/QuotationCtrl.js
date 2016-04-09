angular.module('app.controllers')
.controller('QuotationCtrl',['$scope',function($scope){
  'use strict';
}])
.controller('CustomerCtrl', function($scope, $ionicPopup, $timeout){
$scope.customer = {
    "dni":"123456789",
    "nombre":"Prueba nombre",
    "sexo":" hombre",
    "estado_civil":" Soltero",
    "fecha_de_nacimiento":"14 Marzo 1991",
    "movil":"+58 0424 517 73 31",
    "email":"Cyberedward@gmail.com"
};
    $scope.showPopup = function(campo,atrib){
        console.log(campo);
   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     // template: '<input type="text" ng-model="customer."'+campo+'">',
     template: '<input type="text" ng-model="customer.'+campo+'">',
     title: atrib,
     subTitle: 'Actualizacion De Registro',
     scope: $scope,
     buttons: [
       { text: 'Cancelar' },
       {
         text: 'Guardar',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.customer.movil) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return !$scope.customer.movil;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   // $timeout(function() {
   //    myPopup.close(); //close the popup after 3 seconds for some reason
   // }, 3000);
    }
})
.controller('PanelQuotationCtrl',['$scope', function($scope){
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

