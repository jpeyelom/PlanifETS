angular.module('planifETS.controllers').factory('AvailabilityService', [function() {

  var allAvailabilities = [];
  var filteredAvailabilities = [];
  var availabilityValue = [
    {value: 'D', id: 1},
    {value: 'N', id: 2},
    {value: 'DN', id: 3}
  ];

  var getAllAvailabilities = function() {
    return allAvailabilities;
  };

  var setAllAvailabilities = function(array) {
    allAvailabilities = array;
  };

  var filterCourseAvailabilities = function(courseId){
    filteredAvailabilities = [];

    for (var j = 0; j < allAvailabilities.length; j++) {
      if (courseId.toString() === allAvailabilities[j].course) {
        filteredAvailabilities.push(allAvailabilities[j]);
      }
    }

    return filteredAvailabilities;
  };

  var getAvailabilitiesById = function(id) {
    var availability = null;

    for(var i = 0; i < availabilityValue.length; i++) {
      if(id === availabilityValue[i].id) {
        availability = availabilityValue[i].value;
        break;
      }
    }

    return availability;
  };

  return {
    getAllAvailabilities : getAllAvailabilities,
    setAllAvailabilities : setAllAvailabilities,
    filterCourseAvailabilities : filterCourseAvailabilities,
    getAvailabilitiesById : getAvailabilitiesById
  };
}]);
