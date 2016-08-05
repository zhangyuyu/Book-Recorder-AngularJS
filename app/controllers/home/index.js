'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($stateParams) {
    var vm = this;
    vm.name = $stateParams.name || 'Anonymous';
    vm.login = vm.name === 'Anonymous';
});
