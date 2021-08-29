(function (angular) {
  'use strict';
  function BookListController($scope) {

    $scope.data = [{
      title: "Title1",
      author: "Author1",
      year: "2021",
      house: "House1",
      addedUser: "TestUser1",
      readUser: "readUser"
    },
    {
      title: "Title2",
      author: "Author1",
      year: "2021",
      house: "House1",
      addedUser: "TestUser1",
      readUser: ""
    },
    {
      title: "Title31",
      author: "Author1",
      year: "2021",
      house: "House1",
      addedUser: "TestUser1",
      readUser: ""
    }
    ];

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

    $scope.submit = function (user) {
      localStorage.setItem("user", angular.toJson(user));
      // $scope.close();
    };

  }



  angular.module('libraryApp').component('bookList', {
    templateUrl: 'bookList/bookList.html',
    controller: BookListController
  })
  .directive('minDate', function() {
    return {
      template: '1900-01-01'
    };
  });
})(window.angular);
