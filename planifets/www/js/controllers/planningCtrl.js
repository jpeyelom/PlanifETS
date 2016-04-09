angular.module('planifETS.controllers').controller('PlanningCtrl',
  function($scope, TitleService, PlanningService){

  $scope.navTitle = null;
  $scope.showValid = false;
  $scope.showInvalid = false;
  $scope.available = [];
  $scope.planningCourses = PlanningService.getCoursesList();

  $scope.$on('$ionicView.beforeEnter', function() {
    $scope.navTitle = TitleService.getTitle();
  });
});
