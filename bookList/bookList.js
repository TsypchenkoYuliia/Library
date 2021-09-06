(function (angular) {
  'use strict';
  function BookListController($scope) {

    $scope.currentUser = JSON.parse(localStorage.getItem('user') || "[]").name;

    $scope.data = JSON.parse(localStorage.getItem("data") || "[]");

    $scope.dataTableOpt = {
      "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, 'All']],
    };

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      $scope.close();
    };

    $scope.reserve = function (index) {
      var user = JSON.parse(localStorage.getItem('user') || null);

      if (user === null) {
        angular.element($("#registerModal").modal('show'));

        //   var modalInstance = $uibModal.open({
        //     templateUrl: './auth/auth.html',
        //     component: 'authComponent',// a controller for modal instance
        //     // controllerUrl: 'controller/test-controller', // can specify controller url path
        //     // controllerAs: 'ctrl', //  controller as syntax
        //     // windowClass: 'clsPopup', //  can specify the CSS class
        //     // keyboard: false, // ESC key close enable/disable
        //     resolve: {
        //         // actualData: function () {
        //         //     return self.sampleData;
        //         // }
        //     } // data passed to the controller
        // }).result.then(function (data) {
        //     //do logic
        // }, function () {
        //     // action on popup dismissal.
        // });
      }
      else {
        var bookFromStorage = $scope.books.find(x => x.title === book.title);
        var index = $scope.books.indexOf(bookFromStorage);

        $scope.books.splice(index, 1);
        book.reserve = user.name;
        $scope.books.push(book);
        $scope.update();
      }
    }

    $scope.reserve = function (book) {
      var user = JSON.parse(localStorage.getItem('user') || "[]");

      if (user === null){
          angular.element($("#registerModal").modal('show'));
      }
      else{
          var bookFromStorage = $scope.data.find(x=>x.title === book.title);
          var index = $scope.data.indexOf(bookFromStorage);

          $scope.data.splice(index, 1);
          book.readUser = user.name;
          $scope.data.push(book);
          $scope.update();
      }
  }

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      // $scope.close();
    };

    $scope.add = function ()  {
      angular.element($("#addBookModal").modal('show'));
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
      {path: '/books', name: 'BookList', component: 'bookList'}
    ]
  })
  .directive('minDate', function() {
    return {
      template: '1900-01-01'
    };
  })
})(window.angular);
