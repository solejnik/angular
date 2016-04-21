angular.module('app.pets').factory('PetsRestService', function ($http ) {
    'use strict';

    return {
        getPets: function () {
			return $http.get('/web/getPets/');
        },
		deletePet: function (petId) {
			return $http.delete('/web/pet/' + petId);
        }
    };
});