var app = angular.module('Teaminator', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function ($routeProvider) {

    $routeProvider.when("/users", {
        controller: "userListController",
        templateUrl: "/presentation/views/userListTemplate.html"
    });


    $routeProvider.when("/users/:id", {
        controller: "userController",
        templateUrl: "/Presentation/views/userTemplate.html"
    });

    $routeProvider.otherwise("/users/");
});
