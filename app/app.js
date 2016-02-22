'use strict';

var app = angular.module('norcalShows', []);
app.controller('theList', ['$scope', '$http', function($scope, $http) {

  // get JSON of shows
  $http.get('http://bay-area-shows-api.herokuapp.com/v0.1/shows/')
    .then(function(res) {
      $scope.shows = res.data['data'];
    });
  $scope.lineupString = function(arr) { return arr.join(', '); };

}]);
