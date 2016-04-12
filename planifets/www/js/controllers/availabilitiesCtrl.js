angular.module('planifETS.controllers').controller('AvailabilitiesCtrl',
  ['$scope', '$http', '$ionicLoading', '$location', 'TitleService',
  function($scope, $http, $ionicLoading, $location, TitleService){

  $scope.selectedField = {};

  $scope.viewAvailabilities = function() {
    TitleService.setTitle($scope.selectedField.value.title)

    // Start showing the progress
    $scope.show($ionicLoading);
    // Call the service to get the data

    $scope.hide($ionicLoading);

    //console.log($scope.selectedField.value);

    $location.path('app/availability');
  };

  $scope.fields = [
    { title: 'Automated manufacturing engineering', id: 1 },
    { title: 'Construction engineering', id: 2 },
    { title: 'Electrical engineering', id: 3 },
    { title: 'Information technology engineering', id: 4 },
    { title: 'Mechanical engineering', id: 5 },
    { title: 'Operations and logistics engineering', id: 6 },
    { title: 'Software engineering', id: 7 }
  ];

  // Setting the default value for the selector
  $scope.selectedField.value = $scope.fields[0];

  $scope.show = function() {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });
  };

  $scope.hide = function(){
    $ionicLoading.hide();
  };

}]);
