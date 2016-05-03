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
        // $ionicLoading.show({template:"Loading..."});
      if(db==null){
        // copydb ();
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
        $ionicLoading.hide();
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
// })()
