"use strict";

(function () {

  angular.module('Twitter', [
    'ngRoute',
    'ngResource'
  ]).config(TwitterConfig);

  TwitterConfig.$inject = ['$routeProvider','$locationProvider'];
  function TwitterConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
      templateUrl: 'templates/view/home.html',
      controller: 'HomeController'
    })
      .when('/test', {
        templateUrl: 'templates/view/test.html'
      })
      .when('/404', {
        templateUrl: 'templates/view/404.html'
      })
      .otherwise({
      redirectTo: '/404'
    });

    $locationProvider.hashPrefix('');
  }


})();