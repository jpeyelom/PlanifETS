angular.module('planifETS.controllers').factory('PlanningService', [ function() {

  var planningList = null;
  var coursesList = null;
  var currentPlanningId = localStorage.getItem("currentPlanningId");;
  var planningListStore = localStorage.getItem("planningList");
  var coursesListStore = localStorage.getItem("coursesList");
  if (planningListStore != null && planningListStore != '' && angular.isArray(angular.fromJson(planningListStore))) {
    planningList = angular.fromJson(planningListStore);
  }
  if (coursesListStore != null && coursesListStore != '' && angular.isArray(angular.fromJson(coursesListStore))) {
    coursesList = angular.fromJson(coursesListStore);
  }
  var listSrv = {
    setPlanningList: function(newList) {
      planningList = newList;
      localStorage.setItem("planningList", angular.toJson(planningList));
      return true;
    },
    getPlanningList: function() {
      if (planningList != null) {
        return planningList;
      } else {
        return [];
      }
    },
    setCoursesList: function(newList) {
      coursesList = newList;
      localStorage.setItem("coursesList", angular.toJson(coursesList));
      return true;
    },
    getCoursesList: function() {
      if (coursesList != null) {
        return coursesList;
      } else {
        return [];
      }
    },
    setCurrentPlanningId: function(id) {
      currentPlanningId = id;
      localStorage.setItem("currentPlanningId", angular.toJson(currentPlanningId));
      return true;
    },
    getCurrentPlanningId: function() {
      return currentPlanningId;
    },
    getCurrentPlanning: function() {
      var planning = null;

      for(var i = 0; 0 < planningList.length; i++) {
        if(currentPlanningId == planningList[i].id) {
          planning = planningList[i];
          break;
        }
      }
      return planning;
    }
  };
  return listSrv;
}]);
