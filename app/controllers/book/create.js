'use strict';

angular.module('app').controller('BookCreateCtrl', function BookCreateCtrl(BookService, $stateParams) {
  var vm = this;
  vm.submit = function (form) {
      BookService.save({email: $stateParams.email}, form,
        function (book) {
          console.log(book);
          alert('添加成功!');
        },
        function (res) {
          console.log(res.data);
        }
      );
  };
});
