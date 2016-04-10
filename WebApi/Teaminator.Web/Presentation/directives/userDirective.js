'use strict';

app.directive("user", [function () {
    return {
        restrict: 'A',
        scope: {
            user: '=data',
            deleteUser: '&'
        },
        controller: ['$scope', '$location', 'placementService', 'userService', 'missileService',
            function ($scope, $location, placementService, userService, missileService) {

            $scope.gravatarUrl = "http://bootdey.com/img/Content/user_" + $scope.user.Id + ".jpg";

            userService.getUser($scope.user.Id).then(function (response) {
                $scope.user = response;
                if ($scope.user.team === undefined) {
                    $scope.user.team = "SellPriceTool"; //TODO: REmove this
                }
                placementService.getUserPosition($scope.user.Id).then(function (response) {
                    $scope.position = response;
                    missileService.aim($scope.position.X, $scope.position.Y);
                });
            });

            $scope.delete = function() {
                $scope.deleteUser({ id: $scope.user.Id });
            };

            $scope.fire = function () {
                missileService.attack($scope.user.Username);
            };

            $scope.aim = function () {
                missileService.aim($scope.position.X,$scope.position.Y);
            };

            $scope.displayUser = function (id) {
                var url = '/users/' + id;
                $location.path(url);
            };
        }],
        templateUrl: "/Presentation/views/userTemplate.html"
    }
}])