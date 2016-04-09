'use strict';

app.directive("mapAdditionalUser", [
    function() {
        return {
            templateUrl: "/Presentation/views/mapAdditionalUserTemplate.html",
            restrict: 'E',
            scope: {
                x: '@',
                y: '@',
                pos: '@',
                show: '='
            },
            link: function ($scope, element, attrs) {
            },
            controller: ['$scope', 'userService', 'placementService', '$location', function ($scope, userService, placementService, $location) {

                $scope.usernameCheck = function () {
                    userService.usernameExist($scope.username).then(function (response) {
                        if (!!response.data === true) {
                            $scope.mapUserNameForm.$setValidity("usernametaken", false);
                        } else {
                            $scope.mapUserNameForm.$setValidity("usernametaken", true);
                        }
                    });
                };

                $scope.save = function () {
                    userService.createUser($scope.username).then(function (user) {
                        if (!user.Id) {
                            $scope.mapUserNameForm.$setValidity("usernametaken", false);
                        } else {
                            placementService.mapUserToPosition(user.Id, $scope.pos).then(function (response) {
                                if (response) {
                                    $scope.show= false;
                                    var url = '/users/' + user.Id;
                                    $location.path(url);
                                }
                            });
                        }
                    });
                }
            }]
        }
    }
]);