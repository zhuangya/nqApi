'use strict';

angular.module('nqApiApp')
  .factory('User', function ($resource, API_ROOT) {
    this.url = API_ROOT + 'user/:userId';

    return $resource(this.url, {
      userId: '@userId',
    }, {
      register: {
        method: 'POST',
        isArray: false,
      }
    });
  });
