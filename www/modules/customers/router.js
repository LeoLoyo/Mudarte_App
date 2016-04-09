angular.module('CustomersRouter',[])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
     .state('dash.customers',{
        url:'/customers',
        views:{
          'maincontent':{
            template:'<ion-view><ion-nav-view name="customers"></ion-nav-view></ion-view>',
            controller:'CustomersCtrl'
          }
        },
        data:{
          title:"button icon button-clear ion-android-search"
      }
      })

    .state('dash.customers.list',{
    cache:false,
    url:'/list',
    views:{
      "customers":{
          templateUrl:'modules/customers/templates/list.html',
          controller:'CustomersCtrl'
        }
      },
      data:{
        title:'Lista De Clientes',
          icon:"button icon button-clear ion-android-search"
      }
    })

    .state('dash.customers.new',{
    url:'/new',
    views:{
      'customers':{
          // templateUrl:'templates/customers/new.html',
          templateUrl:'modules/customers/templates/new.html',
          controller:'CustomersCtrl'
        }
      },
    data:{
          icon:"button icon button-clear ion-android-search"
      }
    })

    .state('dash.customers.show',{
    url:'/show/:id',
    views:{
      'customers':{
          // templateUrl:'templates/customers/show.html',
          templateUrl:'modules/customers/templates/show.html',
          controller:'CustomersDetailCtrl'
        }
      },
    data:{
          icon:"button icon button-clear ion-android-search"
      }
    })
    .state('dash.customers.contact',{
      url:'/contact',
      views:{
        "customers":{
          // templateUrl:'templates/customers/contacts/new.html',
          templateUrl:'modules/customers/contacts/new.html',
          controller:'CustomersCtrl'
        }
      },
      data:{
          icon:"button icon button-clear ion-android-search",
          title:"Registro De Contacto"
        }
    })
  $urlRouterProvider.when('/customers/','/customers');
})
