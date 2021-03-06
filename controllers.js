var controllers = angular.module('myApp.controllers', []);
controllers.controller('HomePageController', ['$scope', '$http', 'WordFactory', 'WordService', 'NoteFactory', function($scope, $http, WordFactory, WordService, NoteFactory) {
    $scope.welcomeMessage = 'Hello World!';
    $scope.weather = "It's sunny and 85 degrees outside!";
    var myFriendsList = ['Tyler', 'Hillary', 'Haley', 'Matt', 'Emily', 'Claire', 'Morgan', 'Will', 'Tayo', 'Suzanne'];
    var friendIndex = 0;
    console.log(myFriendsList);
    $scope.friends = [];
    
    $scope.pluckFirstLetter = function() {
        $scope.weather = $scope.weather.substring(1);
        logValue($scope.weather);
    }
    
    $scope.getGoogle = function() {
        $http({
            url: 'http://depotu.io',
            method: 'GET'
        }).then(function(success) {
            console.log(success);
        }, function(error) {
            console.error(error);
        });
    }
    
    $scope.sayHelloToEveryone = function() {
        WordFactory.sayHello();
        WordService.sayHello($scope.name);
    }
    
    $scope.getNote = function() {
        var someNumber = $scope.noteid;
        NoteFactory.get({id: someNumber});
    }
    
    $scope.getAllTweets = function() {
        NoteFactory.query().then(function(tweets) {
            $scope.tweets = tweets;
        }, console.error);
    }
    
    $scope.addFriend = function() {
        if (friendIndex < myFriendsList.length) {
            var friendToAdd = myFriendsList[friendIndex];
            $scope.friends.push(friendToAdd);
            console.log('My Friend list is now:');
            console.log(myFriendsList);
            friendIndex++;
        } else {
            alert("That's all my friends!");
        }
    }
    
    function logValue(val) {
        console.log(val);
    }
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
}]);

controllers.controller('InstructorDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {
    var instructorid = $routeParams.id;
    var instructors = [
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
    ];
    
    $scope.instructor = instructors[instructorid];
}]);