angular.module('AddressRouter',[])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

.state('dash.countrys',{
      url:'/countrys',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/countrys/list.html',
          controller:'CountryCtrl'
        }
      }
    })

    .state('dash.provinces',{
      url:'/provinces',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/provinces/list.html',
          controller:'ProvinceCtrl'
        }
      }
    })

    .state('dash.cities',{
      url:'/cities',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/cities/list.html',
          controller:'CityCtrl'
        }
      }
    })

    .state('dash.neighborhoods',{
      url:'/neighborhoods',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/neighborhoods/list.html',
          controller:'NeighborhoodCtrl'
        }
      }
    })

    .state('dash.streets',{
      url:'/streets',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/streets/list.html',
          controller:'StreetCtrl'
        }
      }
    })
    .state('dash.address',{
      url:'/address',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/address/list.html',
          controller:'AddressCtrl'
        }
      }
    })
    ;
      $urlRouterProvider.when('/countrys/','/countrys');
})
