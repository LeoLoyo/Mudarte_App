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
            template:'<ion-view><ion-nav-view name="address"></ion-nav-view></ion-view>',
            controller:'AddressCtrl'
          }
        }
      })

    .state('dash.address.list',{
      cache:false,
      url:'/list',
      views:{
        "address":{
          templateUrl:'modules/address/templates/address/list.html',
          controller:'AddressCtrl'
        }
      }
    })

    .state('dash.address.new',{
      url:'/new',
      views:{
        'address':{
          templateUrl:'modules/address/templates/address/new.html',
          controller:'AddressCtrl'
        }
      }
    })
    ;
      // $urlRouterProvider.when('/countrys/','/countrys');
})
