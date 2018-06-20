myModule.controller("myController2", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.user = $rootScope.user;
  // greeting
  $scope.greeting = function() {
    return 'Szia ' + $scope.user.name + '. Te ' + $scope.user.age + ' eves vagy, es ' + $scope.user.job + ' munkakorben dolgozol.';
  }
} ] );
