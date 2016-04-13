angular.module('planifETS.controllers').factory('CourseService',[function() {

  var selectedCourse = null;
  var allCourses = [];

  var setSelectedCourse = function(course) {
    selectedCourse = course;
  };

  var getSelectedCourse = function() {
    return selectedCourse;
  };

  var getAllCourses = function() {
    return allCourses;
  }

  var setAllCourses = function(array) {
    allCourses = array;
  }

  return {
    getSelectedCourse : getSelectedCourse,
    setSelectedCourse : setSelectedCourse,
    getAllCourses : getAllCourses,
    setAllCourses : setAllCourses
  };
}])
