angular.module('app.pets').controller('EditPetModalController', function ($scope, PetsRestService, $modalInstance, pet) {
    'use strict';
    
	
	$scope.pet = pet;
					
	$scope.petType = pet.type;
	
	$scope.petTypeHolder = pet.type;
	
	$scope.petBornDate = new Date(pet.bornDate);
	
	$scope.petBornDateHolder = new Date(pet.bornDate);
	
					
	$scope.petTypes = [];				
					
    $scope.saveEditedPet = function () {
		 $scope.pet.type = $scope.petType;
		 $scope.pet.bornDate = $scope.petBornDate;
         PetsRestService.updatePet($scope.pet).then(function (response) {
             $modalInstance.close(response.data);
         }, function () {
             $scope.pet.type = $scope.petTypeHolder;
             $scope.pet.bornDate = $scope.petBornDateHolder;
			 alert('Failed to complete editing pet!');
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