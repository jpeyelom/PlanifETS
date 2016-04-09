// Ionic planifETS App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'planifETS' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'planifETS.controllers' is found in controllers.js
angular.module('planifETS', ['ionic', 'planifETS.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'LoginCtrl'
  })

  .state('app.availabilities', {
    url: '/availabilities',
    views: {
      'menuContent': {
        templateUrl: 'templates/availabilities.html',
        controller: 'AvailabilitiesCtrl'
      }
    }
  })

  .state('app.availability', {
    url: '/availability',
    views: {
      'menuContent': {
        templateUrl: 'templates/availability.html',
        controller: 'AvailabilityCtrl'
      }
    }
  })

  .state('app.plannings', {
    url: '/plannings',
    views: {
      'menuContent': {
        templateUrl: 'templates/plannings.html',
        controller: 'PlanningsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/plannings/:planningId',
    views: {
      'menuContent': {
        templateUrl: 'templates/planning.html',
        controller: 'PlanningCtrl'
      }
    }
  })

  .state('app.createPlanning', {
    url: '/createPlanning',
    views: {
      'menuContent': {
        templateUrl: 'templates/createPlanning.html',
        controller: 'PlanningsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/plannings');
});
