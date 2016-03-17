'use strict';

var app = angular.module('norcalShows', []);
app.controller('theList', ['$scope', '$http', function($scope, $http) {

  // get JSON of shows
  $http.get('https://norcal-shows-data.herokuapp.com/v0.1.0/shows/')
    .then(function(res) {
      $scope.shows = res.data['data'];
    });

  // transform array of strings into one comma-delimited string
  $scope.lineupString = function(arr) { return arr.join(', '); };

  // search string to try to match as a substring of lineup string
  $scope.lineupSearch = '';

  // search string to try to match as a substring of venue string
  $scope.venueSearch = '';

  // keep track of which days we are filtering out of the results
  $scope.dayFilter = {
      'SUN': false,
      'MON': false, 
      'TUE': false,
      'WED': false,
      'THR': false,
      'FRI': true,
      'SAT': true
  };

  // three custom angular filters

  $scope.filterByDay = function(a) {
    var day = a.when[0];
    if ($scope.dayFilter[day]) {
      return true;
    }
    else
    {
      return false;
    }
  };

  $scope.lineupFilter = function(a) {
    var i;
    for (i in a.who) {
      if (a.who[i].toLowerCase().indexOf($scope.lineupSearch) != -1) {
        return true;
      }
    }
    return false;
  };

  $scope.venueFilter = function(a) {
    if (a.where.toLowerCase().indexOf($scope.venueSearch) != -1) {
      return true;
    }
    return false;
  };
}]);
