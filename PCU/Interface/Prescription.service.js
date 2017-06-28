'use strict';

angular.module('app').factory('PrescriptionService', ['$http',
    function ($http) {
        return {
            get: () => $http.get('/').then(response => response.data),
            add: driver => $http.post('/', driver).then(response => response.data)
        };
    }]);