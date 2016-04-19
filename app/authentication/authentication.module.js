angular.module('app.authentication', ['ngRoute','app.main','app.authentication.templates','ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/authentication/authentication', {
			templateUrl: 'authentication/authentication/authentication.html', controller: 'AuthenticationController'});
		
    });


