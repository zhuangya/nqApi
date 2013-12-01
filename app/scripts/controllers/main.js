'use strict';

angular.module('nqApiApp')
  .controller('MainCtrl', function ($scope, User) {
    User.register({
      email: 'hi' + new Date().getTime() + '@te.st',
      password: 'password'
    }, function(resp) {
      console.log(resp);
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
