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

    for(var j = 0; j < allSemesters.length; j++) {
      if(title === allSemesters[j].semester) {
        semesterId = allSemesters[j].id;
        break;
      }
    }

    return semesterId;
  };

  var getSemesterById = function(id) {
    var semester = null;

    for(var i = 0; i < allSemesters.length; i++) {
      if(id === allSemesters[i].id) {
        semester = allSemesters[i].semester;
        break;
      }
    }

    return semester;
  };

  return {
    getSelectedSemester : getSelectedSemester,
    setSelectedSemester : setSelectedSemester,
    getAllSemesters : getAllSemesters,
    setAllSemesters : setAllSemesters,
    getSemesterId : getSemesterId,
    setCurrentSemester : setCurrentSemester,
    getCurrentSemester : getCurrentSemester,
    getSemesterById : getSemesterById
  };
}]);
