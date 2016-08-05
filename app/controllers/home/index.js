'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($stateParams, $state) {
    var vm = this;

    vm.name = $stateParams.name || 'Anonymous';
    vm.anonymous = vm.name === 'Anonymous';

    vm.login = function(){
        $state.go('user.login');
    };
    vm.signUp = function(){
        $state.go('user.create');
    };
});
