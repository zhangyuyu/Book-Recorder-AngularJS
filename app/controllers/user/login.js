'use strict';

angular.module('app').controller('UserLoginCtrl', function UserLoginCtrl(UserService) {
  var vm = this;
  vm.submit = function (form) {
      UserService.get({email: vm.form.email, password: vm.form.password},
        function (user) {
          console.log(user);
          alert('登陆成功!');
        },
        function (res) {
          console.log(res.data);
        }
      );
  };
});
