angular.module('planifETS.controllers').controller('PlanningCtrl',['$scope', 'TitleService', 'PlanningService',
  function($scope, TitleService, PlanningService){

  $scope.navTitle = null;
  $scope.showValid = false;
  $scope.showInvalid = false;
  $scope.available = [];
  $scope.planningCourses = PlanningService.getCoursesList();

  $scope.verifyAvailabilities = function() {
    $scope.showValid = ! $scope.showValid;
  };

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.navTitle = TitleService.getTitle();
  });
}]);
