angular.module('planifETS.controllers').controller('PlanningsCtrl', function($scope, $ionicListDelegate){

  $scope.listCanSwipe = true;
  $scope.showDelete = false;
  $scope.showReorder = false;

  $scope.toggleDelete = function() {
    $scope.showDelete = !$scope.showDelete;
    $scope.showReorder = false;
    $ionicListDelegate.showDelete($scope.showDelete);
  };

  $scope.toggleReorder = function() {
    $scope.showDelete = false;
    $scope.showReorder = !$scope.showReorder;
    $ionicListDelegate.showReorder($scope.showReorder);
  };

  $scope.editItem = function(planning) {
    alert('Edit Planning: ' + planning.id);
    $ionicListDelegate.closeOptionButtons();  // this closes swipe option buttons after alert
  };

  $scope.moveItem = function(planning, fromIndex, toIndex) {
    $scope.plannings.splice(fromIndex, 1);
    $scope.plannings.splice(toIndex, 0, planning);
  };

  $scope.onItemDelete = function(planning) {
    $scope.plannings.splice($scope.plannings.indexOf(planning), 1);
  };

  $scope.createPlanning = function() {
    
  };

  $scope.plannings = [
    { title: 'Summer 2016', id: 1 },
    { title: 'Autumn 2016', id: 2 },
    { title: 'Winter 2017', id: 3 },
    { title: 'Summer 2017', id: 4 },
    { title: 'Autumn 2017', id: 5 },
    { title: 'Summer 2016', id: 1 },
    { title: 'Autumn 2016', id: 2 },
    { title: 'Winter 2017', id: 3 },
    { title: 'Summer 2017', id: 4 },
    { title: 'Autumn 2017', id: 5 },
    { title: 'Summer 2016', id: 1 },
    { title: 'Autumn 2016', id: 2 },
    { title: 'Winter 2017', id: 3 },
    { title: 'Summer 2017', id: 4 },
    { title: 'Autumn 2017', id: 5 }
  ];

});
