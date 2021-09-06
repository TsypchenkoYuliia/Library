(function (angular) {
    'use strict';
    function AddBookController($scope) {

        $scope.data = JSON.parse(localStorage.getItem("data") || "[]");

        $scope.submit = function (newBook) {
            newBook.addedUser = JSON.parse(localStorage.getItem('user') || "[]").name;
            $scope.data.push(newBook);
            $scope.update();
            $scope.newBook = {};
            $scope.close();
            window.location.href = '#/books';
            window.location.reload();
        };

        $scope.close = function () {
            angular.element($("#addBookModal").modal('hide'));
        }

        $scope.update = function () {
            localStorage.removeItem("data");
            localStorage.setItem("data", angular.toJson($scope.data));
        }
    }

    angular.module('libraryApp').component('addBook', {
        templateUrl: 'addbook/addbook.html',
        controller: AddBookController,
        $routeConfig: [
            { path: '/addbook', name: 'Addbook', component: 'Addbook' }
        ]
    });
})(window.angular);
