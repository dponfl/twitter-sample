"use strict";

(function () {

  angular.module('Twitter', []).config(TwitterConfig);

  TwitterConfig.$inject = ['$routeProvider'];
  function TwitterConfig($routeProvider) {
    $routeProvider.when().otherwise();
  };

})();