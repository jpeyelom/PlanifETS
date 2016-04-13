angular.module('planifETS.controllers').factory('AvailabilityService', [function() {

  var allAvailabilities = [];


  var getAllAvailabilities = function() {
    return allAvailabilities;
  };

  var setAllAvailabilities = function(array) {
    allAvailabilities = array;
  };

  return {
    getAllAvailabilities : getAllAvailabilities,
    setAllAvailabilities : setAllAvailabilities
  };
}])
