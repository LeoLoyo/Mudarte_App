(function(){
    var app = angular.module('AddressCtrl',[]);
    app.controller('CountryCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address, Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>',duration:5000});
      $scope.countrys = Services_Address.country_get();
      $ionicLoading.hide();



      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/pais/10/?format=json';
        var url='modules/address/json/countrys.json';
        $http.get(url).then(function success(data){
            (Services_Address.country_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.countrys = [];
            $scope.countrys = Services_Address.country_get();
            $ionicLoading.hide();

          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
//controllers Provincies
    app.controller('ProvinceCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address,Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
      $scope.provinces = Services_Address.province_get();
      $ionicLoading.hide();

      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/provincia/?format=json';
        var url='modules/address/json/provinces.json';
        $http.get(url).then(function success(data){

            (Services_Address.province_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.provinces = [];
            $scope.provinces = Services_Address.province_get();
            $ionicLoading.hide();

          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
//controllers cities
    app.controller('CityCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address, Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
      $scope.cities = Services_Address.cities_get();
      $ionicLoading.hide();


      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/ciudad/?format=json';
        var url='modules/address/json/cities.json';
        $http.get(url).then(function success(data){

            (Services_Address.cities_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.cities = [];
            $scope.cities = Services_Address.cities_get();
            $ionicLoading.hide();
          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
//controllers neighborhoods
    app.controller('NeighborhoodCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address, Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
      $scope.neighborhoods = Services_Address.neighborhoods_get();
      $ionicLoading.hide();


      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/barrio/?format=json';
        var url='modules/address/json/neighborhoods.json';
        $http.get(url).then(function success(data){

            (Services_Address.Neighborhoods_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.neighborhoods = [];
            $scope.neighborhoods = Services_Address.neighborhoods_get();
            $ionicLoading.hide();
          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
//controllers streets
    app.controller('StreetCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address, Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
      $scope.streets = Services_Address.streets_get();
      $ionicLoading.hide();


      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/calle/?format=json';
        var url='modules/address/json/streets.json';
        $http.get(url).then(function success(data){
            console.log(data.data);
            (Services_Address.streets_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.streets = [];
            $scope.streets = Services_Address.streets_get();
            $ionicLoading.hide();
          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
//controllers address
    app.controller('AddressCtrl',function($scope, $http, $state, $ionicLoading, $cordovaToast, $timeout, collectiondb, Services_Address, Services_messanges){
     'use strict';
      $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
      $scope.address = Services_Address.address_get();
      $ionicLoading.hide();
      $scope.sync = function(){

        $ionicLoading.show({template: '<p>Loading...</p><ion-spinner icon="android" class="spinner-balanced"></ion-spinner>'});
        // var url='http://192.168.0.114:8000/api/v1/direccion/?format=json';
        var url='modules/address/json/address.json';
        $http.get(url).then(function success(data){
            (Services_Address.address_sync(data.data))?Services_messanges.message('Sincronizacion Satisfactoria'):Services_messanges.message('Error al Sincronizar');
            $scope.address = [];
            $scope.address = Services_Address.address_get();
            $ionicLoading.hide();
          }, function error(e){
            $ionicLoading.hide();
            Services_messanges.message('No hubo respuesta del servidor');
          });
      }
    });
})()