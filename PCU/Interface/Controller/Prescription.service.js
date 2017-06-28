'use strict';

myModule.factory('PrescriptionService', ['$http', function ($http) {
    return {
        get: () => $http.get('/Prescription').then(response => response.data),
        add: prescription => $http.post('/Prescription', prescription).then(response => response.data),
        getById: id => $http.get('/Prescription/' + id).then(response => response.data),
        //addComment: (id, comment) => $http.post('/drivers/' + id + '/comments', comment).then(response => response.data),
    };
}]);