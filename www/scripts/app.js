 // (function(){
  var app = angular.module('starter', ['ionic','ngCordova','ngMaterial', 'app.services', 'app.controllers', 'app.router','app.directives', 'ionic-material','ionicRipple']);
  var db = null;
  app.run(function($ionicPlatform, $ionicLoading) {
    $ionicPlatform.ready(function(){
    // if (window.cordova && window.cordova.plugins.Keyboard) {
    //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    //   cordova.plugins.Keyboard.disableScroll(true);
    // }
    // if (window.StatusBar) {
      // StatusBar.styleDefault();
        // }
        $ionicLoading.show({template:"Loading..."});
      if(db==null){
        copydb();
        $ionicLoading.hide();
      }
      function copydb(){
        window.plugins.sqlDB.copy("mudartedb.sqlite", 0, copysuccess,copyerror);
      }

      function copysuccess(){
       db = window.sqlitePlugin.openDatabase({ name: 'mudartedb.sqlite',androidLockWorkaround: 1, location: 'default' }, opensuccess, openerror);
      }
      function copyerror(){
       db = window.sqlitePlugin.openDatabase({ name: 'mudartedb.sqlite',androidLockWorkaround: 1, location: 'default' }, opensuccess, openerror);
      }
      function opensuccess(){
        alert('DB Working...')
      }
      function openerror(){
        alert('!!!Error DB  not Working!!!')
      }
    });//platform ready
});//run
    app.constant("cotizador", {
            "id": 1,
            "nombre":"Leonardo Antonio Loyo"
        });
    app.constant('host', {
      "url":"modules"
    });
    app.controller('SettingCtrl', function($scope,Service_Customers, Services_quotations,cotizador){
      $scope.sync_db = function() {
        Service_Customers.customer_sync()
        Services_quotations.quotations_sync(cotizador);
      }

    });
    angular.module('ionicApp', ['ionic'])

app.controller('Sidebarctrl', function($scope) {
$scope.toggleGroup = function(n) {
    if ($scope.isGroupShown(n)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = n;
    }
  };
  $scope.isGroupShown = function(n) {
    return $scope.shownGroup === n;
  };

});
// })()
