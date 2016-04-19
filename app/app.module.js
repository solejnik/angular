angular.module('app', ['ngRoute',  'app.main','ui.bootstrap', 'app.component1', 'app.component2', 'app.user', 'app.authentication', 'app.register'])
    .config(function ($locationProvider) {
        'use strict';
        $locationProvider.html5Mode(false);
    });
