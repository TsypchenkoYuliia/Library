(function (angular) {
    'use strict';
    function AuthController($scope) {
      $scope.submit = function (user) {
        localStorage.setItem("user", angular.toJson(user));
        $scope.close();
      };
    }
  
    angular.module('libraryApp').component('auth', {
      templateUrl: 'auth/auth.html',
      controller: AuthController
    });
  })(window.angular);
  