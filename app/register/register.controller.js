angular.module('app.register').controller('RegisterController', function ($scope, RegisterRestService) {
    'use strict';


	 $scope.registerData = {
		 'id' : '',
		 'firstName' : '',
		 'lastName' :'',
		 'email' :'',
		 'password' :''
	 };
	 
	 $scope.reEmail = '';
	 $scope.rePassword = '';
	 
	 $scope.validData = $scope.reEmail==$scope.registerData.email;
	 
     $scope.register = function () {
        RegisterRestService.register($scope.registerData).then(function (response) {
			alert();
		}, function () {
            alert('Faiure!!!');
        });
    };


});


