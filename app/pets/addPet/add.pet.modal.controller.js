angular.module('app.pets').controller('AddPetModalController', function ($scope, PetsRestService, $modalInstance) {
    'use strict';
					
	$scope.petTypes = [];				
					
	$scope.newPet = {
		'name' : '',
		'type' : '',
		'bornDate' : ''
	}
	
    $scope.addPet = function () {
         PetsRestService.savePet($scope.newPet).then(function (response) {
             $modalInstance.close(response.data);
         }, function () {
			 alert('Failed to add a new pet!');
         });
    };
	
	$scope.init = function () {
        PetsRestService.getTypes().then(function (response) {
            angular.copy(response.data, $scope.petTypes);
        }, function () {
            alert('Failed to load pet types!');
        }); 
    };
	
	angular.element().ready($scope.init());
	
});