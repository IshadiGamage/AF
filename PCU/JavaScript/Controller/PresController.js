function SearchPres($scope) {
    console.log("hello controller");
    pres1={
        patientID: "1000",
        prescriptionCode: "P10001",
        prescriptionName: "Aspin",
        category:"Narcotics",
        unit: "Spray",
        quantity: "1 bottel"
    };
    pres2={
        patientID: "1001",
        prescriptionCode: "P10002",
        prescriptionName: "Afrin",
        category:"Injection",
        unit: "Amp",
        quantity: "1ml"
    };
    pres3={
        patientID: "2002",
        prescriptionCode: "P10003",
        prescriptionName: "Amplicillin",
        category:"Narcotics",
        unit: "Amp",
        quantity: "10"
    };

    var prescriptions=[pres1,pres2,pres3];
    $scope.prescriptions = prescriptions;
};

function SearchLab($scope) {
    console.log("hello controller");
    test1={
        patientID: "1000",
        testCode: "L10001",
        testName: "MRI",
        date:"2017-01-28"
    };
    test2={
        patientID: "1001",
        testCode: "L10002",
        testName: "Blood",
        date:"2017-02-02"
    };
    test3={
        patientID: "2002",
        testCode: "L10003",
        testName: "Urin",
        date:"2017-04-05"
    };

    var Tests=[test1,test2,test3];
    $scope.Tests = Tests;
};