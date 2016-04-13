// Ionic planifETS App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'planifETS' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'planifETS.controllers' is found in controllers.js
angular.module('planifETS', ['ionic', 'planifETS.controllers'])

.run(function($ionicPlatform, DataBaseService, CourseService, SemesterService, ProgramService, AvailabilityService) {
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

    var setAllCourses = function() {
      DataBaseService.readAll('courses').then(function (data) {
        CourseService.setAllCourses(data);
      }, function (error) {
        // promise rejected, could log the error with: console.log('error', error);
      });
    };

    var setAllSemesters = function() {
      DataBaseService.readAll('semesters').then(function (data) {
        SemesterService.setAllSemesters(data);
      }, function (error) {
        // promise rejected, could log the error with: console.log('error', error);
      });
    };

    var setAllPrograms = function() {
      DataBaseService.readAll('programs').then(function (data) {
        ProgramService.setAllPrograms(data);
      }, function (error) {
        // promise rejected, could log the error with: console.log('error', error);
      });
    };

    var setAllAvailabilities = function() {
      DataBaseService.readAll('availabilitycoursesemester').then(function (data) {
        AvailabilityService.setAllAvailabilities(data);
      }, function (error) {
        // promise rejected, could log the error with: console.log('error', error);
      });
    };

    setAllCourses();
    setAllSemesters();
    setAllPrograms();
    setAllAvailabilities();
  });
})

.config(function($stateProvider, $urlRouterProvider, BackandProvider) {
  BackandProvider.setAppName('planifETS');
  BackandProvider.setAnonymousToken('2600b7b2-d73d-4c38-a2e1-250a819e78f3');

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


