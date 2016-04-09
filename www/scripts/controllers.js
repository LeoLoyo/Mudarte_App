var app = angular.module('app.controllers', ['CustomersCtrl','app.services']);
app.controller('cctrl',function($scope){
	'use strict';
	var mydefault = function arrayObjectIndexOf(array, term, attr) {
						for(var i = 0, len = array.length; i < len; i++) {
							if (array[i][attr] === term) return i;
						}
						return 0;
					};
	'use strict';
					$scope.numbers = [{id:12,nombre:'prueba'},{id:4,nombre:'Leonardo Loyo'},{id:5,nombre:'Antonio Loyo'}];
					$scope.mynum = $scope.numbers[mydefault($scope.numbers, "Leonardo Loyo", "nombre")];

});
app.controller('CountryCtrl', ['$scope', 'collectiondb', function($scope, collectiondb){
	'use strict';
	var query = "SELECT * FROM direccion_pais";
	$scope.countrys = collectiondb.all(query);
}]);

app.controller('ProvinceCtrl', ['$scope', 'collectiondb', function($scope, collectiondb){
	'use strict';
	var query = "SELECT pr.provincia as provincia,p.pais as pais FROM direccion_pais as p,direccion_provincia as pr WHERE p.id = pr.pais_id";
	$scope.provinces = collectiondb.all(query);
}]);

app.controller('CityCtrl', ['$scope', 'collectiondb', function($scope, collectiondb){
	'use strict';
	var query ="SELECT pr.provincia as provincia,c.ciudad as ciudad FROM direccion_ciudad as c,direccion_provincia as pr WHERE c.provincia_id = pr.id";
	$scope.cities= collectiondb.all(query);
}]);

app.controller('NeighborhoodCtrl', ['$scope', 'collectiondb', function($scope, collectiondb){
	'use strict';
		var query = "SELECT b.barrio, c.ciudad, p.pais,pr.provincia FROM direccion_provincia as pr, direccion_pais as p,direccion_barrio as b,direccion_ciudad as c WHERE (c.id=b.ciudad_id)AND (b.pais_id=p.id)AND(pr.id=b.provincia_id)";
		$scope.neighborhoods = collectiondb.all(query);
}]);

