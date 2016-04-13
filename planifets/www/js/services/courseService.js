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
  };

  var setAllCourses = function(array) {
    allCourses = array;
  };

  var getCourseId = function(title) {
    var courseId = null;

    for(var i = 0; i < allCourses.length; i++) {
      if(title == allCourses[i].title) {
        courseId = allCourses[i].id;
        break;
      }
    }

    return courseId;
  };

  return {
    getSelectedCourse : getSelectedCourse,
    setSelectedCourse : setSelectedCourse,
    getAllCourses : getAllCourses,
    setAllCourses : setAllCourses,
    getCourseId : getCourseId
  };
}]);
