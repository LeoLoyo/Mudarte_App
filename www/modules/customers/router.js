angular.module('CustomersRouter',[])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('app.customers', {
      url:'customers',
      views:{
        'maincontent':{
          templateUrl:'modules/customers/templates/list.html',
          controller:'CustomersCtrl'
        }
      }
    })
    //  .state('dash.customers',{
    //     url:'/customers',
    //     views:{
    //       'maincontent':{
    //         template:'<ion-view><ion-nav-view name="customers"></ion-nav-view></ion-view>',
    //         controller:'CustomersCtrl'
    //       }
    //     },
    //     data:{
    //       title:"button icon button-clear ion-android-search"
    //   }
    //   })
    //
    // .state('dash.customers.list',{
    // cache:false,
    // url:'/list',
    // views:{
    //   "customers":{
    //       templateUrl:'modules/customers/templates/list.html',
    //       controller:'CustomersCtrl'
    //     }
    //   },
    //   data:{
    //     title:'Lista De Clientes',
    //       icon:"button icon button-clear ion-android-search"
    //   }
    // })

    .state('app.customers-new',{
    url:'customers/new',
    views:{
      'maincontent':{
          templateUrl:'modules/customers/templates/new.html',
          controller:'CustomersCtrl'
        }
      },
    data:{
          icon:"button icon button-clear ion-android-search"
      }
    })

    .state('app.customers-show',{
    url:'customers/show/:id',
    views:{
      'maincontent':{
          templateUrl:'modules/customers/templates/show.html',
          controller:'CustomersDetailCtrl'
        }
      },
    data:{
          icon:"button icon button-clear ion-android-search"
      }
    })
    // .state('app.contacts',{
    //   url:'contacts',
    //   views:{
    //     "maincontent":{
    //       templateUrl:'modules/customers/contacts/new.html',
    //       controller:'CustomersCtrl'
    //     }
    //   },
    //   data:{
    //       icon:"button icon button-clear ion-android-search",
    //       title:"Registro De Contacto"
    //     }
    // })
    .state('app.contacts-new', {
      url:':customerId/contacts/new',
      views:{
        'maincontent':{
          templateUrl:'modules/customers/contacts/new.html',
          controller:'ContactsCtrl'
        }
      }
    })
  // $urlRouterProvider.when('/customers','/customers');
})
