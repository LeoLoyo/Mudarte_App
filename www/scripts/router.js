(function(){
  var app = angular.module('app.router', ['CustomersRouter', 'AddressRouter', 'QuotationsRouter']);
  app.config(function($stateProvider, $urlRouterProvider){
  'use strict';
    //var generic_state = {url:'/quotations', views:{'maincontent':{templateUrl:'templates/quotation/list.html',}}};
    var login = {url: '/login', templateUrl:'templates/user/login.html', controller: 'UserCtrl', cahe:false};


    $stateProvider

      .state('login', login)

      .state('app', {
        url: '/',
        abstract: true,
        templateUrl: 'templates/base/dash.html'
      })

      // .state('app.dashboard', dashboard)

      // .state('dash.quotations', quotations)
      //
      // .state('dash.detail-quotation', detail_quotation)
      //
      //
      // .state('dash.detail-quotation.quotation',{
      //    url:'/quotation',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/data_quotation.html',
      //         }
      //    }
      //  })
      // .state('dash.detail-quotation.client',{
      //    url:'/client',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/data_client.html',
      //         }
      //    }
      //  })
      //
      // .state('dash.detail-quotation.more',{
      //    url:'/more',
      //    views:{
      //       'data':{
      //               // templateUrl:'templates/quotation/record_card/data_quotation.html',
      //               templateUrl:'templates/quotation/record_card/customer/data_customer.html',
      //               controller:'CustomerCtrl'
      //         }
      //    }
      //  })
      //
      // .state('dash.detail-quotation.way_to_pay',{
      //    url:'/way_to_pay',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/data_waytopay.html',
      //         }
      //    }
      //  })
      // .state('dash.detail-quotation.summary',{
      //    url:'/summary',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/data_summary.html',
      //       }
      //    }
      //  })
      //
      // .state('dash.detail-quotation.address',{
      //    url:'/address',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/address/data_address.html',
      //         }
      //    }
      //  })
      //
      // .state('dash.detail-quotation.edification',{
      //    url:'/edification',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/address/data_edification.html',
      //         }
      //    }
      //  })
      // .state('dash.detail-quotation.elevators',{
      //    url:'/elevators',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/address/data_elevator.html',
      //         }
      //    }
      //  })
      // .state('dash.detail-quotation.shedule_avalible',{
      //    url:'/shedule_avalible',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/address/data_shedule_avalible.html',
      //         }
      //    }
      //  })
      //
      // .state('dash.detail-quotation.property',{
      //    url:'/property',
      //    views:{
      //       'data':{
      //            templateUrl:'templates/quotation/record_card/address/data_property.html',
      //         }
      //    }
      //  });



    $urlRouterProvider.otherwise('/quotations/show/1');
    // $urlRouterProvider.otherwise('/quotations');
  });
})()
