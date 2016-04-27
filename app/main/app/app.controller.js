angular.module('app.main').controller('AppCntl', function($scope, AppRestService) {
    'use strict';
    $scope.message = 'Hello!';

    $scope.isUserAnonymous = true;

    $scope.init = function() {
        AppRestService.getCurrentUsersRole().then(function(response) {
            $scope.isUserAnonymous = response.data;
        }, function() {
            alert('Failed to load current users role!');
        });
    };

    angular.element.ready($scope.init());

});
