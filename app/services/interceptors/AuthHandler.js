'use strict';

angular.module('app').factory('AuthHandler', function AuthHandlerFactory($q, $injector) {
  return {
    responseError: function (rejection) {
      // 如果服务器返回了401 unauthorized，那么就表示需要登录
      if (rejection.status === 401) {
        alert('用户名或密码错误!');
      } else {
        // 其它错误不用管，留给其它interceptor去处理
        return $q.reject(rejection);
      }
    }
  };
});
