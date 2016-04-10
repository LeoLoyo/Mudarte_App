angular.module('app.directives',[])
    .directive('myTitle', function(){
        return {
            restrict: 'E',
            scope:{
                title:'='
            },
            template:"{{title}}",
            controller: function($scope){
                console.log('funcioanndo');
            }
        };
    })
