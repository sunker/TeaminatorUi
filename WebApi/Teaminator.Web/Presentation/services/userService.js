'use strict';

//angular.module('Teaminator', [])
app.service("userService", ["restResourceFactory", function (restResourceFactory) {

    var rootUrl = 'user/';

    this.getUserList = function() {
        var restReq = restResourceFactory(rootUrl + 'list');
        return restReq.query().$promise;
    };

    this.getUser = function(id) {
        var restReq = restResourceFactory(rootUrl + 'get/' + id);
        return restReq.get().$promise;
    };

    this.updateUsername = function (id, username) {
        var restReq = restResourceFactory(rootUrl + 'update/' + id + ',' + username);
        return restReq.get().$promise;
    };

    this.createUser = function (username) {
        var restReq = restResourceFactory(rootUrl + 'add/' + username);
        return restReq.get().$promise;
    };

    this.usernameExist = function (username) {
        var restReq = restResourceFactory(rootUrl + 'exist/' + username);
        return restReq.exist().$promise;
    };

    this.deleteUser = function (id) {
        var restReq = restResourceFactory(rootUrl + 'delete/' + id);
        return restReq.get().$promise;
    };
}]);