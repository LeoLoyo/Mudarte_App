var app = angular.module('starter', ['ionic','ngCordova','ngMaterial', 'app.services', 'app.controllers', 'app.router','app.directives', 'ionic-material','ionicRipple']);
var db =null;
app.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      window.plugins.sqlDB.copy("mudartedb.sqlite", 0,function(){
        db = window.sqlitePlugin.openDatabase({name: "mudartedb.sqlite", androidLockWorkaround: 1,createFromLocation: 1}, function(){
          alert("ya la abri");
        },function(err){
          alert("no se pudo abrir");
        });
      },function(err){
      db = window.sqlitePlugin.openDatabase({name: "mudartedb.sqlite", androidLockWorkaround: 1, createFromLocation: 1}, function(){
          alert("ya la abri sin copiar");
        },function(err){
          alert("no se pudo abrir sin copiar");
        });
      });
    }
  });
});

// var app = angular.module('starter', ['ionic','ngCordova','ngMaterial', 'app.services', 'app.controllers', 'app.router','app.directives', 'ionic-material','ionicRipple']);
// var db = null;
// app.run(function($ionicPlatform, $ionicLoading) {
//   'use strict';
//   $ionicPlatform.ready(function() {
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//       $ionicLoading.show({template:"Loading..."});
//       window.plugins.sqlDB.copy("mudartedb.sqlite", 0, function(){
//         db = window.sqlitePlugin.openDatabase({name: "mudartedb.sqlite", androidLockWorkaround: 1,createFromLocation: 1}, function(){
//           $ionicLoading.hide();
//           alert("Copiada y abierta");
//         },function(err){
//           $ionicLoading.hide();
//           alert("Copiada pero no puedo abrirla");
//         });
//       }, function(err){
//         db = window.sqlitePlugin.openDatabase({name: "mudartedb.sqlite", androidLockWorkaround: 1, createFromLocation: 1}, function(){
//           $ionicLoading.hide();
//           alert("db existing open");
//           },function(err){
//           $ionicLoading.hide();
//           alert("unable to open the db");
//           });
//       });
//     }
//   });
// });

