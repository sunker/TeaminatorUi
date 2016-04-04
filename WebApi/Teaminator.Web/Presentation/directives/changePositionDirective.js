'use strict';

app.directive("changePosition", [function () {
    return {
        restrict: 'EA',
        scope: {
            x: '@',
            y: '@'
        },  
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                
            });
        },
        controller: ['$scope', 'missileService', 'placementService', function ($scope, missileService, placementService) {

            $scope.changeXPosition = function () {
                missileService.aimX($scope.x);
            };

            $scope.changeYPosition = function () {
                missileService.aimY($scope.y);
            };

            $scope.save = function() {
                placementService.updatePosition()
            };

        }],
        templateUrl: "/Presentation/views/changePositionTemplate.html"
    }
}])