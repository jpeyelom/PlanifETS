angular.module('planifETS.controllers').service('DataBaseService',['$http', 'Backand', function($http, Backand) {

  var baseUrl = '/1/objects/';

  return {
    // read all rows in the object
    readAll: function(objectName) {
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + baseUrl + objectName,
        params: {
          pageSize: 1000,
          pageNumber: 1,
          filter: null,
          sort: ''
        }
      }).then(
        function(response) {
          return response.data.data;
        });
    },

    // read one row with given id
    readOne: function(objectName, id) {
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + baseUrl + self.objectName
        + '/' + id
      }).then(
        function(response) {
          return response.data;
        });
    }
  };

}]);
