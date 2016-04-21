angular.module('app.pets', ['ngRoute','app.main','app.pets.templates','ui.bootstrap'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/pets/pets', {
			templateUrl: 'pets/pets/pets.html', controller: 'PetsController'});
    });


