(function(){
 var app = angular.module('CustomersCtrl',[]);
  app.controller('CustomersCtrl',function($scope,$http , $state, $ionicPopup, $timeout, collectiondb, Service_sexo, Service_Customers, Service_typeofrelationship){
    'use strict';
    $scope.customers = Service_Customers.get();


      if(Service_Customers.load_db()){
        $scope.customers = Service_Customers.get();
      }



   // $scope.update = function(){

   //  $http.get('modules/customers/clientes.json').then(function success(data){
   //      $scope.customers = Service_Customers.load(data.data);
   //      // $scope.customers = collectiondb.load();
   //    }, function erros(e){
   //      console.log('no hubo conexion'+ e);
   //    });
   //  }
   //  if(Service_Customers.count()<=0){
   //    $scope.update();
   //    console.log('guarde del json');
   //  }else{
   //    $scope.customers = Service_Customers.get();
   //    console.log('ya hay guardados');
   //  }





    // $scope.mytitle = $state.current.data.title;


    // $scope.customers = Service_Customers.get();

    // $scope.sexos = Service_sexo;


    // $scope.tiporelaciones = Service_typeofrelationship;


    // Methods
    $scope.new = function(){
      // collectiondb.insertm();
      $state.go('dash.customers.new');
    }

    $scope.CustomerPopup = function(model){
      if(model.id == undefined){
        console.log(model.id);
        if(model.nombre != undefined && model.tipo_de_cliente_id != undefined ){
          var myPopup = $ionicPopup.show({
          title: 'Desea Continuar con el cliente?',
          subTitle: "<p>"+model.nombre+"</p>",
          scope: $scope,
          buttons: [{
                     text: 'Cancelar'
                    },
                    {
                     text: 'Guardar',
                     type: 'button-positive',
                     onTap:function(){
                      if(model.tipocliente == 1){
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('dash.customers.contact');
                        console.log('aqui');
                      }else{
                        console.log('o aqui');
                        $scope.customer = Service_Customers.new(model);
                        $scope.customers = Service_Customers.get();
                        $state.go('dash.customers.list');
                      }
                     }
                    }]
            });
        }else{
          alert('Faltan Campos');
        }
      }else{
        console.log('actualizare al cliente '+ model.nombre);
        Service_Customers.update(model);
        $state.go('dash.customers.list');
      }


    }
    $scope.ContactPopup = function(model){
   if(model.nombre != undefined && model.dni != undefined ){
    var myPopup = $ionicPopup.show({
        title: 'Nuevo Registro',
        subTitle: "<p>" + model.nombre + "?</p>",
        scope: $scope,
        buttons: [{
                   text: 'Cancelar'
                  },
                  {
                   text: 'Guardar',
                   type: 'button-energized',
                   onTap:function(){
                    console.log("Registro de Contacto me voy a lista");
                    $state.go('dash.customers.list');
                   }
                  }]
      });

   }

    }
  });
  app.controller('CustomersDetailCtrl',function($scope, $stateParams, Service_Customers){
    'use strict';
    var customers = Service_Customers.findOne($stateParams.id);
    alert(customers.tipo_de_cliente_id);
    $scope.customer = customers;
   });
})()
