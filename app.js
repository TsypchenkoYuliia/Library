(function(angular) {
    'use strict';
  angular.module('app', ['ngComponentRouter', 'auth', 'books'])
  
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  
  .value('$routerRootComponent', 'app')
  
  .component('app', {
      template:'<ng-outlet></ng-outlet>',
    $routeConfig: [
      {path: '/auth/...', name: 'Auth', component: 'auth', useAsDefault: true },
      {path: '/books/...', name: 'Books', component: 'books' }
    ]
  });
  })(window.angular);