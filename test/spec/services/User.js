'use strict';

describe('Service: User', function () {

  // load the service's module
  beforeEach(angular.mock.module('nqApiApp'));

  // instantiate service
  var User;
  var $httpBackend;

  beforeEach(function() {
    angular.mock.inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      User = $injector.get('User');
    });
  });

  it('should register user', inject(function(User) {

    $httpBackend.expectPOST(User.url).respond({
      token: '37540512-c2a3-4f37-a6f9-b30dc5cd342b',
      user_id: 22
    });

    var result = User.register({
      email: 'one@test.com',
      password: 'password'
    });

    $httpBackend.flush();

    expect(result.token).toEqual('37540512-c2a3-4f37-a6f9-b30dc5cd342b');
    expect(result.user_id).toEqual(22);


  }));


});
