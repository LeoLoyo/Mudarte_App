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
          templateUrl: 'templates/base/dash.html',
          controller:'Sidebarctrl'
        })
        .state('app.setting', {
          url: 'setting',
          views:{
            "maincontent":{
              templateUrl: 'templates/base/setting.html',
              controller:'SettingCtrl'

            }
          }
        })


      $urlRouterProvider.otherwise('/dashboard');
  });

})()
