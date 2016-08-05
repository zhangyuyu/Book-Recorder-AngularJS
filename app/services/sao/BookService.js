'use strict';

angular.module('app').factory('BookService', function BookService($resource) {
  return $resource('/api/users/:email/books/', {email:'@email'});
});
