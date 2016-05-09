(function(){
    'use strict';
    var app = angular.module('services.address', []);
    app.factory('Services_Address', function($cordovaSQLite, DBA){
      var self = this;

      self.all = function(table) {
        return DBA.query('SELECT * FROM '+ table).then(function(result) {
          return DBA.getAll(result);
        });
      };
      self.get = function(Id) {
        var parameters = [Id];
        return DBA.query('SELECT * FROM table WHERE id_web = (?)', parameter).then(function(result) {
          return DBA.getById(result);
        });
      };

      self.add = function(object) {
        var parameters = [object];
        return DBA.query('INSERT INTO table () VALUES (?, ?, ?, ?, ?)', parameter);
      };

      self.update = function(object) {
        var parameters = [object];
        return DBA.query('UPDATE table SET campo = (?) WHERE id_web = (?)', parameter);
      };

      self.remove = function(Id) {
        var parameters = [Id];
        return DBA.query('DELETE FROM table WHERE id_web = (?)', parameter);
      };

      return self;

    });

})()
