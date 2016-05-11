(function() {

  var app = angular.module('module.environments',[]);

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app.furnitures-new', {
        url:'furnitures/:environmentId/new',
        views:{
          'maincontent':{
            templateUrl:'modules/move/templates/new.html',
            controller:'FurnituresCtrl'
          }
        }
      })
  });

  app.controller('FurnituresCtrl', ['$scope', function($scope){
    $scope.perro = "PERRO A CAGAR";
  }]);

  app.factory('Services_Environments', function($cordovaSQLite, DBA) {
    var self = this;

    self.all = function(Id) {
      return DBA.query("SELECT * FROM vcotizacion_ambiente WHERE cotizacion_id = ?", [Id])
      .then(function(result){
        return DBA.getAll(result);
      });
    };


    self.get = function(memberId) {
      var parameters = [memberId];
      return DBA.query("SELECT * FROM cotizacion_cotizacion WHERE id_web = ?", parameters)
        .then(function(result) {
          return DBA.getById(result);
        });
    }
    // self.get_customer = function(memberId) {
    //   var parameters = [memberId];
    //   return DBA.query("SELECT * FROM vcliente WHERE id_web = ?", parameters)
    //     .then(function(result) {
    //       return DBA.getById(result);
    //     });
    // }

    self.add = function(member) {
      var parameters = [member.id, member.name];
      return DBA.query("INSERT INTO team (id, name) VALUES (?,?)", parameters);
    }

    self.remove = function(table, id_web, attr) {
      return DBA.query("DELETE FROM " + table + " WHERE " + attr + " = (?)", [id_web]);
    }

    self.update = function(origMember, editMember) {
      var parameters = [editMember.id, editMember.name, origMember.id];
      return DBA.query("UPDATE team SET id = (?), name = (?) WHERE id = (?)", parameters);
    }

    return self;
  });

  app.factory('Services_furnitures', function($cordovaSQLite, DBA) {

    var self = this;

    self.all = function(table, Id, attr) {
      return DBA.query("SELECT * FROM " + table + " WHERE " + attr + " = (?)", [Id])
      .then(function(result){
        return DBA.getAll(result);
      });
    };

    self.get = function() {
      return DBA.query(query,parameters);
    };

    self.add = function() {
      return DBA.query(query,parameters);
    };

    self.remove = function(table, Id, attr) {
      return DBA.query("DELETE FROM " + table + " WHERE " + attr + " = (?)", [Id]);
    };

    self.update = function() {
      return DBA.query(query,parameters);
    };
    return self;
  });

})();
