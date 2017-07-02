var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    getPres();
    function getPres() {
        $http.get('/Prescription/').then(response => {

            $scope.Prescriptions = response.data;
            $scope.Prescription = null;
    });
    };

    $scope.clear=function(){
        $scope.Prescription=null;
    };

    $scope.addPres = () => {
        $http.post('/Prescription/',$scope.Prescription).then(function(response){

            getPres();

        });
    };

    $scope.update = () =>{
        $http.put('/Prescription/'+$scope.Prescription._id,$scope.Prescription).then(function(response){

            getPres();
            clear();
        });
    };

    $scope.edit = (id) =>{
        $http.get('/Prescription/'+id).then(function(response){
            $scope.Prescription=response.data;

        });
    };

    $scope.remove = (id) =>{

        $http.delete('/Prescription/'+id).then(function(response){

            getPres();

        });
    };

    $scope.Prescription = [];

    $scope.addNew = function (Prescription) {
        $scope.Prescription.push({

            'patientID':Prescription,
            'testCode':Prescription,
            'testName':Prescription,
            'date':Prescription
        });
    };
    $scope.date = new Date();
}]);
