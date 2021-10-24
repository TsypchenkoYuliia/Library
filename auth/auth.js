(function (angular) {
    'use strict';
    angular.module('auth', [])

        .component('auth', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
                { path: '/', name: 'Login', component: 'login', useAsDefault: true },
                { path: '/register', name: 'Register', component: 'register' }
            ]
        })

        .component('login', {
            templateUrl: 'auth/login.html',
            bindings: { $router: '<' },
            controller: LoginComponent
        })

        .component('register', {
            templateUrl: 'auth/register.html',
            bindings: { $router: '<' },
            controller: RegisterComponent
        }).directive('validDate', function() {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModelController) {
                    var validDate = scope.$eval(attrs.validDate);
                    ngModelController.$validators.minDate = function(value) {
                        return value >= validDate;
                    };
                }
            }
        });


    //   function HeroService($q) {
    //     var heroesPromise = $q.resolve([
    //       { id: 11, name: 'Mr. Nice' },
    //       { id: 12, name: 'Narco' },
    //       { id: 13, name: 'Bombasto' },
    //       { id: 14, name: 'Celeritas' },
    //       { id: 15, name: 'Magneta' },
    //       { id: 16, name: 'RubberMan' }
    //     ]);

    //     this.getHeroes = function() {
    //       return heroesPromise;
    //     };

    //     this.getHero = function(id) {
    //       return heroesPromise.then(function(heroes) {
    //         for (var i = 0; i < heroes.length; i++) {
    //           if (heroes[i].id === id) return heroes[i];
    //         }
    //       });
    //     };
    //   }

    function LoginComponent() {

        this.submit = function (form) {
            if (!form.$valid) { return; }
            var currentUser = JSON.parse(localStorage.getItem('user') || null);
            localStorage.setItem("name", angular.toJson(this.name));
            if (currentUser === null || currentUser === undefined || currentUser.name !== this.name) {
                this.$router.navigate(['Register']);
            }
            else if (currentUser !== null && currentUser.name == this.name) {
                this.$router.parent.navigate(['Books']);
            }
        };
    }

    function RegisterComponent() {

        this.startDate = new Date('2000-01-01');

        this.submit = function (form) {
            if (!form.$valid) { return; }
            localStorage.setItem("user", angular.toJson(this.user));
            this.currentUser = this.user;
            this.$router.parent.navigate(['Books']);
        };

        this.back = function (form) {
            this.$router.parent.navigate(['Login']);
        };
    }
})(window.angular);
