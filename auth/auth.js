(function (angular) {
  'use strict';
  function AuthController($scope) {

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      $scope.currentUser = user;
      $scope.close();
      window.location.href = '#/books';
      window.location.reload();
    };

    $scope.close = function () {
      angular.element($("#registerModal").modal('hide'));
    }

  }

  angular.module('libraryApp').component('auth', {
    templateUrl: 'auth/auth.html',
    controller: AuthController,
    $routeConfig: [
      { path: '/auth', name: 'Auth', component: 'auth' }
    ]
  });
})(window.angular);
