angular.module('planifETS.controllers').controller('PlanningsCtrl', ['$scope', '$http', function($scope, $http){
  $scope.plannings = [
    { title: 'Summer 2016', id: 1 },
    { title: 'Autumn 2016', id: 2 },
    { title: 'Winter 2017', id: 3 },
    { title: 'Summer 2017', id: 4 },
    { title: 'Autumn 2017', id: 5 }
  ];
}]);
