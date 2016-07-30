'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');

  $stateProvider.state('user', {
    url: '/user',
    template: '<div ui-view></div>',
    abstract: true
  });

  $stateProvider.state('user.create', {
    url: '/create',
    templateUrl: 'controllers/user/create.html',
    controller: 'UserCreateCtrl as vm'
  });
});
