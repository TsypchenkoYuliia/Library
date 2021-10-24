(function (angular) {
    'use strict';
    angular.module('books', [])

        .component('books', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
                { path: '/', name: 'BooksList', component: 'booksList', useAsDefault: true },
                { path: '/add', name: 'Newbook', component: 'newbook' },
                { path: '/edit/:id', name: 'Editbook', component: 'editbook' },
            ]
        })

        .component('newbook', {
            templateUrl: 'books/newbook.html',
            bindings: { $router: '<' },
            controller: NewbookComponent
        })

        .component('editbook', {
            templateUrl: 'books/editbook.html',
            bindings: { $router: '<' },
            controller: EditbookComponent
        })

        .component('booksList', {
            templateUrl: 'books/bookslist.html',
            bindings: { $router: '<' },
            controller: BooksListComponent
        })

    function BooksListComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('user') || "[]").name;
        this.data = JSON.parse(localStorage.getItem("data") || "[]");

        if (this.data.length === 0) {
            let books = [
                { id: 1, title: '«Властелин колец»', author: 'Джон Р. Р. Толкин', year: '2000', house: 'Publishing House', addedUser: 'Olga', readUser: 'Lena' },
                { id: 2, title: '«Гордость и предубеждение»', author: 'Джейн Остин', year: '2010', house: 'Publishing House', addedUser: 'Lena' },
                { id: 3, title: '«Тёмные начала»', author: 'Филип Пулман', year: '2012', house: 'Publishing House', addedUser: 'Irina', readUser: 'Olga' },
                { id: 4, title: '«Автостопом по галактике»', author: 'Дуглас Адамс', year: '2013', house: 'Publishing House', addedUser: 'Lena' },
                { id: 5, title: '«Гарри Поттер и Кубок огня»', author: 'Джоан Роулинг', year: '2008', house: 'Publishing House', addedUser: 'Olga' }
            ];
            localStorage.setItem("data", angular.toJson(books));
            this.data = JSON.parse(localStorage.getItem("data") || "[]");
        }

        this.dataTableOpt = {
            "aLengthMenu": [[10, 50, 100, -1], [10, 50, 100, 'All']],
            "columnDefs": [{ targets: 1, orderable: false }]
        };

        this.reserve = (book) => {
            var user = JSON.parse(localStorage.getItem('user') || "[]");
            if (this.user === null) {
                this.$router.parent.navigate(['Login']);
            }
            else {
                var bookFromStorage = this.data.find(x => x.title === book.title);
                var index = this.data.indexOf(bookFromStorage);
                this.data.splice(index, 1);
                book.readUser = user.name;
                this.data.push(book);
                this.update();
            }
        }

        this.update = () => {
            localStorage.removeItem("data");
            localStorage.setItem("data", angular.toJson(this.data));
        }

        this.add = () => {
            this.$router.navigate(['Newbook']);
        }

        this.edit = (bookid) => {
            this.$router.navigate(['Editbook', { id: bookid }]);
        }

        this.back = () => {
            window.location.replace("/");
        }

        this.return = (book) => {
            var user = JSON.parse(localStorage.getItem('user') || "[]");

            if (user === null) {
                angular.element($("#registerModal").modal('show'));
            }
            else {
                var bookFromStorage = this.data.find(x => x.title === book.title);
                var index = this.data.indexOf(bookFromStorage);

                this.data.splice(index, 1);
                book.readUser = null;
                this.data.push(book);
                this.update();
            }
        }
    }


    function NewbookComponent() {
        this.submit = (form) => {
            if (!form.$valid) { return; }
            this.data = JSON.parse(localStorage.getItem("data") || "[]");
            this.newBook.addedUser = JSON.parse(localStorage.getItem('user') || "[]").name;
            this.newBook.id = this.data.length + 1;
            this.data.push(this.newBook);
            this.update();
            this.newBook = {};
            this.$router.navigate(['BooksList']);
        };

        this.update = () => {
            localStorage.removeItem("data");
            localStorage.setItem("data", angular.toJson(this.data));
        }
    }

    function EditbookComponent() {

        this.$routerOnActivate = function (next, previous) {
            const id = next.params.id;
            this.data = JSON.parse(localStorage.getItem("data") || "[]");
            this.editBook = this.data.find(x => x.id === id);
        };

        this.submit = (form) => {
            if (!form.$valid) { return; }
            var index = this.data.indexOf(this.editBook);
            this.data.splice(index, 1);
            this.data.push(this.editBook);
            this.update();
            this.editBook = {};
            this.$router.navigate(['BooksList']);
        };

        this.update = () => {
            localStorage.removeItem("data");
            localStorage.setItem("data", angular.toJson(this.data));
        }
    }

    // function RegisterComponent() {

    //     this.submit = function () {
    //         localStorage.setItem("user", angular.toJson(user));
    //         this.currentUser = this.user;
    //         this.$router.navigate(['Books']);
    //     };
    // }
})(window.angular);
