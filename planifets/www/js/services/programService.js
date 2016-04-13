angular.module('planifETS.controllers').factory('ProgramService',[function() {

  var selectedProgram = null;
  var allPrograms = [];

  var setSelectedProgram = function(program) {
    selectedProgram = program;
  };

  var getSelectedProgram = function() {
    return selectedProgram;
  };

  var getAllPrograms = function() {
    return allPrograms;
  };

  var setAllPrograms = function(array) {
    allPrograms = array;
  };

  return {
    getSelectedProgram : getSelectedProgram,
    setSelectedProgram : setSelectedProgram,
    getAllPrograms : getAllPrograms,
    setAllPrograms : setAllPrograms
  };
}]);
