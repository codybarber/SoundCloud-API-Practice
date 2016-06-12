var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $http) {
  var APIKEY = '66d8dccff739cbb7c078f98e11993438';
  var playlist = '85976765';
  $http.get('http://api.soundcloud.com/playlists/' + playlist + '?client_id=' + APIKEY)
    .success(function(data) {
      $scope.user = data;
      console.log(data);
    });


});
