'use strict';

app.controller("userListController", ["$scope", "userService", "$location", function ($scope, userService, $location) {
    
    userService.getUserList().then(function (response) {

        $scope.users = response;
    });

    $scope.displayUser = function(id) {
        var url = '/users/' + id;
        $location.path(url);
    };
}]);