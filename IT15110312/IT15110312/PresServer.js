/**
 * Created by nadika on 5/4/2017.
 */
var express=require('express');
var app=express();
var mongojs=require('mongojs');
var PCU1=mongojs('PCU',['Prescription']);
var PCU2=mongojs('PCU',['LabTest']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {

 res.sendFile(__dirname + '/public/Main.html');
 });

app.get('/Prescription',function(req,res){

    PCU1.Prescription.find(function(err,docs){

        res.json(docs);
        console.log(docs);
    });

});


//inserting values to the database
app.post('/Prescription',function(req,res){
   // console.log(req.body);
    PCU1.Prescription.insert(req.body,function(err,docs){
        res.json(docs);//return data to controller

    });
});

app.delete('/Prescription/:id',function(req,res){
    var id=req.params.id
    PCU1.Prescription.remove({_id:mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);//remove  data to controller

    });
});

//load that data from db
app.get('/Prescription/:id',function(req,res){
    var id=req.params.id
    PCU1.Prescription.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
        console.log(docs);
        res.json(docs);
    });

});

app.put('/Prescription/:id',function(req,res){
    var id=req.params.id
    PCU1.Prescription.findAndModify({Query:{_id:mongojs.ObjectId(id)},
        update:{$set:{
            patientID:req.body.patientID,
            type:req.body.type,
            prescriptionCode:req.body.prescriptionCode,
            prescriptionName:req.body.prescriptionName,
            category : req.body.category,
            unit : req.body.unit,
            quantity: req.body.quantity,
            date : req.body.date
        }},
        new:true},function(err,doc){
        res.json(doc);

    });

});

app.get('/LabTests',function(req,res){

    PCU2.LabTest.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    });

});


//inserting values to the database
app.post('/LabTests',function(req,res){
    console.log(req.body);
    PCU2.LabTest.insert(req.body,function(err,docs){
        res.json(docs);//return data to controller

    });
});

app.delete('/LabTests/:id',function(req,res){
    var id=req.params.id
    PCU2.LabTest.remove({_id:mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);//remove  data to controller

    });
});

//load that data from db
app.get('/LabTests/:id',function(req,res){
    var id=req.params.id
    PCU2.LabTest.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
        console.log(docs);
        res.json(docs);
    });

});

app.put('/LabTests/:id',function(req,res){
    var id=req.params.id
    PCU2.LabTest.findAndModify({Query:{_id:mongojs.ObjectId(id)},
        update:{$set:{
            patientID:req.body.patientID,
            testCode:req.body.testCode,
            testName:req.body.testName,
            date:req.body.date}},
        new:true},function(err,doc){
        res.json(doc);

    });

});

app.listen(4000);
console.log("server listning 4000");
