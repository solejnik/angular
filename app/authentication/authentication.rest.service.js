angular.module('app.authentication').factory('AuthenticationRestService', function ($http ) {
    'use strict';

    return {
        search: function (user1) {
			var email = user1.email;
			var password = user1.password;
            return $http.get('/web/user', {params: {email:email, password:password}});
        }
    };
});