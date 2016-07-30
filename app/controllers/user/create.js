'use strict';

angular.module('app').controller('UserCreateCtrl', function UserCreateCtrl(UserService) {
  var vm = this;
  vm.submit = function (form) {
      UserService.save(form,
        function (user) {
          console.log(user);
          alert('注册成功!');
        },
        function (res) {
          console.log(res.data);
        }
      );
  };
});
