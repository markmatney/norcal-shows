'use strict';

var app = angular.module('norcalShows', []);
app.controller('theList', ['$scope', '$http', function($scope, $http) {

  // get JSON of shows
  $http.get('http://bay-area-shows-api.herokuapp.com/v0.1/shows/')
    .then(function(res) {
      $scope.shows = res.data['data'];
    });
  $scope.lineupString = function(arr) { return arr.join(', '); };
  $scope.dayFilter = {
	  'SUN': false,
	  'MON': false, 
	  'TUE': false,
	  'WED': false,
	  'THU': false,
	  'FRI': true,
	  'SAT': true
  };
  $scope.filterByDay = function(a) {
	  // return true if Day of a is selected in dayfilter
	  var day = a.when[0];
	  if ($scope.dayFilter[day]) {
		  return true;
	  }
	  else
	  {
		  return false;
	  }
  };

}]);
