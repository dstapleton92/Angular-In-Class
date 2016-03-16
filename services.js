var services = angular.module('myApp.services', []);
services.service('WordService', ['$http', function($http) {
    this.age = 23;
    this.sayHello = function(name) {
        console.log('Hello ' + name + '! From a service!');
    }
}]);