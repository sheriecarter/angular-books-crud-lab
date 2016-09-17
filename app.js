angular
  .module('bookApp', []);
  .controller('bookController', bookController);

  function AlbumsIndexController () {
   var vm = this;
   vm.newBook = {};

   vm.newBook = {
       title: 'License to Ill',
       authorName: 'Beastie Boys'
   };
 }
