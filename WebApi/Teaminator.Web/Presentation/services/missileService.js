'use strict';

app.service("missileService", ["restResourceFactory", function (restResourceFactory) {

    var rootUrl = 'missile/';

    function aim(x, y) {
        var restReq = restResourceFactory(rootUrl + 'aim/' + x + ',' + y);
        restReq.get();
    }

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