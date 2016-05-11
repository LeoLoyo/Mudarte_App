(function() {
  var app = angular.module('services.quotations',[]);
  app.factory('Services_quotations', function($cordovaSQLite, DBA) {
    var self = this;

    self.all = function() {
      return DBA.query("SELECT * FROM vcotizacion")
        .then(function(result){
          return DBA.getAll(result);
        });
    }

    self.all_environments = function(memberId) {
        var parameters = [memberId];
      return DBA.query("SELECT * FROM vcotizacion_ambiente WHERE cotizacion_id = ?", parameters)
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
    };

    self.add = function(member) {
      var parameters = [member.id, member.name];
      return DBA.query("INSERT INTO team (id, name) VALUES (?,?)", parameters);
    };

    self.remove = function(table, id_web, attr) {
      var parameters = [id_web];
      return DBA.query("DELETE FROM " + table + " WHERE " + attr + " = (?)", parameters);
    };

    self.update = function(origMember, editMember) {
      var parameters = [editMember.id, editMember.name, origMember.id];
      return DBA.query("UPDATE team SET id = (?), name = (?) WHERE id = (?)", parameters);
    };

    return self;
});
})();
