'use strict';

app.controller("userListController", ["$scope", "userService", "$timeout", "$location", 
    function ($scope, userService, $timeout, $location) {

    $timeout(function () {
        userService.getUserList().then(function (response) {
            $scope.users = response;
        });
    });

    $scope.deleteUser = function (id) {
        var index = -1;
        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i].Id === id) {
                index = i;
            }
        }
        if (index > -1) {
            userService.deleteUser(id).then(function () {
                $scope.users.splice(index, 1);
                setTimeout(function () { $scope.$apply(); });
            });
        }
    };

    $scope.addUser = function() {
        $location.path('/users/add');
    };
}]);