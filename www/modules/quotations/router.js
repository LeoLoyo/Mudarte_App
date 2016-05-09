(function() {
  var app = angular.module('QuotationsRouter', []);
  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('app.dashboard', {
      cache:false,
      url:'dashboard',
      views:{
        'maincontent':{
          templateUrl:'modules/quotations/templates/dashboard.html',
          controller:'DashboardCtrl'
        }
      }
    })

    .state('app.quotations', {
      cache:false,
      url:'quotations',
      views:{
        'maincontent':{
          templateUrl:'modules/quotations/templates/list.html',
          controller:'QuotationCtrl'
        }
      }
    })
    .state('app.quotations-show',{
      cache:false,
      url:'quotations/show/:id',
      views:{
          'maincontent':{
            templateUrl:'modules/quotations/templates/file.html',
            controller:'Quotation-DetailsCtrl'
            }
       }
     })
    // .state('dash.quotations.detail-quotation', {
    //   url:'/details',
    //   views:{
    //     'quotations':{
    //       templateUrl:'modules/quotations/templates/detail-quotation.html',
    //       // controller:'PanelQuotationCtrl'
    //     }
    //   }
    // })
    //
    // .state('dash.quotations.detail-quotation.quotation',{
    //   //  url:'/quotation',
    //    views:{
    //       'data':{
    //            templateUrl:'modules/quotations/templates/record_card/data_quotation.html',
    //         }
    //    }
    //  })
    // .state('dash.quotations.detail-quotation.client',{
    //    url:'/client',
    //    views:{
    //       'data':{
    //            templateUrl:'modules/quotations/templates/record_card/data_client.html',
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

  });

})()
