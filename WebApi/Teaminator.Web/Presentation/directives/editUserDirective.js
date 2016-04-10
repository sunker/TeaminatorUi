'use strict';

app.directive("editUser", [function () {
    return {
        restrict: 'EA',
        scope: {
            parentusername: '=',
            userid: '@',
            pos: '@',
            parentx: '=',
            parenty: '='
        },
        link: function ($scope, element, attrs) {
            element.bind("click", function () {
            });
        },
        controller: ['$scope', 'missileService', 'placementService', 'userService', function ($scope, missileService, placementService, userService) {
            $scope.showMapUserModal = false;

            $scope.toggleShow = function () {
                $scope.x = $scope.parentx;
                $scope.y = $scope.parenty;
                $scope.username = $scope.parentusername;
                $scope.showChangePosition = !$scope.showChangePosition;
            };

            $scope.changeXPosition = function () {
                $scope.x = $scope.x.toString().replace(/[^\d]/g, '');
                if ($scope.x === "") $scope.x = 0;
                missileService.aimX($scope.x);
            };

            $scope.changeYPosition = function () {
                $scope.y = $scope.y.toString().replace(/[^\d]/g, '');
                if($scope.y === "") $scope.y = 0;
                missileService.aimY($scope.y);
            };
            
            $scope.fire = function () {
                missileService.fire();
            };

            $scope.usernameCheck = function () {
                userService.usernameExist($scope.username).then(function (response) {
                    if (!!response.data === true) {
                        $scope.changePositionForm.$setValidity("usernametaken", false);
                    } else {
                        $scope.changePositionForm   .$setValidity("usernametaken", true);
                    }
                });
            };

            $scope.save = function() {
                placementService.updatePosition($scope.pos, $scope.x, $scope.y).then(function () {

                    userService.updateUsername($scope.userid, $scope.username).then(function () {
                        $scope.showChangePosition = false;
                        $scope.parentx = $scope.x;
                        $scope.parenty = $scope.y;
                        $scope.parentusername = $scope.username;
                    });
                });
                
            };

            $scope.mapUser = function () {
                $scope.showMapUserModal = !$scope.showMapUserModal;
            };
        }],
        templateUrl: "/Presentation/views/editUserTemplate.html"
    }
}])