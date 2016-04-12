angular.module('planifETS.controllers').factory('TitleService',[function() {

  var pageTitle = null;

  var setTitle = function(title) {
    pageTitle = title;
  };

  var getTitle = function() {
    return pageTitle;
  };

  return {
    getTitle : getTitle,
    setTitle : setTitle
  };
}])
