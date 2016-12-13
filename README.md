# javascript promises

#### Demo


<a  href="https://jsbin.com/dolamupeki/edit?html,js,output">demo on js bin</a>

---
#### Try it out
  ```
  git clone https://github.com/msorce/promises.git
  cd promises
  npm install
  npm run dev  
  //navigate to localhost:8080
  ```
  
---
#### app/index.js
```javascript
angular = require('angular');

var app = angular.module('app', []);
app.service('testService', function($q, $timeout) {

  this.getStuff = () => {
    return $q((resolve, reject) => {
      var log = document.getElementById('log');
      log.insertAdjacentHTML('beforeend', `<div>getting Stuff</div>`);
      $timeout(() => {
        resolve('got stuff');
      }, 2000);
    });
  };

});


app.controller('mainCtrl', ($scope, testService) => {
  $scope.fn = () => {
    var promise = testService.getStuff();
    promise.then((resolvedValue) => {
      log.insertAdjacentHTML('beforeend', `<div> ${resolvedValue} </div>`);
    });
  };

});
```
