(function (angular) {
  'use strict';
  function AuthController($scope) {

    $scope.startDate = new Date('1980-00-00');

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
  })
  .directive('minDate', function () {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModelController) {
          
          var minDate = scope.$eval(attrs.minDate) || new Date(new Date().setHours(0, 0, 0, 0));
          
          ngModelController.$validators.minDate = function(value) {
            var res = value <= minDate;
              return value >= minDate;
          };
      }}
  })
})(window.angular);
