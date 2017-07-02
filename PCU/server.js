var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('PrescriptionData',['PrescriptionData']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname+"/Interface"));
app.use(bodyParser.json());

/*app.get('/PrescriptionData',function (req,res) {
    console.log("i received get method");

    db.PrescriptionData.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/PrescriptionData',function (req,res) {
    console.log(req.body);

    db.PrescriptionData.insert(req.body,function (err,doc) {
        res.json(doc);
    })
});*/

app.listen(3000);
console.log("server is running port 3000");