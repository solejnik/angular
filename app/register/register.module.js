angular.module('app.register', ['ngRoute','app.main','app.register.templates','ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/register/register', {
			templateUrl: 'register/register/register.html', controller: 'RegisterController'});
		
    });


