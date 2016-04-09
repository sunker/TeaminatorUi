var app = angular.module('Teaminator', ['ngRoute', 'ngAnimate', 'ngResource', 'ui.bootstrap', 'ngMessages']);

app.config(function ($routeProvider) {

    $routeProvider.when("/users", {
        controller: "userListController",
        templateUrl: "/presentation/views/userListTemplate.html"
    });
    

    $routeProvider.when("/users/add", {
        controller: "createUserController",
        templateUrl: "/Presentation/views/createUserTemplate.html"
    });

    $routeProvider.when("/users/:id", {
        controller: "userProfileController",
        templateUrl: "/Presentation/views/userProfileTemplate.html"
    });


    $routeProvider.otherwise("/users/");
});
