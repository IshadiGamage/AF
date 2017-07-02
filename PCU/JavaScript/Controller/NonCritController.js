function SearchHis($scope) {
    console.log("hello controller");
    his1={
        dep:"PATHOLOGY",
        pid:'100',
        wno: "17",
        wcategory: "MEDICINE",
        floor: "2",
        bed:"101",
        adate: "2017-01-07",
        ddate: "2017-20-22"
    };
    his2={
        dep:"RADIOLOGY",
        pid:'101',
        wno: "2",
        wcategory: "PAEDIATRICS",
        floor: "1",
        bed:"12",
        adate: "2017-04-01",
        ddate: "2017-04-29"
    };
    his3={
        dep:"CARDIOLOGY",
        pid:'202',
        wno: "1",
        wcategory: "ONCOLOGY",
        floor: "5",
        bed:"21",
        adate: "2017-03-06",
        ddate: "2017-05-02"
    };

    var history=[his1,his2,his3];
    $scope.history = history;
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