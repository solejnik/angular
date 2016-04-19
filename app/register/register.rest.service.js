angular.module('app.register').factory('RegisterRestService', function ($http ) {
    'use strict';

    return {
        register: function (registerData) {
			var userToSend = {
				'id' : '',
				'firstName' : registerData.firstName,
				'lastName' :registerData.lastName,
				'email' :registerData.email,
				'password' :registerData.password
			};
			return $http.post('/web/register/', userToSend);
        }
    };
});