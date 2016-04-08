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
                showMapUserModal: '='
            },
            link: function ($scope, element, attrs) {
            },
            controller: ['$scope', 'userService', 'placementService', '$location', function ($scope, userService, placementService, $location) {

                $scope.save = function () {
                    userService.createUser($scope.username).then(function (user) {
                        if (!user.Id) {
                            //Username taken
                        } else {
                            placementService.mapUserToPosition(user.Id, $scope.pos).then(function (response) {
                                if (response) {
                                    $scope.showMapUserModal = false;
                                    //$scope.$apply();
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