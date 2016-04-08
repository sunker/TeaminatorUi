'use strict';

app.controller("userController", ["$scope", "userService", "placementService", "$routeParams", "missileService", function ($scope, userService, placementService, $routeParams, missileService) {

    if ($routeParams.id) {
        userService.getUser($routeParams.id).then(function (response) {
            $scope.user = response;
            placementService.getUserPosition($routeParams.id).then(function(response) {
                $scope.position = response;
                missileService.aim($scope.position.X, $scope.position.Y);
            });
        });

    } else {
        userService.getUserList().then(function (response) {
            $scope.user = response[0];

            placementService.getUserPosition(response[0].id).then(function (response) {
                $scope.position = response;
                missileService.aim($scope.position.X, $scope.position.Y);
            });
        });
    }
}]);