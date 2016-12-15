angular = require('angular');

var app = angular.module('app', []);
app.service('testService', testService);

function testService($q, $timeout) {
  this.getStuff = () => {
    return $q((resolve, reject) => {
      var log = document.getElementById('log');
      log.insertAdjacentHTML('beforeend', `<div>getting Stuff</div>`);
      $timeout(() => {
        resolve('got stuff');
      }, 2000);
    });
  };
}

app.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, testService) {
  $scope.fn = () => {
    var promise = testService.getStuff();
    promise.then((resolvedValue) => {
      log.insertAdjacentHTML('beforeend', `<div> ${resolvedValue} </div>`);
    });
  };
}
