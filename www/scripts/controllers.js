var app = angular.module('app.controllers', ['CustomersCtrl','AddressCtrl','app.services']);
app.controller('cctrl',function($scope){
	'use strict';
	var mydefault = function arrayObjectIndexOf(array, term, attr) {
						for(var i = 0, len = array.length; i < len; i++) {
							if (array[i][attr] === term) return i;
						}
						return 0;
					};
                    function arrayObjectIndexOf(array, term, attr) {
                        for(var i = 0, len = array.length; i < len; i++) {
                            if (array[i][attr] === term) return i;
                        }
                        return 0;
                    };
});
