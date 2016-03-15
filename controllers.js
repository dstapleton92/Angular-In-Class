var controllers = angular.module('myApp.controllers', []);
controllers.controller('HomePageController', ['$scope', function($scope) {
    $scope.welcomeMessage = 'Hello World!';
    $scope.weather = "It's sunny and 85 degrees outside!";
}]);

controllers.controller('InstructorPageController', ['$scope', function($scope) {
    $scope.instructors = [
        {
            name: 'David',
            email: 'someEmail@depotu.io',
            hobbies: 'Programming'
        },
        {
            name: 'Tyler',
            email: 'anotherEmail@depotu.io',
            hobbies: 'Reading'
        },
        {
            name: 'Hillary',
            email: 'email@depotu.io',
            hobbies: 'Hiking'
        }
    ]
}])