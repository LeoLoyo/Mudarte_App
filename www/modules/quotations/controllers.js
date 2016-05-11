(function() {
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
  app.controller('Quotation-DetailsCtrl',function(collectiondb, $scope, Services_quotations, $state, $stateParams, Service_Customers, Services_Addresses, Service_Contacts, Services_Environments, Services_furnitures) {

    $scope.quotation  = {};
    $scope.customer = {};

    $scope.contacts = [];
    $scope.contacts = null;

    $scope.address = [];
    $scope.address = null;
    $scope.environments = [];
    $scope.environments = null;
    $scope.furnitures = [];
    $scope.furnitures = null;

    function init() {

      Services_quotations.get($stateParams.id).then(function(quotation) {
        $scope.quotation = quotation;
        Service_Customers.get(Number(quotation.cliente_id)).then(function(customer) {
            $scope.customer = customer;
            Service_Contacts.all(Number(customer.id_web)).then(function(contacts) {
                $scope.contacts = contacts;
              }).catch(function(e) {
                  console.log(e);
                  alert("Ocurrio Un Error");
                });
              })
      });

      Services_Addresses.all(Number($stateParams.id)).then(function(address) {
        $scope.address = address;
      });

      Services_Environments.all(Number($stateParams.id)).then(function(envs) {
        $scope.environments = envs;
      });

      Services_furnitures.all('vcotizacion_mueble', Number($stateParams.id), 'cotizacion_id').then(function(furnitures) {
            $scope.furnitures = furnitures;
          }).catch(function(e) {
              console.log("Error al Cargar Los Muebles");
              alert("Error al Cargar Los Muebles");
          });
      };

    init();

    // add contacts
    $scope.add_contacts = function(customer){
      $state.go('app.contacts-new', {customerId:customer.id_web, quotation_id:$stateParams.id});
    };

    // delete an contacts
    $scope.delete_contact = function(id, id_web) {

      var cid = id_web;
      var attr = 'id_web';

      if(id_web==null){
        cid = id;
        attr='id';
      };

      Service_Contacts.remove('cliente_contacto', cid, attr).then(function(result) {
        init();
      });
    };

    // delete an environment
    $scope.delete_env = function(Id) {
      Services_Environments.remove('cotizacion_cotizacionambiente', Id, 'id_web').then(function(result){
        init();
      });
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

})();
