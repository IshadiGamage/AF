var app = angular.module('app',['ngRoute']);

app.controller('Prescription', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/Prescription.html');
        //$window.open('http://localhost:3000/PCU/Interface/Prescription.html');
    };
}]);

app.controller('LabTest', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/LabTest.html');
    };
}]);

app.controller('ManagePrescription', ['$scope','$window','$http', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Pres&Labs/ManagePrescription.html');

    };
}]);

app.controller('ManageLabTest', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Pres&Labs/ManageLabTest.html');
    };
}]);

app.controller('SearchPrescription', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Pres&Labs/SearchPrescription.html');
    };
}]);

app.controller('SearchLabTest', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Pres&Labs/SearchLabTest.html');
    };
}]);

app.controller('nonCritPatient', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/PatientManage.html');
    };
}]);

app.controller('CheckHistory', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/NonCritical/checkHistory.html');
    };
}]);

app.controller('NonCritical', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/NonCritical/Non-Critical.html');
    };
}]);

app.controller('AssignDoc', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/NonCritical/AssignDoc.html');
    };
}]);

app.controller('AssignWord', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/NonCritical/ManageWard.html');
    };
}]);

app.controller('NewCheck', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/NonCritical/NewCheck.html');
    };
}]);

app.controller('CriticalHome', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Critical/CriticalHome.html');
    };
}]);

app.controller('SearchPatient', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Critical/SearchPatient.html');
    };


}]);

app.controller('ManageWardDetails', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Critical/ManageWardDetails.html');
    };

}]);

app.controller('Reg-Admin', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Admission-Registration.html');
    };
}]);

app.controller('Admission', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:3000/PCU/Interface/Registration/admission.html');
		
		var admissions =
            [
                {
                    id: '1000',
                    firstName: 'Kamal',
                    lastName: 'Fernando',
                    dob: '20/05/1980',
                    age: '37',
                    blood: 'A+',
                    bedtype: 'Normal',
                    department: 'Cancer',
                    gname: 'Amal Fernando',
                    gphone: '0771234567'

                },
                {
                    id: '1001',
                    firstName: 'Mala',
                    lastName: 'Perera',
                    dob: '02/02/1978',
                    age: '39',
                    blood: 'O-',
                    bedtype: 'Luxury',
                    department: 'Eye',
                    gname: 'Nimal Perera',
                    gphone: '0112346798'
                }
            ];

        //var admissions =[admission1,admission2];
        $scope.admissions = admissions;
    };
}]);

app.controller('Registration', ['$scope','$window', function($scope,$window) {
    $scope.redirectToGoogle = function () {
        $window.open('http://localhost:63342/PCU/Interface/Registration/registration.html');
		
		registration1={
            id:'1000',
            firstName:'Kamal',
            lastName:'Fernando',
            dob:'20/05/1980',
            age:'37',
            address:'No 11,School Lane,Colombo',
            gender:'Male',
            blood:'A+',
            type:'critical',
            admsiondate:'20/04/2017'
        };
        registration2={
            id:'1001',
            firstName:'Mala',
            lastName:'Perera',
            dob:'02/02/1978',
            age:'39',
            address:'No 66,Temple road,colombo',
            gender:'Female',
            blood:'O-',
            type:'non-critical',
            admsiondate:'02/05/2017'
        };
        var registrations =[registration1,registration2];
        $scope.registrations = registrations;
    };
}]);