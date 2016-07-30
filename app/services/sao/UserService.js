'use strict';

angular.module('app').factory('UserService', function ReaderFactory($resource) {
  return $resource('/api/users/:email');
});
