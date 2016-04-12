angular.module('planifETS.controllers').controller('AvailabilityCtrl',['$scope', 'TitleService',
  function($scope, TitleService){

  $scope.programTitle = null;

  $scope.semesters = [
    { title: 'W16', id: 1 },
    { title: 'S16', id: 2 },
    { title: 'A16', id: 3 },
    { title: 'W17', id: 4 },
    { title: 'S17', id: 5 }
  ];

  $scope.courses = [
    { title: 'ING160', id: 1 },
    { title: 'ING150', id: 2 },
    { title: 'TIN501', id: 3 },
    { title: 'GTI610', id: 4 },
    { title: 'GTI510', id: 5 }
  ];

  $scope.downloadPDF = function() {

  };
  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.programTitle = TitleService.getTitle();
  });

}]);
