(function() {

  var app = angular.module('module.environments',[]);

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

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app.furniture-new', {
        url:'furnitures/:environmentId/new',
        views:{
          'maincontent':{
            templateUrl:'modules/move/templates/new.html',
            controller:'FurnituresCtrl'
          }
        }
      })
  });

  app.controller('FurnituresCtrl', ['$scope', 'Services_furnitures', '$state','$stateParams', '$ionicPopover', function($scope, Services_furnitures, $state, $stateParams,$ionicPopover){
      $scope.furnitures = null;
      Services_furnitures.all('vtimueble_ambiente_inmueble',  Number($stateParams.environmentId),'ambiente_id')
        .then(function(furnitures) {
          $scope.furnitures = furnitures;
        })
        .catch(function(e) {
          console.log(e);
          alert("Ocurrio un error");
        });

    // $scope.furnitures = [
    //   {id_web:"1", especificacion_de_mueble:"Cocina", alto:"20", ancho:"30", largo:"40", trasladable:1},
    //   {id_web:"2", especificacion_de_mueble:"Nevera", alto:"20", ancho:"30", largo:"40", trasladable:1},
    //   {id_web:"3", especificacion_de_mueble:"Ratona", alto:"20", ancho:"30", largo:"40", trasladable:1},
    //   {id_web:"4", especificacion_de_mueble:"Cama", alto:"20", ancho:"30", largo:"40", trasladable:1},
    //   {id_web:"5", especificacion_de_mueble:"Tv", alto:"20", ancho:"30", largo:"40", trasladable:1}
    // ];

    $scope.furnitures_temp = [];

    $scope.add = function(f){
      setTimeout(function () {
       $scope.$apply(function () {
         if($scope.furnitures_temp.indexOf(f) === -1){
          $scope.furniture_temp = angular.copy(f);
          $scope.furnitures_temp.push($scope.furniture_temp);
         }else{
           $scope.furnitures_temp.splice($scope.furnitures_temp.indexOf(f),1);
         };

       });
     });
    };

    $scope.next = function() {
      if(($scope.furnitures_temp.indexOf($scope.furniture_temp)+1)!= $scope.furnitures_temp.length){
        $scope.furniture_temp = $scope.furnitures_temp[$scope.furnitures_temp.indexOf($scope.furniture_temp)+1];
      };
    };

    $scope.preview = function() {
      if(($scope.furnitures_temp.indexOf($scope.furniture_temp)-1 )!= -1){
        $scope.furniture_temp = $scope.furnitures_temp[$scope.furnitures_temp.indexOf($scope.furniture_temp)-1];
      }


    };

  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  }]);

  app.factory('Services_furnitures', function($cordovaSQLite, DBA) {

    var self = this;

    self.all = function(table, Id, attr) {
      var query = "SELECT * FROM " + table + " WHERE " + attr + " = (?)";
      return DBA.query(query, [Id])
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
// select "Propuesto", ancho,largo,alto,especificacion_mueble_id,especificacion_de_mueble from vtimueble_ambiente_inmueble  where ambiente_id =1 union select "Todos", ancho,largo,alto,id_web as especificacion_mueble_id, especificacion_de_mueble from mueble_especificaciondemueble where especificacion_de_mueble not in (select especificacion_de_mueble from vtimueble_ambiente_inmueble where ambiente_id =1)

// CREATE TABLE "mueble_mueble" (
// "id"  INTEGER NOT NULL,
// "mueble"  TEXT,
// "descripcion"  TEXT,
// "tipo_de_mueble_id"  INTEGER,
// "transladable"  INTEGER, "id_web" Integer,
// PRIMARY KEY ("id" ASC),
// FOREIGN KEY ("tipo_de_mueble_id") REFERENCES "mueble_mueble" ("id")
// )
//
//
// select "Propuesto",trasladable, ancho,largo,alto,especificacion_mueble_id,especificacion_de_mueble from vtimueble_ambiente_inmueble  where ambiente_id =1 union select "Todos",trasladable, ancho,largo,alto,id_web as especificacion_mueble_id, especificacion_de_mueble from mueble_especificaciondemueble where especificacion_de_mueble not in (select especificacion_de_mueble from vtimueble_ambiente_inmueble where ambiente_id =1)
//
//  CREATE VIEW "vmueble" as select es.id_web as especificacion_mueble_id,* from mueble_mueble as mu,mueble_especificaciondemueble as es, mueble_tipodemueble as ti WHERE mu.tipo_de_mueble_id = ti.id_web and mu.id_web = es.mueble_id
//
//  select "Propuesto", ambiente_id,trasladable, ancho,largo,alto,especificacion_mueble_id,especificacion_de_mueble
//  from vtimueble_ambiente_inmueble  where ambiente_id =1
//  union
//  select "Todos",ambiente_id,trasladable, ancho,largo,alto,id_web as especificacion_mueble_id, especificacion_de_mueble
//  from vmueble where ambiente_id = 1 and
//  especificacion_de_mueble
//  not in (select especificacion_de_mueble from vtimueble_ambiente_inmueble where ambiente_id =1)
