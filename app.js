angular
  .module('bookApp', []);
  .controller('bookController', bookController);

  function AlbumsIndexController () {
   var vm = this;
   vm.newBook = {};

   vm.newBook = {
       title: 'License to Ill',
       author: 'Beastie Boys',
       image: 'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
       releaseDate: "April 1, 2002"
   };
   vm.books =[
     {
       title: 'beyonce',
       author: 'bey',
       image: 'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
       releaseDate:"April 1, 2002"
     },
     {
       title: 'rihanna',
       author:'rihanna',
       image:'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
       releaseDate:"April 1, 2002"
     },
     {
       title:'jlo',
       author:'jlo',
       image:'https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg',
       releaseDate:"April 1, 2002"
     }

   ];
 }
