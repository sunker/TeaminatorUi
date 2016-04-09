
app.controller("createUserController", ['$scope', 'missileService', 'placementService', 'userService', '$location',
function ($scope, missileService, placementService, userService, $location) {
    $scope.x = 0;
    $scope.y = 0;
    //$scope.username = '';

    $scope.changeXPosition = function () {
        $scope.x = $scope.x.toString().replace(/[^\d]/g, '');
        if ($scope.x === "") $scope.x = 0;
        missileService.aimX($scope.x);
    };

    $scope.changeYPosition = function () {
        $scope.y = $scope.y.toString().replace(/[^\d]/g, '');
        if ($scope.y === "") $scope.y = 0;
        missileService.aimY($scope.y);
    };

    $scope.usernameCheck = function () {
        userService.usernameExist($scope.username).then(function (response) {
            if (!!response.data === true) {
                $scope.addUserForm.$setValidity("usernametaken", false);
            } else {
                $scope.addUserForm.$setValidity("usernametaken", true);
            }
        });
    };

    $scope.save = function () {

        userService.createUser($scope.username).then(function (response) {
            if (response.Id == undefined) {
                $scope.addUserForm.$setValidity("usernametaken", false);
                //throw ("Username already exist");
            } else {
                var userid = response.Id;
                placementService.addPosition($scope.x, $scope.y).then(function (response) {
                    placementService.mapUserToPosition(userid, response.Id).then(function () {
                        $location.path('/users/' + userid);
                    });
                });
            }
        });

    };


}]);