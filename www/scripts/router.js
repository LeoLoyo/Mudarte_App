var app = angular.module('app.router', ['CustomersRouter']);
app.config(function($stateProvider, $urlRouterProvider){
'use strict';
  //var generic_state = {url:'/quotations', views:{'maincontent':{templateUrl:'templates/quotation/list.html',}}};
  var login = {url: '/login', templateUrl:'templates/user/login.html', controller: 'UserCtrl', cahe:false};

  var dash =  {url: '/dash',abstract: true,templateUrl: 'templates/base/dash.html'};

  var dashboard = {url:'/dashboard',views:{'maincontent':{templateUrl:'templates/user/dashboard.html'}}};

  var quotations = {url:'/quotations', views:{'maincontent':{templateUrl:'templates/quotation/list.html'}}};

  var detail_quotation = {url:'/quotation',views:{'maincontent':{templateUrl:'templates/quotation/detail-quotation.html',controller:'PanelQuotationCtrl'}}};
  $stateProvider

    .state('login', login)

    .state('dash', dash)

    .state('dash.dashboard', dashboard)

    .state('dash.quotations', quotations)

    .state('dash.detail-quotation', detail_quotation)


    .state('dash.detail-quotation.quotation',{
       url:'/quotation',
       views:{
          'data':{
			         templateUrl:'templates/quotation/record_card/data_quotation.html',
			      }
       }
     })
    .state('dash.detail-quotation.client',{
       url:'/client',
       views:{
          'data':{
			         templateUrl:'templates/quotation/record_card/data_client.html',
			      }
       }
     })

    .state('dash.detail-quotation.more',{
       url:'/more',
       views:{
          'data':{
                  // templateUrl:'templates/quotation/record_card/data_quotation.html',
                  templateUrl:'templates/quotation/record_card/customer/data_customer.html',
                  controller:'CustomerCtrl'
            }
       }
     })

    .state('dash.detail-quotation.way_to_pay',{
       url:'/way_to_pay',
       views:{
          'data':{
			         templateUrl:'templates/quotation/record_card/data_waytopay.html',
			      }
       }
     })
    .state('dash.detail-quotation.summary',{
       url:'/summary',
       views:{
          'data':{
			         templateUrl:'templates/quotation/record_card/data_summary.html',
  	      }
       }
     })

    .state('dash.detail-quotation.address',{
       url:'/address',
       views:{
          'data':{
               templateUrl:'templates/quotation/record_card/address/data_address.html',
            }
       }
     })

    .state('dash.detail-quotation.edification',{
       url:'/edification',
       views:{
          'data':{
               templateUrl:'templates/quotation/record_card/address/data_edification.html',
            }
       }
     })
    .state('dash.detail-quotation.elevators',{
       url:'/elevators',
       views:{
          'data':{
               templateUrl:'templates/quotation/record_card/address/data_elevator.html',
            }
       }
     })
    .state('dash.detail-quotation.shedule_avalible',{
       url:'/shedule_avalible',
       views:{
          'data':{
               templateUrl:'templates/quotation/record_card/address/data_shedule_avalible.html',
            }
       }
     })

    .state('dash.detail-quotation.property',{
       url:'/property',
       views:{
          'data':{
               templateUrl:'templates/quotation/record_card/address/data_property.html',
            }
       }
     })

    .state('dash.countrys',{
      url:'/countrys',
      views:{
        'maincontent':{
          templateUrl:'templates/address/countrys/list.html',
          controller:'CountryCtrl'
        }
      }
    })

    .state('dash.provinces',{
      url:'/provinces',
      views:{
        'maincontent':{
          templateUrl:'templates/address/provinces/list.html',
          controller:'ProvinceCtrl'
        }
      }
    })

    .state('dash.cities',{
      url:'/cities',
      views:{
        'maincontent':{
          templateUrl:'templates/address/cities/list.html',
          controller:'CityCtrl'
        }
      }
    })

    .state('dash.neighborhoods',{
      url:'/neighborhoods',
      views:{
        'maincontent':{
          templateUrl:'templates/address/neighborhoods/list.html',
          controller:'NeighborhoodCtrl'
        }
      }
    })

    .state('dash.streets',{
      url:'/streets',
      views:{
        'maincontent':{
          templateUrl:'templates/address/streets/list.html',
          controller:'StreetCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/dash/dashboard');
  // $urlRouterProvider.otherwise('/dash/customers/list');
});
