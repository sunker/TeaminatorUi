'use strict';

app.directive("user", [function () {
    return {
        restrict: 'A',
        scope: {
            user: '=data',
            deleteUser: '&'
        },
        controller: ['$scope', '$location', 'placementService', 'userService', function ($scope, $location, placementService, userService) {

            $scope.gravatarUrl = "http://bootdey.com/img/Content/user_" + $scope.user.Id + ".jpg";

            userService.getUser($scope.user.Id).then(function (response) {
                $scope.user = response;
                placementService.getUserPosition($scope.user.Id).then(function (response) {
                    $scope.position = response;
                    //missileService.aim($scope.position.X, $scope.position.Y);
                });
            });

            $scope.delete = function() {
                $scope.deleteUser({ id: $scope.user.Id });
            };

            $scope.displayUser = function (id) {
                var url = '/users/' + id;
                $location.path(url);
            };
        }],
        templateUrl: "/Presentation/views/userTemplate.html"
    }
}])