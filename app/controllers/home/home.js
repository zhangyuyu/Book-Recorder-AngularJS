'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($stateParams, $state) {
    var vm = this;
    vm.name = $stateParams.name || 'Anonymous';
    vm.anonymous = vm.name === 'Anonymous';

    vm.login = function(){
        $state.go('user.login');
    };
    vm.logout = function(){
        $state.go('default');
    };
    vm.signUp = function(){
        $state.go('user.signUp');
    };
    vm.addBook = function(){
        $state.go('book.create', {email: $stateParams.email});
    };
    vm.listBook = function(){
        $state.go('book.list', {email: $stateParams.email});
    };
});
