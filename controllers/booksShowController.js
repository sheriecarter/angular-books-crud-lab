angular.module('libraryApp')
.controller('booksShowController', booksShowController);

booksShowController.$inject=['$http', '$routeParams', '$location'];
