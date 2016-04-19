angular.module('app.user').factory('UserRestService', function ($http ) {
    'use strict';

    return {
        search: function () {
            return $http.get('/web/rests');
        }
    };
});