# promises
###javascript promises
---
#### Demo


<a class="jsbin-embed" href="https://jsbin.com/dolamupeki/embed?html,js,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.2"></script>

---
####app/index.js
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
