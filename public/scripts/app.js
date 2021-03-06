console.log("sanity Check!");
angular.module('bookApp', ['ngRoute'])
  .config(config);

// bookApp.controller('booksIndexController', bookIndexController);
// booksIndexController.$inject = ['$http'];

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller: 'booksIndexController',
      controllerAs: 'booksIndexCtrl'
    })
    .when('/books/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'booksShowController',
      controllerAs: 'booksShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
 //  function booksIndexController () {
 //   var vm = this;
 //   vm.newBook = {};
 //
 //   vm.newBook = {
 //       title: 'License to Ill',
 //       author: 'Beastie Boys',
 //       image: 'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
 //       releaseDate: "April 1, 2002"
 //   };
 //   // inside controller
 // $http({
 //   method: 'GET',
 //   url: "https://super-crud.herokuapp.com/books"
 // }).then(function successCallback(response) {
 //  vm.books=response.data;
 //  console.log(response);
 // }, function errorCallback(response) {
 //   console.log('There was an error getting the data', response);
 // });


  //  vm.books =[
  //    {
  //      title: 'beyonce',
  //      author: 'bey',
  //      image: 'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
  //      releaseDate:"April 1, 2002"
  //    },
  //    {
  //      title: 'rihanna',
  //      author:'rihanna',
  //      image:'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
  //      releaseDate:"April 1, 2002"
  //    },
  //    {
  //      title:'jlo',
  //      author:'jlo',
  //      image:'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
  //      releaseDate:"April 1, 2002"
  //    }
   //
  //  ];
 }
