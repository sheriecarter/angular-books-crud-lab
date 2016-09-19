angular.module('bookApp')
  .controller('BooksIndexController', booksIndexControler);

  booksIndexController.$inject=['$http'];
  


 function booksIndexController () {
  var vm = this;
  vm.newBook = {};

  vm.newBook = {
      title: 'License to Ill',
      author: 'Beastie Boys',
      image: 'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
      releaseDate: "April 1, 2002"
  };
  // inside controller
$http({
  method: 'GET',
  url: "https://super-crud.herokuapp.com/books"
}).then(function successCallback(response) {
 vm.books=response.data;
 console.log(response);
}, function errorCallback(response) {
  console.log('There was an error getting the data', response);
});
