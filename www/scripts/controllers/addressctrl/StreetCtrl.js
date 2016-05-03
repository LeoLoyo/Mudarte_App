
angular.module('app.controllers')
    .controller('StreetCtrl', function ($scope, $ionicModal, $timeout, collectiondb){
        'use strict';
        //Cargar Calles
        var streets = "SELECT * FROM direccion_calle";
        $scope.streets = collectiondb.all(streets);
        cleanfields();
        //find a street
        var sql_street = "SELECT * FROM direccion_calle WHERE id = ?";
        //delete a street
        var del_street = "DELETE FROM direccion_calle WHERE id=?";
        //update a street
        // var up_street = "UPDATE direccion_calle set pais_id:?, provincia_id:?, ciudad_id:?, barrio_id:?, calle:? WHERE id=?";
        var up_street = "UPDATE direccion_calle set pais_id=?, provincia_id=?, ciudad_id=?, barrio_id=?, calle=? WHERE id=";
        // SQL De Combos
        var countrys = "SELECT * FROM direccion_pais";
        var provinces = "SELECT * FROM direccion_provincia WHERE pais_id = ?";
        var cities = "SELECT * FROM direccion_ciudad WHERE (provincia_id = ?)";
        var neighborhoods = "SELECT * FROM direccion_barrio WHERE (ciudad_id = ?)";

        //Insert New calle
        var insert_street = "INSERT INTO direccion_calle (pais_id,provincia_id,ciudad_id,barrio_id,calle)VALUES (?,?,?,?,?)";

      //Select
      $scope.update_provinces = function (param){
        $scope.provinces = collectiondb.all(provinces,param);
        $scope.country.id=param;
        $scope.cities = [];
      }

      $scope.update_cities = function (param){
        $scope.cities = collectiondb.all(cities,param);
        $scope.province.id=param;
        $scope.neighborhoods=[];
      }

      $scope.update_neighborhoods = function (param){
       alert('El id de la ciudad es : '+param);
       $scope.neighborhoods = collectiondb.all(neighborhoods,param);
       $scope.city.id=param;
      }
      $scope.update_neighborhood = function (param){
        alert('El id del barrio es : '+param);
        $scope.neighborhood.id=param;

      }

      $ionicModal.fromTemplateUrl('templates/address/streets/edit.html',{
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        $scope.modal = modal;
      });

        $scope.openModal = function (estado) {
            if(estado == 1){
                cleanfields();
                cleanarray();
            }
            else{
                cleanarray();
            }
            $scope.modal.show();

        }

      $scope.closeModal = function () {
        cleanfields();
        cleanarray();
        $scope.modal.hide();
      }

      $scope.save = function (){
        if($scope.street.calle!=undefined){
            // var data =[$scope.country.id, $scope.province.id, $scope.city.id, $scope.neighborhood.id, $scope.street.calle];
            // alert(data);
            if($scope.street.id==undefined){
                var data =[$scope.country.id, $scope.province.id, $scope.city.id, $scope.neighborhood.id, $scope.street.calle];
                collectiondb.create(insert_street,data);
            }else{
                var data =[$scope.country.id, $scope.province.id, $scope.city.id, $scope.neighborhood.id, $scope.street.calle];
                collectiondb.update(up_street, data, $scope.street.id );
            }
          // collectiondb.create(data, insert_street);
            $scope.closeModal();
            $scope.streets = collectiondb.all(streets);
        }else{
            alert("Calle vacia");
        }
      }
      $scope.find = function (param){
        $scope.street = collectiondb.find(param,sql_street);
      }

      $scope.update = function (street){

        $scope.openModal(0);
        alert("id calle:"+street.id+"Calle:"+street.calle+"- pais_id:"+street.pais_id+"- provincia_id:"+street.provincia_id+"- ciudad_id:"+street.ciudad_id+"- barrio_id:"+street.barrio_id);
        $scope.country.id = street.pais_id;
        $scope.province.id = street.provincia_id;
        $scope.city.id = street.ciudad_id;
        $scope.neighborhood.id = street.barrio_id;
        $scope.street.calle = street.calle;
        $scope.street.id=street.id;
      }

      $scope.delete = function (street){
        collectiondb.delete(del_street,street.id);
        $scope.streets = collectiondb.all(streets);
      };

      function cleanfields(){
      $scope.country = {};
      $scope.province = {};
      $scope.city = {};
      $scope.neighborhood = {};
      $scope.street = {};
      }

      function cleanarray(){
          $scope.countrys=collectiondb.all(countrys);
          $scope.provinces=[];
          $scope.cities=[];
          $scope.neighborhoods=[];
      }
      // function pais_default(){
      //   $scope.country = $scope.countrys[13];
      //   // alert(mydefault($scope.countrys,"Argentina (AR)","pais"));
      // }
      // var mydefault = function arrayObjectIndexOf(array, term, attr) {
      //       for(var i = 0, len = array.length; i < len; i++) {
      //         if (array[i][attr] === term) return i;
      //       }
      //       return 0;
      //     };
    });
