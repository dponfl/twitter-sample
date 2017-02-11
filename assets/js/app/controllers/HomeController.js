"use strict";

(function () {
  angular.module('Twitter')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];
  function HomeController($scope) {
    $scope.post = '';
    
    $scope.sendPost =function (post) {
      console.log('post: ' + post);
    }
  }
})();