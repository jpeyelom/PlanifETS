angular.module('planifETS.controllers').controller('AvailabilitiesCtrl',
  ['$scope', '$http', '$ionicLoading', '$location', 'TitleService', 'ProgramService',
  function($scope, $http, $ionicLoading, $location, TitleService, ProgramService){

  $scope.selectedField = {};

  $scope.viewAvailabilities = function() {
    TitleService.setTitle($scope.selectedField.value.title);
    ProgramService.setSelectedProgram($scope.selectedField.value.program);

    $location.path('app/availability');
  };

  $scope.fields = [
    { title: 'Automated manufacturing engineering', program: 'GPA', id: 1 },
    { title: 'Construction engineering', program: 'CTN', id: 2 },
    { title: 'Electrical engineering', program: 'ELE', id: 3 },
    { title: 'Information technology engineering', program: 'GTI', id: 4 },
    { title: 'Mechanical engineering', program: 'MEC', id: 5 },
    { title: 'Operations and logistics engineering', program: 'GOL', id: 6 },
    { title: 'Software engineering', program: 'LOG', id: 7 },
    { title: 'General lessons', program: 'SEG', id: 8 }
  ];

  // Setting the default value for the selector
  $scope.selectedField.value = $scope.fields[0];

}]);
