(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'signup.html',
      controller: 'SignUpController',
      controllerAs: 'signUpCtrl'
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'myInfoCtrl',
      resolve: {
        info: ['MyInfoService', function(MyInfoService) {
          return MyInfoService.getInfo();
        }]
      }
    });
}
})();
