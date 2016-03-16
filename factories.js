var factories = angular.module('myApp.factories', []);
factories.factory('WordFactory', ['$http', function($http) {
    var f = {};
    f.age = 23;
    
    f.sayHello = function() {
        console.log('Hello World!');
    }
    
    return f;
}]);

factories.factory('NoteFactory', ['$resource', function($resource) {
    return $resource('/messages/:id');
}]);