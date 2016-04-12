angular.module('planifETS.controllers').factory('CourseService',[ function() {

  var selectedCourse = null;

  var setSelectedCourse = function(course) {
    selectedCourse = course;
  };

  var getSelectedCourse = function() {
    return selectedCourse;
  };

  return {
    getSelectedCourse : getSelectedCourse,
    setSelectedCourse : setSelectedCourse
  };
}])
