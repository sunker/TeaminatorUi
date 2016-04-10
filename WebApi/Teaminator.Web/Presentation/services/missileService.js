'use strict';

app.service("missileService", ["restResourceFactory", function (restResourceFactory) {

    var rootUrl = 'missile/';
    
    this.aimY = function (y) {
        var self = this;
        this.getCurrentPosition().then(function (pos) {
            var currentY = pos[1];
            self.aim(0, y - currentY);
        });
    };

    this.aimX = function (x) {
        var self = this;
        this.getCurrentPosition().then(function (pos) {
            var currentX = pos[0];
            self.aim(x - currentX, 0);});
    };

    this.attack = function (username) {
        var restReq = restResourceFactory(rootUrl + '/attack/' + username);
        return restReq.get().$promise;
    };

    this.fire = function () {
        var restReq = restResourceFactory(rootUrl + '/fire');
        return restReq.get().$promise;
    };

    this.getCurrentPosition = function() {
        var restReq = restResourceFactory(rootUrl + 'current');
        return restReq.query().$promise;
    };

    this.aim = function (x, y) {
        var url = rootUrl + 'aim/' + x + ',' + y;
        var restReq = restResourceFactory(url);
        restReq.get();
    };
}]);