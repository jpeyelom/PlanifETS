angular.module('planifETS.controllers').factory('SemesterService',[ function() {

  var selectedSemester = null;
  var allSemesters = [];

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

  return {
    getSelectedSemester : getSelectedSemester,
    setSelectedSemester : setSelectedSemester,
    getAllSemesters : getAllSemesters,
    setAllSemesters : setAllSemesters
  };
}]);
