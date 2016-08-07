'use strict';

angular.module('app').controller('BookListCtrl', function BookListCtrl(BookService, $stateParams) {
  var vm = this;
  vm.books = [
               {
                 "book_id": 1,
                 "title": "First Book!",
                 "author": "First",
                 "category": "Life",
                 "comment": "Pacto judges the contracts between consumers and providers of RESTful services. It can aid in designing realistic test doubles, by ensuring the double complies with the same contract as the real service."
               },
               {
                 "book_id": 2,
                 "title": "Second Book!",
                 "author": "Second",
                 "category": "Study",
                  "comment": "Pacto judges the contracts between consumers and providers of RESTful services. It can aid in designing realistic test doubles, by ensuring the double complies with the same contract as the real service."
               }
             ];
//  function () {
//      BookService.get({email: $stateParams.email},
//        function (book) {
//          console.log(book);
//          alert('获取成功!');
//        },
//        function (res) {
//          console.log(res.data);
//        }
//      );
//  };
});
