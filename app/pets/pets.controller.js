angular.module('app.pets').controller('PetsController', function ($scope, PetsRestService) {
    'use strict';
		
		
	 $scope.pets = [{'id':1,'name':'abba'},{'id':1,'name':'cyc'}];	
	 
     $scope.getPets = function () {
        PetsRestService.getPets().then(function (response) {
			 angular.copy(response.data, $scope.pets);
		}, function () {
            alert('Faiure!!!');
        });
    };
	$scope.deletePet = function (petId) {
        PetsRestService.deletePet(petId).then(function (response) {
			alert('Zwierzak usuniety!');
		}, function () {
            alert('Faiure!!!');
        });
    };
	
     $scope.alertPet = function (sth) {
        alert(sth);
	};
});


