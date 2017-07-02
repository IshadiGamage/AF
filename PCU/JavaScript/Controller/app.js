var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider


        .when('/Prescription', {
            templateUrl : 'Prescription.html',
            controller  : 'Prescription'
        })


        .when('/LabTest', {
            templateUrl : 'LabTest.html',
            controller  : 'LabTest'
        })

        .when('/ManagePrescription', {
            templateUrl : 'Prescription.html',
            controller  : 'ManagePrescription'
        })


        .when('/ManageLabTest', {
            templateUrl : 'LabTest.html',
            controller  : 'ManageLabTest'
        })


        .when('/SearchPrescription', {
            templateUrl : 'Prescription.html',
            controller  : 'SearchPrescription'
        })

        .when('/SearchLabTest', {
            templateUrl : 'LabTest.html',
            controller  : 'SearchLabTest'
        })
        .when('/nonCritPatient', {
            templateUrl : 'PatientManage.html',
            controller  : 'nonCritPatient'
        })
        .when('/CheckHistory', {
            templateUrl : 'PatientManage.html',
            controller  : 'CheckHistory'
        })
        .when('/NonCritical', {
           // templateUrl : 'PatientManage.html',
            controller  : 'NonCritical'
        })
        .when('/AssignDoc', {
            templateUrl : 'PatientManage.html',
            controller  : 'AssignDoc'
        })
        .when('/AssignWord', {
            templateUrl : 'PatientManage.html',
            controller  : 'AssignWord'
        })
        .when('/NewCheck', {
            templateUrl : 'PatientManage.html',
            controller  : 'NewCheck'
        })
        .when('/CriticalHome', {
            templateUrl : 'CriticalHome.html',
            controller  : 'CriticalHome'
        })
        .when('/SearchPatient', {
            templateUrl : 'SearchPatient.html',
            controller  : 'SearchPatient'
        })
        .when('/ManageWardDetails', {
            templateUrl : 'ManageWardDetails.html',
            controller  : 'ManageWardDetails'
        })
        .when('/Home', {
            templateUrl : 'Main.html',
            controller  : 'Home'
        })
        .when('/Admission', {
            //templateUrl : 'Admission.html',
            controller  : 'Admission'
        })
        .when('/Registration', {
           //templateUrl : 'Admission.html',
            controller  : 'Registration'
        })
        .when('/Reg-Admin', {
            //templateUrl : 'Admission.html',
            controller  : 'Reg-Admin'
        });
}]);