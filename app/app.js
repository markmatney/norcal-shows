'use strict';

var app = angular.module('norcalShows', []);
app.controller('theList', ['$scope', '$http', function($scope, $http) {

  // get JSON of shows
  $http.get('https://norcal-shows-data.herokuapp.com/v0.1/shows/')
    .then(function(res) {
      $scope.shows = res.data['data'];
    });
  $scope.lineupString = function(arr) { return arr.join(', '); };
  $scope.lineupSearch = '';
  $scope.venueSearch = '';
  $scope.dayFilter = {
      'SUN': false,
      'MON': false, 
      'TUE': false,
      'WED': false,
      'THR': false,
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
  $scope.lineupFilter = function(a) {
      // if search text is a substring in the artist list, retu true
      var i;
      for (i in a.who) {
          if (a.who[i].toLowerCase().indexOf($scope.lineupSearch) != -1) {
              return true;
          }
      }
      return false;
  }
  $scope.venueFilter = function(a) {
      if (a.where.toLowerCase().indexOf($scope.venueSearch) != -1) {
          return true;
      }
      return false;
  }
}]);
