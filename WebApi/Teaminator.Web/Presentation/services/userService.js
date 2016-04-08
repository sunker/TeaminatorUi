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

    this.createUser = function (username) {
        var restReq = restResourceFactory(rootUrl + 'add/' + username);
        return restReq.get().$promise;
    };
}]);