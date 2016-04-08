﻿'use strict';

app.directive("editUser", [function () {
    return {
        restrict: 'EA',
        scope: {
            username: '@',
            x: '@',
            y: '@',
            pos: '@'
        },
        link: function ($scope, element, attrs) {
            element.bind("click", function () {
            });
        },
        controller: ['$scope', 'missileService', 'placementService', function ($scope, missileService, placementService) {
            $scope.showChangePosition = true;
            $scope.showMapUserModal = false;

            $scope.changeXPosition = function () {
                $scope.x = $scope.x.replace(/[^\d]/g, '');
                missileService.aimX($scope.x);
            };

            $scope.changeYPosition = function () {
                $scope.y = $scope.y.replace(/[^\d]/g, '');
                missileService.aimY($scope.y);
            };

            $scope.toggleShow = function () {
                $scope.showChangePosition = !$scope.showChangePosition;
            };

            $scope.save = function() {
                placementService.updatePosition($scope.pos, $scope.X, $scope.Y);
            };

            $scope.mapUser = function () {
                $scope.showMapUserModal = !$scope.showMapUserModal;
            };
        }],
        templateUrl: "/Presentation/views/editUserTemplate.html"
    }
}])