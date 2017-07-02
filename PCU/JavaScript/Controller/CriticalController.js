angular.module('SearchApp',[]).controller('SearchController', function($scope) {

    $scope.msg = "Hello World";

    //hardcode values for patient details
    $scope.patients = [
        {
            "Title": "Miss.",
            "FirstName": "Nuwani",
            "LastName": "Jayathilake",
            "DateofBirth": "1995-11-27",
            "Age": 21,
            "NIC": "952881914V",
            "Nationality": "Sinhala",
            "CivilStatus": "Single",
            "Address": "Wallampitiya,Colombo",
            "Status": "Critical",
            "Surgery_Treatments": "Treatment",
            "RegisterDate": "2016-05-06"
        },
        {
            "Title": "Miss.",
            "FirstName": "Pinky",
            "LastName": "Wijewadana",
            "DateofBirth": "1996-10-27",
            "Age": 20,
            "NIC": "962444444V",
            "Nationality": "Sinhala",
            "CivilStatus": "Married",
            "Address": "Pannipitiya,Sri Lanka",
            "Status": "Critical",
            "Surgery_Treatments": "surgery",
            "RegisterDate": "2017-05-06"
        },
        {
            "Title": "Mr.",
            "FirstName": "Jone",
            "LastName": "Pole",
            "DateofBirth": "1999-05-27",
            "Age": 18,
            "NIC": "992456844v",
            "Nationality": "Sinhala",
            "CivilStatus": "Married",
            "Address": "Australia",
            "Status": "Normal",
            "Surgery_Treatments": "surgery",
            "RegisterDate": "2017-05-06"
        },
        {
            "Title": "Mr.",
            "FirstName": "Krish",
            "LastName": "Kanagarathnam",
            "DateofBirth": "1946-05-27",
            "Age": 79,
            "NIC": "462456844v",
            "Nationality": "Sinhala",
            "CivilStatus": "Married",
            "Address": "Rajagiriya,Sri Lanka",
            "Status": "Critical",
            "Surgery_Treatments": "surgery",
            "RegisterDate": "2017-04-06"
        },
        {
            "Title": "Dr.",
            "FirstName": "Jagath",
            "LastName": "Jayasekara",
            "DateofBirth": "1978-05-27",
            "Age": 50,
            "NIC": "788956844v",
            "Nationality": "Sinhala",
            "CivilStatus": "Married",
            "Address": "America",
            "Status": "Critical",
            "Surgery_Treatments":"surgery",
            "RegisterDate": "2017-05-06"
        }
    ];

    //hardcode values for doctor details
    $scope.Doctors = [
        {
            "Id":1,
            "Name":"S.W.R.D.Bandaranayake",
            "Speciality":"cardiology",
            "NoOfPatients" : 4
        },
        {
            "Id":2,
            "Name":"Koliya Pulathisi",
            "Speciality":"physiologist",
            "NoOfPatients" : 4

        }


    ];


    //ward Details
    $scope.wards = [
        {
            "category": "child",
            "No": 2,
            "TotalBeds": 500,
            "Availability":200
        },
        {
            "category": "Paid",
            "No": 5,
            "TotalBeds": 250,
            "Availability":80
        },
        {
            "category": "Paid",
            "No": 6,
            "TotalBeds": 300,
            "Availability":90
        },

    ];

    //get all categories of wards
    $scope.wards=[];
    $scope.temObj ={};
    $scope.Add = function (val) {
        $scope.temObj={
            "category" : val.category,
            "No" : val.No,
            "BedNo" : val.BedNo,
            "PatientId":val.PatientId,
            "AdmitDate" : "",
            "DischargeDate" : "",

        }
        wards.push($scope.temObj);
        $scope.ward = {};
    }


});
