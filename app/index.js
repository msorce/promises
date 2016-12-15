angular = require('angular');

var app = angular.module('app', []);
app.service('testService', testService);

function testService($q, $timeout) {
  this.getStuff = () => {

    return $q((resolve, reject) => {
      var log = document.getElementById('log');
      log.insertAdjacentHTML('beforeend', `<div>getting Stuff $q</div>`);

      $timeout(() => {
        resolve('got with $q');
      }, 2000);

    });
  };

  this.getWithES6 = () => {
    return new Promise(function(resolve, reject){

      var log = document.getElementById('log');
      log.insertAdjacentHTML('beforeend', `<div>getting Stuff ES6</div>`);

      $timeout(() => {
        resolve('got with ES6')
      }, 2000)
    })
  }
}

app.controller('mainCtrl', mainCtrl);

function mainCtrl($scope, testService) {
  $scope.fn = () => {
    var promise = testService.getStuff();
    promise.then((resolvedValue) => {
      log.insertAdjacentHTML('beforeend', `<div> ${resolvedValue} </div>`);
    });
  };

  $scope.fn2 = () => {
    var promise = testService.getWithES6();
    promise.then((resolvedValue) => {
      log.insertAdjacentHTML('beforeend', `<div> ${resolvedValue} </div>`);
    });
  };
}
