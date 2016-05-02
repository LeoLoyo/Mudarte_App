angular.module('app.controllers')
.controller('UserCtrl',['$scope','$state', '$cordovaToast',function($scope,$state,$cordovaToast){
    'use strict';
    $scope.user={};
    $scope.login = function(user){
        if(user.name == 'admin' && user.pass == '1234'){
            //$cordovaToas.show('Here is a message', 'long', 'center');
            $state.go('dash.dashboard');
        }else{
            alert('datos invalidos');
        }
    }
    $scope.forgot_password = function(user){
        alert('tu password es  1234');
    }
}]);
