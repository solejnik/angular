angular.module('app.pets').factory('PetsRestService', function ($http ) {
    'use strict';

    return {
        getPets: function () {
			return $http.get('/web/getPets/');
        },
		deletePet: function (petId) {
			return $http.delete('/web/pet/' + petId);
        },
		savePet: function (newPet) {
			return $http.post('/web/savePet/', newPet);
        },
		updatePet: function (editedPet) {
			return $http.post('/web/editPet/', editedPet);
        },
		getTypes: function () {
			return $http.get('/web/getPetTypes/');
        }
    };
});