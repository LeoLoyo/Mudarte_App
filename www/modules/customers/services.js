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
        return DBA.query("SELECT * FROM vcliente WHERE id_web = ?", [Id])
          .then(function(result) {
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

      self.all = function(table, Id, attr) {
        var query = "SELECT * FROM "+ table +" WHERE " + attr + " = (?)";
        var parameters = [Id];
        if(Id == undefined && attr == undefined){
          query = "SELECT * FROM "+ table;
          parameters = [];
        };
        console.log(query);
        return DBA.query(query, parameters).then(function (result) {
          return DBA.getAll(result);
        });
      }
      // self.all_other = function(table,Id) {
      //   var query = "SELECT * FROM "+ table;
      //   return DBA.query(query, [Id]).then(function (result) {
      //     return DBA.getAll(result);
      //   });
      // }
      // self.get = function(Id) {
      //   var parameters = [Id];
      //   return DBA.query('SELECT * FROM table WHERE id_web = (?)', parameter).then(function(result) {
      //     return DBA.getById(result);
      //   });
      // };


      self.add = function(member) {
        var parameters = [member.dni, member.nombre, member.cliente_id, member.sexo_id, member.estado_civil_id, member.fecha_nacimiento,member.tipo_de_relacion_id, member.observaciones];
        return DBA.query("INSERT INTO cliente_contacto (dni, nombre, cliente_id, sexo_id, estado_civil_id, fecha_nacimiento,tipo_de_relacion_id, observaciones) VALUES (?,?,?,?,?,?,?,?)", parameters);
      }

      // self.update = function(object) {
      //   var parameters = [object];
      //   return DBA.query('UPDATE table SET campo = (?) WHERE id_web = (?)', parameter);
      // };

      self.remove = function(table, id_web, attr) {
        var parameters = [id_web];
        return DBA.query("DELETE FROM " + table + " WHERE " + attr + " = (?)", parameters);
      }

      return self;

    });


})();
