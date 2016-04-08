'use strict';

app.service("placementService", ["restResourceFactory", function (restResourceFactory) {

    var rootUrl = 'placement/';

    this.getUserPosition = function(id) {
        var restReq = restResourceFactory(rootUrl + 'get/' + id);
        return restReq.get().$promise;
    };

    this.updatePosition = function (pos, x, y) {
        var restReq = restResourceFactory(rootUrl + 'Update/' + pos + '/' + x + ',' + 'y'); //Update/{pos}/{x},{y}
        return restReq.get().$promise;
    };

    this.mapUserToPosition = function (userId, positionId) {
        var restReq = restResourceFactory(rootUrl + 'map/' + userId + ',' + positionId);
        return restReq.get().$promise;
    };
}]);