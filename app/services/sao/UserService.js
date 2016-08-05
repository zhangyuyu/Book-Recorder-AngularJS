'use strict';

angular.module('app').factory('UserService', function UserService($resource) {
  return $resource('/api/users');
});
