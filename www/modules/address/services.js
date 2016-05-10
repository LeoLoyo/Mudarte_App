(function(){
    'use strict';
    var app = angular.module('services.address', []);
    app.factory('Services_Addresses', function($cordovaSQLite, DBA){
      var self = this;

      self.all = function(Id) {

        var query = "SELECT * FROM vcotizacion_direccion WHERE cotizacion_id = ?";

        if( Id == undefined ){ query = "SELECT * FROM vcotizacion_direccion"; };

        return DBA.query(query, [Id]).then(function(result){ return DBA.getAll(result);});

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
        return DBA.query('DELETE FROM table WHERE id_web = (?)', [Id]);
      };

      return self;

    });

})()
