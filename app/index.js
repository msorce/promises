angular = require('angular');

var app = angular.module('app', []);
app.service('testService', function(){
  this.test = 'testing';
});

app.controller('mainCtrl', function($scope, testService){
  $scope.fn = function(){
    console.log('from main controller', testService.test);
  };
});
