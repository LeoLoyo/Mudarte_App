angular.module('app.directives',[])
    .directive('myTitle', function($state){
        return {
            restrict: 'E',
            scope:{
                title:'='
            },
            template:"{{$state.current.datatitle}}",
            controller: function($scope){
                return "title";
            }
        };
    })
