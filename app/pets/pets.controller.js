angular.module('app.pets').controller('PetsController', function ($scope, PetsRestService, $modal) {
    'use strict';
		
		
	 $scope.pets = [];	
	 
     $scope.getPets = function () {
        PetsRestService.getPets().then(function (response) {
			 angular.copy(response.data, $scope.pets);
		}, function () {
            alert('Failed to load pets list!');
        });
    };
	
	$scope.getCurrentUsersRole = function () {
        PetsRestService.getCurrentUsersRole().then(function (response) {
			angular.copy(response.data, $scope.pets);
		}, function () {
            alert('Failed to delete pet!');
        });
    };
	
	$scope.editPet = function (pet) {
        var modalInstance = $modal.open({
            templateUrl: 'pets/editPet/edit-pet-modal.html',
            controller: 'EditPetModalController',
            size: 'lg',
            resolve: {
                pet: function () {
                  return pet;
                }
              }
        });
        modalInstance.result.then(function(){
        });
    };
	
	$scope.addPet = function (pet) {
        var modalInstance = $modal.open({
            templateUrl: 'pets/addPet/add-pet-modal.html',
            controller: 'AddPetModalController',
            size: 'lg',
        });
        modalInstance.result.then(function(pets){
			angular.copy(pets, $scope.pets);
        });
    };

});


