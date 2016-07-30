'use strict';

angular.module('app').directive('apiCheckSameAs', function apiCheckSameAs() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      var isSame = function (value) {
        var anotherValue = scope.$eval(attrs.apiCheckSameAs);
        return value === anotherValue;
      };
      ngModel.$parsers.push(function (value) {
        ngModel.$setValidity('same', isSame(value));
        return isSame(value) ? value : undefined;
      });
      scope.$watch(
        function () {
          return scope.$eval(attrs.apiCheckSameAs);
        },
        function () {
          ngModel.$setValidity('same', isSame(ngModel.$modelValue));
        }
      );
    }
  };
});
