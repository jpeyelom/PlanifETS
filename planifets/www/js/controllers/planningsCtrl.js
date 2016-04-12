angular.module('planifETS.controllers').controller('PlanningsCtrl',
  ['$scope', '$ionicListDelegate', '$ionicPopup', '$location',
    'TitleService', '$ionicModal', 'CourseService', 'PlanningService',
  function($scope, $ionicListDelegate, $ionicPopup, $location, TitleService,
           $ionicModal, CourseService, PlanningService){

  $scope.listCanSwipe = true;
  $scope.showDelete = false;
  $scope.showReorder = false;
  $scope.navTitle = null;
  $scope.showDeletePlanning = false;
  $scope.showReorderPlanning = false;
  $scope.listCanSwipePlanning = false;
  $scope.selectedSemester = {};

  $scope.semesters = [
    { semester: 'W16', id: 1 },
    { semester: 'S16', id: 2 },
    { semester: 'A16', id: 3 },
    { semester: 'W17', id: 4 },
    { semester: 'S17', id: 5 }
  ];

  $scope.tempPlanning = {
    selectedCourses: []
  };

  $scope.plannings = {};
  $scope.plannings.semesterPlanning = PlanningService.getPlanningList();

  // $scope.plannings = {
  //   semesterPlanning : [
  //     { title: 'Winter 2016',
  //       semester: 'W16',
  //       courses: [
  //         { course: 'ING150' },
  //         { course: 'MAT450' }
  //       ],
  //       id: 1
  //     },
  //     { title: 'Summer 2016',
  //       semester: 'S16',
  //       courses: [
  //         { course: 'TIN501' },
  //         { course: 'GTI210' }
  //       ],
  //       id: 2
  //     },
  //     { title: 'Winter 2017',
  //       semester: 'W17',
  //       courses: [
  //         { course: 'GTI310' },
  //         { course: 'MAT560' }
  //       ],
  //       id: 3
  //     },
  //     { title: 'Summer 2017',
  //       semester: 'S17',
  //       courses: [
  //         { course: 'ING160' },
  //         { course: 'MAD123' }
  //       ],
  //       id: 4
  //     },
  //   ]
  // };

  $scope.allCourses = {
    courses : [
      {title: 'ANG001', id: 1},
      {title: 'BNG002', id: 2},
      {title: 'CNG003', id: 3},
      {title: 'DNG004', id: 4},
      {title: 'ENG005', id: 5},
      {title: 'FNG006', id: 6},
      {title: 'GNG007', id: 7},
      {title: 'HNG008', id: 8},
      {title: 'ING009', id: 9},
      {title: 'JNG010', id: 10},
      {title: 'KNG011', id: 11},
      {title: 'LNG012', id: 12},
      {title: 'MNG013', id: 13},
      {title: 'NNG014', id: 14},
      {title: 'ONG015', id: 15}
    ],
    selectedCourse : null
  };

  // Setting the default value for the selector
  $scope.selectedSemester.value = $scope.semesters[0];
  $scope.filterBySemester = $scope.semesters[0].semester;

  // Load the create / edit dialog from the given template URL
  $ionicModal.fromTemplateUrl('templates/createPlanning.html', function(modal) {
    $scope.addDialog = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.toggleDelete = function() {
    $scope.showDelete = !$scope.showDelete;
    $scope.showReorder = false;
    $ionicListDelegate.showDelete($scope.showDelete);
  };

  $scope.toggleDeleteDialog = function() {
    $scope.showDeletePlanning = !$scope.showDeletePlanning;
    $ionicListDelegate.showDelete($scope.showDeletePlanning);
  };

  $scope.toggleReorder = function() {
    $scope.showDelete = false;
    $scope.showReorder = !$scope.showReorder;
    $ionicListDelegate.showReorder($scope.showReorder);
  };

  $scope.moveItem = function(planning, fromIndex, toIndex) {
    $scope.plannings.semesterPlanning.splice(fromIndex, 1);
    $scope.plannings.semesterPlanning.splice(toIndex, 0, planning);
  };

  $scope.onItemDelete = function(planning, form) {
    if (form == 'view'){
      $scope.plannings.semesterPlanning.splice($scope.plannings.semesterPlanning.indexOf(planning), 1);
      PlanningService.setPlanningList($scope.plannings.semesterPlanning);
    } else if (form == 'dialog') {
      $scope.tempPlanning.selectedCourses.splice($scope.tempPlanning.selectedCourses.indexOf(planning), 1);
    }
  };

  // A confirm dialog
  $scope.showConfirm = function(planning) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirmation',
      template: 'Are you sure you want to delete "' + planning.semester + '" ?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $scope.onItemDelete(planning, 'view')
      } else {
        $ionicListDelegate.closeOptionButtons();  // this closes swipe option buttons after alert
      }
    });
  };

  $scope.showCreatePlanningDialog = function(action) {
    $ionicListDelegate.closeOptionButtons();  // this closes swipe option buttons after alert
    $scope.action = action;

    if(action == 'add') {
      $scope.navTitle ="Create Planning";
    }

    $scope.addDialog.show();
  };

  $scope.leaveCreatePlanningDialog = function() {
    // Remove dialog
    $scope.addDialog.remove();
    // Reload modal template to have cleared form
    $ionicModal.fromTemplateUrl('templates/createPlanning.html', function(modal) {
      $scope.addDialog = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });
  };

  $scope.showEditPlanningItem = function(item) {

    // Remember edit item to change it later
    $scope.tmpEditItem = item;
    $scope.tempEditCourse = [];

    var semester = $scope.semesters;
    var currentPlanningCourses = item.courses;
    var currentPlanningSemester = item.semester;
    var course = {};

    // Setting current semester in dialog
    for (var i = 0; i < semester.length; i++) {
      if (semester[i].semester == currentPlanningSemester){
        $scope.selectedSemester.value = semester[i];
      }
    }

    // Setting current courses in temp planning
    for (var i = 0; i < currentPlanningCourses.length; i++) {
      $scope.tempEditCourse.push(currentPlanningCourses[i]);
    }

    // Setting current courses in temp planning
    $scope.tempPlanning.selectedCourses = $scope.tempEditCourse;

    $scope.navTitle = "Edit - " + item.title;
    $ionicListDelegate.closeOptionButtons();

    // Open dialog
    $scope.showCreatePlanningDialog('edit');
  };

  $scope.addCourse = function() {
    $scope.allCourses.selectedCourse = CourseService.getSelectedCourse();

    if ($scope.allCourses.selectedCourse) {
      var item = {
        course: $scope.allCourses.selectedCourse.title
      };
      $scope.onCourseAdd(item);
    }
  };

  $scope.onCourseAdd = function(item) {
    var courseExist = false;
    var planning = $scope.tempPlanning.selectedCourses;

    for (var i = 0; i < planning.length; i++) {
      if (planning[i].course == item.course){
        courseExist = true;
      }
    }

    if (courseExist) {
      var title = 'Can\'t add course!';
      var template = item.course + ' is already in your planning. Please select another course.';
      $scope.showCourseAlert(title, template);
    } else {
      planning.push(item);
    }
  }

  $scope.createPlanning = function() {
    var tempPlanning = $scope.tempPlanning.selectedCourses;
    var plannings = $scope.plannings.semesterPlanning;
    var selectedSemester = $scope.selectedSemester.value.semester;
    var planningId = plannings.length + 1;

    if (tempPlanning.length > 0) {
      var title = $scope.createName(selectedSemester);
      var planning = {
        title: title,
        semester: selectedSemester,
        courses: tempPlanning,
        id: planningId
      };
      $scope.plannings.semesterPlanning.push(planning);
      PlanningService.setPlanningList(plannings);
      $scope.leaveCreatePlanningDialog();
    } else {
      var title = 'Can\'t create planning!';
      var template = 'Planning is empty. Please add at least one course to your planning before creating.';
      $scope.showCourseAlert(title, template);
    }
  };

  $scope.editPlanning = function() {
    var tempPlanning = $scope.tempPlanning.selectedCourses;
    var plannings = $scope.plannings.semesterPlanning;
    var selectedSemester = $scope.selectedSemester.value.semester;

    for (var i = 0; i < plannings.length; i++) {
      if (plannings[i].id == $scope.tmpEditItem.id) {
        $scope.plannings.semesterPlanning[i].courses = tempPlanning;

        if (plannings[i].semester != selectedSemester) {
          var title = $scope.createName(selectedSemester);
          $scope.plannings.semesterPlanning[i].title = title;
        }

        $scope.plannings.semesterPlanning[i].semester = selectedSemester;
      }
    }

    PlanningService.setPlanningList($scope.plannings.semesterPlanning);
    $scope.leaveCreatePlanningDialog();
  };

  $scope.createName = function(selectedSemester) {
    var summer = selectedSemester.search('S');
    var autumn = selectedSemester.search('A');
    var winter = selectedSemester.search('W');
    var year = selectedSemester.slice(1, 3);
    var title = "";

    if(summer != -1) {
      title = "Summer 20" + year;
    } else if (autumn != -1) {
      title = "Autumn 20" + year;
    } else if (winter != -1) {
      title = "Winter 20" + year;
    }

    return title;
  }

  // An alert dialog
  $scope.showCourseAlert = function(title, template) {
    var alertPopup = $ionicPopup.alert({
      title: title,
      template: template
    });
  };

  $scope.setPlanningList = function(planning) {
    $scope.setTitle(planning);
    PlanningService.setCoursesList(planning.courses);
  };

  $scope.setTitle = function(planning) {
    TitleService.setTitle(planning.title);
  };

  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
    $scope.tempPlanning.selectedCourses = [];
    $scope.allCourses.selectedCourse = null;
    $scope.selectedSemester.value = $scope.semesters[0];
  });
}]);
