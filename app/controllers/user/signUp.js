'use strict';

angular.module('app').controller('UserSignUpCtrl', function UserSignUpCtrl(UserService, $state) {
  var vm = this;
  vm.submit = function (form) {
      UserService.save(form,
        function (user) {
          alert('注册成功!');
          $state.go('home', {name: user.name, email: user.email});
        },
        function (res) {
          console.log(res.data);
        }
      );
  };
});
