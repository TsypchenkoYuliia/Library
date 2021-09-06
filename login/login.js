(function (angular) {
    'use strict';
    function LoginController($scope) {

        angular.element(document).ready(function () {
            var user = JSON.parse(localStorage.getItem('user') || null);
            if (user === null)
                angular.element($("#loginModal").modal('show'));
        });

        $scope.submit = function (user) {

            var currentUser = JSON.parse(localStorage.getItem('user') || null);

            if (currentUser !== null && currentUser.name === user.name) {
                window.location.href = '#/books';
                $scope.close();
                window.location.href = '#/books';
                window.location.reload();
            }
            else {
                angular.element($("#registerModal").modal('show'));
                $scope.close();
            }
        };

        $scope.close = function () {
            angular.element($("#loginModal").modal('hide'));
        }
    }

    angular.module('libraryApp').component('login', {
        templateUrl: 'login/login.html',
        controller: LoginController,
        $routeConfig: [
            { path: '/', name: 'Login', component: 'login', useAsDefault: true }
        ]
    });
})(window.angular);
