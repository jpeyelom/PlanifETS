angular.module('planifETS.controllers').controller('AvailabilityCtrl',
  ['$scope', '$ionicLoading', 'TitleService', 'SemesterService',
    'CourseService', 'ProgramService', 'AvailabilityService',
  function($scope, $ionicLoading, TitleService, SemesterService,
           CourseService, ProgramService, AvailabilityService){

  $scope.programTitle = null;
  $scope.semesters = [];
  $scope.coursesToDisplay = [];
  $scope.allCourses = [];
  $scope.selectedProgram = null;
  $scope.programs = [];
  $scope.allAvailabilities = [];
  $scope.coursesFiltered = [];
  $scope.coursesAvailabilitiesFiltered = [];
  $scope.programId = null;
  $scope.availability = [
    {title: 'D', id: 1},
    {title: 'N', id: 2},
    {title: 'DN', id: 3}
  ];


  $scope.$on('$ionicView.beforeEnter', function() {
    // Start showing the progress
    $scope.show($ionicLoading);

    $scope.programTitle = TitleService.getTitle();
    $scope.semesters = SemesterService.getAllSemesters();

    var course = null;
    var courseId = null;
    var availabilityValue = "";
    var availabilityId = null;
    var semesterId = null;
    var item = {};
    var availability = {};
    var availabilities = [];

    $scope.allCourses = CourseService.getAllCourses();
    $scope.selectedProgram = ProgramService.getSelectedProgram();
    $scope.programs = ProgramService.getAllPrograms();
    $scope.allAvailabilities = AvailabilityService.getAllAvailabilities();

    for (var p = 0; p < $scope.programs.length; p++) {
      if ($scope.selectedProgram == $scope.programs[p].title) {
        $scope.programId = $scope.programs[p].id;
      }
    }

    for (var o = 0; o < $scope.allCourses.length; o++) {
      if ($scope.programId == $scope.allCourses[o].program) {
        $scope.coursesFiltered.push($scope.allCourses[o]);
      }
    }

    for (var i = 0; i < $scope.coursesFiltered.length; i++) {
      course = $scope.coursesFiltered[i];
      courseId = $scope.coursesFiltered[i].id;
      $scope.coursesAvailabilitiesFiltered = [];

      $scope.coursesAvailabilitiesFiltered = AvailabilityService.filterCourseAvailabilities(courseId);

      for (var k = 0; k < $scope.coursesAvailabilitiesFiltered.length; k++) {
        availabilityId = $scope.coursesAvailabilitiesFiltered[k].availability;
        semesterId = $scope.coursesAvailabilitiesFiltered[k].semester;

        for (var l = 0; l < $scope.availability.length; l++) {
          availabilityValue = "";
          if (availabilityId == $scope.availability[l].id) {
            availabilityValue = $scope.availability[l].title;
            break;
          }
        }

        availability = { semester: semesterId, availabilityValue: availabilityValue };
        availabilities.push(availability);
      }

      function sortBySemester(a, b){
        return a.semester - b.semester;
      }
      availabilities.sort(sortBySemester);

      item = { course: course, availabilities : availabilities };
      $scope.coursesToDisplay.push(item);
      availabilities = [];
    }

    $scope.hide($ionicLoading);
  });

    $scope.show = function() {
      $ionicLoading.show({
        template: '<ion-spinner></ion-spinner>'
      });
    };

    $scope.hide = function(){
      $ionicLoading.hide();
    };

}]);
