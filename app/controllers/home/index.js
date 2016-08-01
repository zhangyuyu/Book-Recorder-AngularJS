'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($scope, $stateParams) {
    $scope.vm.name = $stateParams.name;
});
