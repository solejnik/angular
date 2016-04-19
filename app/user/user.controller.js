angular.module('app.user').controller('UserController', function ($scope,UserRestService) {
    'use strict';

    $scope.user = [];


     $scope.search = function () {
        UserRestService.search().then(function (response) {
            angular.copy(response.data, $scope.user);
        }, function () {
            alert('Faiure!!!');
        });
    };


});


