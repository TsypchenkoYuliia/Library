(function (angular) {
    'use strict';
    function EditBookController($scope) {

        $scope.submit = function (book) {
            var bookFromStorage = $scope.books.find(x=>x.title === book.title);
            var index = $scope.data.indexOf(bookFromStorage);
    
            $scope.data.splice(index, 1);
            $scope.data.push(book);
            $scope.update();
            $scope.updateBook = {};
            // window.location.href = '#/books';
            // window.location.reload();
        };

        $scope.close = function () {
            angular.element($("#editBookModal").modal('hide'));
        }

        $scope.update = function () {
            localStorage.removeItem("data");
            localStorage.setItem("data", angular.toJson($scope.data));
        }
    }

    angular.module('libraryApp').component('editBook', {
        templateUrl: 'editBook/editBook.html',
        controller: EditBookController,
        $routeConfig: [
            { path: '/editbook', name: 'EditBook', component: 'editBook' }
        ]
    });
})(window.angular);
