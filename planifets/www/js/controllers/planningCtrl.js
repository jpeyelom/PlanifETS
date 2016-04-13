angular.module('planifETS.controllers').controller('PlanningCtrl',
  ['$scope', '$ionicPopup', 'TitleService', 'PlanningService',
    'AvailabilityService', 'CourseService', '$ionicLoading', 'SemesterService',
  function($scope, $ionicPopup, TitleService, PlanningService
    , AvailabilityService, CourseService, $ionicLoading, SemesterService){

    $scope.navTitle = null;
    $scope.available = [];
    $scope.planningCourses = PlanningService.getCoursesList();
    $scope.plannings = PlanningService.getPlanningList();
    $scope.currentPlanning = null;
    $scope.currentSemester = null;
    $scope.currentSemesterId = null;
    $scope.coursesAvailabilitiesFiltered = [];
    $scope.availabilitiesBySemesters = [];
    $scope.availability = [
      {title: 'D', id: 1},
      {title: 'N', id: 2},
      {title: 'DN', id: 3}
    ];

    $scope.verifyAvailabilities = function() {
      // Start showing the progress
      $scope.show($ionicLoading);

      var course = null;
      var courseId = null;

      $scope.currentPlanning = PlanningService.getCurrentPlanning();
      var semester = $scope.currentPlanning.semester;
      var semesterId = SemesterService.getSemesterId(semester);
      SemesterService.setCurrentSemester(semester);
      $scope.currentSemester = semester;
      $scope.currentSemesterId = semesterId;

      for (var i = 0; i < $scope.planningCourses.length; i++) {
        course = $scope.planningCourses[i].course;
        courseId = CourseService.getCourseId(course);

        $scope.coursesAvailabilitiesFiltered = [];
        $scope.coursesAvailabilitiesFiltered = AvailabilityService.filterCourseAvailabilities(courseId);

        $scope.planningCourses[i].status = $scope.isCourseAvailable(semesterId, $scope.coursesAvailabilitiesFiltered);
      }

      $scope.hide($ionicLoading);
    };

    $scope.isCourseAvailable = function(currentSemesterId, coursesAvailabilitiesFiltered) {
      for (var j = 0; j < coursesAvailabilitiesFiltered.length; j++) {
        if (currentSemesterId == coursesAvailabilitiesFiltered[j].semester) {
          if (coursesAvailabilitiesFiltered[j].availability == 1 ||
            coursesAvailabilitiesFiltered[j].availability == 2 ||
            coursesAvailabilitiesFiltered[j].availability == 3) {
              return 'available';
          } else {
              return 'unavailable';
          }
        }
      }
    };

    $scope.showAvailabilities = function(courses) {
      var availabilities = [];
      var item = {
        value: "",
        semester: ""
      };
      var courseId = CourseService.getCourseId(courses.course);
      var coursesAvailabilitiesFiltered = AvailabilityService.filterCourseAvailabilities(courseId);

      for (var k = 0; k < coursesAvailabilitiesFiltered.length; k++) {
        if ($scope.currentSemesterId != coursesAvailabilitiesFiltered[k].semester) {
          if (coursesAvailabilitiesFiltered[k].availability == 1 ||
            coursesAvailabilitiesFiltered[k].availability == 2 ||
            coursesAvailabilitiesFiltered[k].availability == 3) {
              item.value = coursesAvailabilitiesFiltered[k].availability;
              item.semester = coursesAvailabilitiesFiltered[k].semester;
              availabilities.push(item);
          }
        }
      }

      $scope.availabilitiesBySemesters = availabilities;

      if(courses.status == 'unavailable'){
        $scope.showAvailabilityAlert('Course not available for ' + $scope.currentSemester,
          courses.course + ' is only available for the current ' +
          'semesters : <br/><br/> W16(' + 'D' + ')  -  S16(' + 'N' + ')  -  W17(' + 'D' + ')  -  S17(' + 'N' + ')');
      }
    };

    $scope.$on('$ionicView.beforeEnter', function() {
      $scope.navTitle = TitleService.getTitle();
    });

    // An alert dialog
    $scope.showAvailabilityAlert = function(title, template) {
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: template
      });
    };

    $scope.show = function() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
    };

    $scope.hide = function(){
      $ionicLoading.hide();
    };
}]);
