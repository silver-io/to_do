'use strict';

/**
 * @ngdoc overview
 * @name toDoApp
 * @description
 * # toDoApp
 *
 * Main module of the application.
 */
angular
  .module('toDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
    localStorageServiceProvider.setPrefix('ls');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
