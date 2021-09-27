(function (angular) {
  'use strict';
  function BookListController($scope) {

    $scope.currentUser = JSON.parse(localStorage.getItem('user') || "[]").name;

    $scope.data = JSON.parse(localStorage.getItem("data") || "[]");

    if ($scope.data.length === 0) {
      let books = [{ title: 'book', author: 'author', year: '2000', house: 'house', addedUser: 'Olga' },
      { title: 'book2', author: 'author2', year: '2010', house: 'house1', addedUser: 'Lena' },
      { title: 'book3', author: 'author3', year: '2012', house: 'house2', addedUser: 'Irina' },
      { title: 'book4', author: 'author4', year: '2013', house: 'house3', addedUser: 'Lena' }];
      localStorage.setItem("data", angular.toJson(books));
      $scope.data = JSON.parse(localStorage.getItem("data") || "[]");
    }

    $scope.dataTableOpt = {
      "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, 'All']],
    };

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      $scope.close();
    };

    // $scope.reserve = function (index) {
    //   var user = JSON.parse(localStorage.getItem('user') || null);

    //   if (user === null) {
    //     angular.element($("#registerModal").modal('show'));
    //   }
    //   else {
    //     var bookFromStorage = $scope.books.find(x => x.title === book.title);
    //     var index = $scope.books.indexOf(bookFromStorage);

    //     $scope.books.splice(index, 1);
    //     book.reserve = user.name;
    //     $scope.books.push(book);
    //     $scope.update();
    //   }
    // }

    $scope.reserve = function (book) {
      var user = JSON.parse(localStorage.getItem('user') || "[]");

      if (user === null) {
        angular.element($("#registerModal").modal('show'));
      }
      else {
        var bookFromStorage = $scope.data.find(x => x.title === book.title);
        var index = $scope.data.indexOf(bookFromStorage);

        $scope.data.splice(index, 1);
        book.readUser = user.name;
        $scope.data.push(book);
        $scope.update();
      }
    }

    $scope.return = function (book) {
      var user = JSON.parse(localStorage.getItem('user') || "[]");

      if (user === null) {
        angular.element($("#registerModal").modal('show'));
      }
      else {
        var bookFromStorage = $scope.data.find(x => x.title === book.title);
        var index = $scope.data.indexOf(bookFromStorage);

        $scope.data.splice(index, 1);
        book.readUser = null;
        $scope.data.push(book);
        $scope.update();
      }
    }

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      // $scope.close();
    };

    $scope.add = function () {
      angular.element($("#addBookModal").modal('show'));
    }

    $scope.edit = function (book) {
      angular.element($("#editBookModal").modal('show'));
    }

    $scope.update = function () {
      localStorage.removeItem("data");
      localStorage.setItem("data", angular.toJson($scope.data));
    }

  }



  angular.module('libraryApp').component('bookList', {
    templateUrl: 'bookList/bookList.html',
    controller: BookListController,
    $routeConfig: [
      { path: '/books', name: 'BookList', component: 'bookList'}
    ]
  })
})(window.angular);
