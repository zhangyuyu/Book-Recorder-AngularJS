'use strict';

angular.module('app').controller('BookListCtrl', function BookListCtrl(BookService, $stateParams) {
  var vm = this;
  vm.books = BookService.query({email: $stateParams.email});
});
