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
  ```
  navigate to localhost:8080
---
#### app/index.js
```javascript
angular = require('angular');

var app = angular.module('app', []);
app.service('testService', function($q, $timeout) {

  this.getStuff = $q(function(resolve, reject) {
    console.log('getting stuff');
    $timeout(function() {
      resolve('got stuff');
    }, 2000);
  });
}); //end getStuff


app.controller('mainCtrl', function($scope, testService) {
  testService.getStuff.then(function(data) {
    console.log(data);
  });
});
```
