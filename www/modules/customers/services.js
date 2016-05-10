(function(){
    'use strict';
    var app = angular.module('services.customers', []);
    app.factory('Service_Customers', function($cordovaSQLite, DBA){
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
    app.factory('Service_Contacts', function($cordovaSQLite, DBA){
      var self = this;

      // self.all = function(table) {
      //   return DBA.query('SELECT * FROM '+ table).then(function(result) {
      //     return DBA.getAll(result);
      //   });
      // };
      // self.get = function(Id) {
      //   var parameters = [Id];
      //   return DBA.query('SELECT * FROM table WHERE id_web = (?)', parameter).then(function(result) {
      //     return DBA.getById(result);
      //   });
      // };


      self.add = function(member) {
        // var parameters = [member.dni, member.nombre, member.cliente_id];
        var parameters = [member.dni, member.nombre, member.cliente_id, member.sexo_id, member.estado_civil_id, member.fecha_nacimiento,member.tipo_de_relacion_id, member.observaciones];
        // var parameters = [ 'V-138421', 'Jaimito', 10, 2, 1,'14-03-1991', 1,'miobs'];
        return DBA.query("INSERT INTO cliente_contacto (dni, nombre, cliente_id, sexo_id, estado_civil_id, fecha_nacimiento,tipo_de_relacion_id, observaciones) VALUES (?,?,?,?,?,?,?,?)", parameters);
      }

      // self.update = function(object) {
      //   var parameters = [object];
      //   return DBA.query('UPDATE table SET campo = (?) WHERE id_web = (?)', parameter);
      // };

      // self.remove = function(Id) {
      //   var parameters = [Id];
      //   return DBA.query('DELETE FROM table WHERE id_web = (?)', parameter);
      // };

      return self;

    });


})();
