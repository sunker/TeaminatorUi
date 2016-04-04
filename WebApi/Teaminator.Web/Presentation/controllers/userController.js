'use strict';

app.controller("userController", ["$scope", "userService", "placementService", "$routeParams", function ($scope, userService, placementService, $routeParams) {

    if ($routeParams.id) {
        userService.getUser($routeParams.id).then(function (response) {
            $scope.user = response;
        });

        placementService.getUserPosition($routeParams.id).then(function(response) {
            $scope.position = response;
        });

    } else {
        userService.getUserList().then(function (response) {
            $scope.user = response[0];

            placementService.getUserPosition(response[0].id).then(function (response) {
                $scope.position = response;
            });
        });
    }
}]);