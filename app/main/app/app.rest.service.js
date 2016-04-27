angular.module('app.main').factory('AppRestService', function($http) {
    'use strict';

    return {
        getCurrentUsersRole: function() {
            return $http.get('/web/currentUsersRole/');
        }
    };

});
