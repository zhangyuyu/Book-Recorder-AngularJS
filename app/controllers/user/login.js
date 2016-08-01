'use strict';

angular.module('app').controller('UserLoginCtrl', function UserLoginCtrl(UserService, $state) {
  var vm = this;
  vm.submit = function () {
  UserService.get({email: vm.form.email, password: vm.form.password},
        function (user) {
            alert(user.name + '登陆成功!');
            $state.go('home', {name: user.name});
        },
        function (res) {
          console.log(res.data);
        }
      );
  };
});
