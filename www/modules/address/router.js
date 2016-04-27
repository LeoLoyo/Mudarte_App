angular.module('AddressRouter',[])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

.state('app.countrys',{
      url:'countrys',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/countrys/list.html',
          controller:'CountryCtrl'
        }
      }
    })

    .state('app.provinces',{
      url:'provinces',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/provinces/list.html',
          controller:'ProvinceCtrl'
        }
      }
    })

    .state('app.cities',{
      url:'cities',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/cities/list.html',
          controller:'CityCtrl'
        }
      }
    })

    .state('app.neighborhoods',{
      url:'neighborhoods',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/neighborhoods/list.html',
          controller:'NeighborhoodCtrl'
        }
      }
    })

    .state('app.streets',{
      url:'streets',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/streets/list.html',
          controller:'StreetCtrl'
        }
      }
    })

    // .state('app.address',{
    //     url:'address',
    //     views:{
    //       'maincontent':{
    //         template:'<ion-view><ion-nav-view name="address"></ion-nav-view></ion-view>',
    //         controller:'AddressCtrl'
    //       }
    //     }
    //   })

    .state('app.address-list',{
      url:'address',
      views:{
        "maincontent":{
          templateUrl:'modules/address/templates/address/list.html',
          controller:'AddressCtrl'
        }
      }
    })

    .state('app.address-new',{
      url:'address/new',
      views:{
        'maincontent':{
          templateUrl:'modules/address/templates/address/new.html',
          controller:'AddressCtrl'
        }
      }
    })
    ;
      // $urlRouterProvider.when('/countrys/','/countrys');
})
