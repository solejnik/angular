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
	 
	 $scope.validEmail = function (){
		 return $scope.registerData.email !== $scope.reEmail;
	 }
	 
	 $scope.validPassword = function (){
		 return $scope.registerData.password !== $scope.rePassword;
	 }
	 
     $scope.register = function () {
        RegisterRestService.register($scope.registerData).then(function (response) {
			$scope.registerData = '';
			alert('Register complete. Now You can log in');
		}, function () {
            alert('Faiure!!!');
        });
    };


});


