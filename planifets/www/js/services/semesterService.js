angular.module('planifETS.controllers').factory('SemesterService',[ function() {

  var selectedSemester = null;
  var allSemesters = [];
  var currentSemester = null;

  var setSelectedSemester = function(semester) {
    selectedSemester = semester;
  };

  var getSelectedSemester = function() {
    return selectedSemester;
  };

  var getAllSemesters = function() {
    return allSemesters;
  };

  var setAllSemesters = function(array) {
    allSemesters = array;
  };

  var setCurrentSemester = function(semester) {
    currentSemester = semester;
  };

  var getCurrentSemester = function() {
    return currentSemester;
  };

  var getSemesterId = function(title) {
    var semesterId = null;

    for(var i = 0; 0 < allSemesters.length; i++) {
      if(title == allSemesters[i].semester) {
        semesterId = allSemesters[i].id;
        break;
      }
    }

    return semesterId;
  };

  return {
    getSelectedSemester : getSelectedSemester,
    setSelectedSemester : setSelectedSemester,
    getAllSemesters : getAllSemesters,
    setAllSemesters : setAllSemesters,
    getSemesterId : getSemesterId,
    setCurrentSemester : setCurrentSemester,
    getCurrentSemester : getCurrentSemester
  };
}]);
