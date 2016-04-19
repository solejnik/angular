angular.module('app.user', ['ngRoute','app.main','app.user.templates','ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/user/user', {
			templateUrl: 'user/user/user.html',controller: 'UserController'});
		
    });


