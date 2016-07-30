'use strict';

angular.module('app').directive('userFieldError', function userFieldError($compile) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      var subScope = scope.$new(true);
      subScope.hasError = function() {
        return ngModel.$invalid && ngModel.$dirty;
      };
      subScope.errors = function() {
        return ngModel.$error;
      };
      var hint = $compile('<ul class="user-field-error" ng-if="hasError()">{{errors()}}</ul>')(subScope);
      element.after(hint);
    }
  };
});
