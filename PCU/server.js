'use strict';

const bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose');

const app = express();

//const PresRouter = require('./Interface/Routers/Prescription.route');
var admissionModel=require('./Interface/DataModel/admission.model');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded // parse application/json

app.use(express.static(__dirname+'/Interface'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/PCU', err => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
    }
)

/*app.get('/',function (req,res) {
    console.log("i received get method");

    db.PrescriptionData.find(function (err,docs) {
        console.log(docs);
        res.json(docs);
    });
});

app.post('/',function (req,res) {
    console.log(req.body);

    db.PrescriptionData.insert(req.body,function (err,doc) {
        res.json(doc);
    })
});*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Interface/Main.html');
});

app.use('/',PresRouter);

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});