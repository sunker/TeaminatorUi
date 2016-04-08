'use strict';

app.service("missileService", ["restResourceFactory", function (restResourceFactory) {

    var rootUrl = 'missile/';

    this.aim = function (x, y) {
        var url = rootUrl + 'aim/' + x + ',' + y;
        var restReq = restResourceFactory(url);
        restReq.get();
    };

    this.aimY = function(y) {
        this.getCurrentPosition().then(function (pos) {
            var currentY = pos[1];
            aim(0, y - currentY);
        });
    };

    this.aimX = function (x) {
        this.getCurrentPosition().then(function (pos) {
            var currentX = pos[0];
            aim(x - currentX, 0);
        });
    };

    this.getCurrentPosition = function() {
        var restReq = restResourceFactory(rootUrl + 'current');
        return restReq.query().$promise;
    };;
}]);