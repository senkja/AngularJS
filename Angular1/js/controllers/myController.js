// create a controller
// rootScope hasznalata...
// a rootscope-ot minden controller lat, de csak azt tegyuk bele, amit feltetlen szukseges megosztani


myModule.controller("myController", ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
//  $scope.yourName="ALMA";  
//  $scope.yourJob="broker";  
//  $scope.yourAge="50";  

  
/*  
  $scope.user = {};
  $scope.user.name = "Joe";
  $scope.user.job = "lakatos";
  $scope.user.age = 25;
  
*/
  
//mashogy  
  
$scope.user = {};
  
  
$http.get("json/user.json")
  .then (
          function (data) {
            console.log(data);
          },
          function (data) {
            console.log('Error: ', data);
          });

/*  
  $scope.userfunc = function() {;
    this.name = "Joe";
    this.job = "lakatos";
    this.age = 25;
                                
    this.get = function (fieldname) {
      return this[fieldname];
    }
    return this;
  }
  
//  $scope.user = new $scope.userfunc();
  $scope.userObj = new $scope.userfunc();
  $scope.user.name = $scope.userObj.get('name');
  $scope.user.job = $scope.userObj.get('job');
  $scope.user.age = $scope.userObj.get('age');
*/  
  
/*
  $scope.user.age = function() {
    return 25*2;
  };
*/  
  
  
  $rootScope.user=$scope.user;
} ] );


