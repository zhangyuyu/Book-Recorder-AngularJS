'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl as vm'
  });

  $stateProvider.state('home', {
    url: '/home/:name/:email',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl as vm'
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

  $stateProvider.state('user.login', {
    url: '/login',
    templateUrl: 'controllers/user/login.html',
    controller: 'UserLoginCtrl as vm'
  });

  $stateProvider.state('book', {
    url: '/user/:email/book',
    template: '<div ui-view></div>',
    abstract: true
  })

  $stateProvider.state('book.create', {
    url: '/create',
    templateUrl: 'controllers/book/create.html',
    controller: 'BookCreateCtrl as vm'
  });
});
