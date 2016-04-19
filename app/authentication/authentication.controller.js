angular.module('app.authentication').controller('AuthenticationController', function ($scope, AuthenticationRestService) {
    'use strict';

	 $scope.answer= [];

	 $scope.user1 = {
		 email : '1',
		 password :'2'
	 };
	 
     $scope.search = function () {
        AuthenticationRestService.search($scope.user1).then(function (response) {
            angular.copy(JSON.stringify(response.data), $scope.answer);
			angular.copy(JSON.stringify(response.data), $scope.userDetails);
        }, function () {
            alert('Faiure!!!');
        });
    };


});


