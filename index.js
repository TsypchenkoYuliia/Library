// (function(angular) {
//     'use strict';
//   angular.module('libraryApp', []);
//   })(window.angular);

// angular.module('libraryApp', ['ngComponentRouter'])

// .config(function($locationProvider) {
//   $locationProvider.html5Mode(true);
// })

// .value('$routerRootComponent', 'libraryApp')

// .component('libraryApp', {
//   $routeConfig: [
//     {path: '/login/...', name: 'Login', component: 'login', useAsDefault: true}
//     // {path: '/heroes/...', name: 'Heroes', component: 'heroes' }
//   ]
// });



(function(angular) {
  'use strict';
angular.module('libraryApp', ['ngComponentRouter'])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

})(window.angular);




//   angular.module('libraryApp', ['ngComponentRouter']);

 


//   (function(angular) {
//     'use strict';
//   angular.module('libraryApp')
//   .config(['$routeProvider',
//   function config($routeProvider) {
//     $routeProvider.
//       when('/login', {
//         templateUrl: '<login></login>'
//       }).
//       when('/books/:bookId', {
//         template: '<book-detail></book-detail>'
//       }).
//       otherwise('/login');
//   }
// ])})(window.angular);