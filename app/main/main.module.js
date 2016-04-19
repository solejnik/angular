angular.module('app.main', ['ngRoute', 'app.main.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider
            .when('/', {redirectTo: '/main/welcome'})
            .when('/main/welcome', {templateUrl: 'main/welcome/welcome.html'})
			.when('/main/login', {templateUrl: 'main/login/login.html'})
			.when('/main/login-failure', {templateUrl: 'main/login-failure/login-failure.html'})
			.when('/main/logout-success', {templateUrl: 'main/logout-success/logout-success.html'})
			.when('/main/register', {templateUrl: 'main/register/register.html'})
            .otherwise({templateUrl: 'main/page-not-found/page-not-found.html'});
    });
