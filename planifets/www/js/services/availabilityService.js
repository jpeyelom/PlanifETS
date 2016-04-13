angular.module('planifETS.controllers').factory('AvailabilityService', [function() {

  var allAvailabilities = [];
  var filteredAvailabilities = [];


  var getAllAvailabilities = function() {
    return allAvailabilities;
  };

  var setAllAvailabilities = function(array) {
    allAvailabilities = array;
  };

  var filterCourseAvailabilities = function(courseId){
    filteredAvailabilities = [];

    for (var j = 0; j < allAvailabilities.length; j++) {
      if (courseId == allAvailabilities[j].course) {
        filteredAvailabilities.push(allAvailabilities[j]);
      }
    }

    return filteredAvailabilities;
  };

  return {
    getAllAvailabilities : getAllAvailabilities,
    setAllAvailabilities : setAllAvailabilities,
    filterCourseAvailabilities : filterCourseAvailabilities
  };
}])
