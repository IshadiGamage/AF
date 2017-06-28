//angular.module('SearchPres',[]).controller('SearchController', function($scope) {

   // $scope.msg = "Hello World";

    //hardcode values for patient details
   /* $scope.prescriptions = [
        {
            patientID: "1000",
            prescriptionCode: "P10001",
            prescriptionName: "Aspin",
            category:"Narcotics",
            unit: "Spray",
            quantity: "1 bottel"
        },
        {
            patientID: "1001",
            prescriptionCode: "P10002",
            prescriptionName: "Afrin",
            category:"Injection",
            unit: "Amp",
            quantity: "1ml"
        },
        {
            patientID: "2002",
            prescriptionCode: "P10003",
            prescriptionName: "Amplicillin",
            category:"Narcotics",
            unit: "Amp",
            quantity: "10"

        }
];

});*/
'use strict';
var app = angular.module('app',['ngRoute']);

app.controller('Prescription', ['$scope', 'PrescriptionService', function ($scope, PrescriptionService) {
    getPrescription();
    function getPrescription() {
        PrescriptionService.get().then(prescriptions => {
            $scope.prescriptions = prescriptions;

        })
    }


    //function eke pass karanna one na, kelinma scope,driver denna
    $scope.addPrescription = () => {
        PrescriptionService.add($scope.prescription).then(() => {

           getPrescription();
            // $scope.driver = {};
        });
    };
}]);