function SearchAdmission($scope) {
    console.log("hello controller");
    add1={
        id: "1000",
        firstName: "Jagath",
        lastName: "Asiri",
        dob:"1980-05-05",
        age: "37",
        blood: "AB-",
        bedtype:" ",
        department: "PATHOLOGY",
        gname: "Sitha Perera",
        gphone:"071 1509632"
    };
    add2={
        id: "1001",
        firstName: "Gaya",
        lastName: "Uthpala",
        dob:"1990-07-21",
        age: "27",
        blood: "O+",
        bedtype:" ",
        department: "STD",
        gname: "Saman Silva",
        gphone:"077 4539875"
    };
    add3={
        id: "2002",
        firstName: "Malik",
        lastName: "Mohomad",
        dob:"1995-04-06",
        age: "22",
        blood: "A-",
        bedtype:" ",
        department: "CARDIOLOGY",
        gname: "Nizan Mohomad",
        gphone:"075 8769412"
    };

    var admissions=[add1,add2,add3];
    $scope.admissions = admissions;
};

