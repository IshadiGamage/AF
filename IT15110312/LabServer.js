/**
 * Created by nadika on 5/4/2017.
 */
var express=require('express');
var app=express();
var mongojs=require('mongojs');
var PCU=mongojs('PCU',['LabTest']);//db and the table
var bodyParser=require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/ManageLabTest.html');
});

app.get('/LabTests',function(req,res){

    PCU.LabTest.find(function(err,docs){
  console.log(docs);
  res.json(docs);
});

});


//inserting values to the database
app.post('/LabTests',function(req,res){
   console.log(req.body);
    PCU.LabTest.insert(req.body,function(err,docs){
        res.json(docs);//return data to controller

   });
});

app.delete('/LabTests/:id',function(req,res){
   var id=req.params.id
    PCU.LabTest.remove({_id:mongojs.ObjectId(id)},function(err,docs){
            res.json(docs);//remove  data to controller

   });
});

//load that data from db
app.get('/LabTests/:id',function(req,res){
var id=req.params.id
    PCU.LabTest.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
  console.log(docs);
  res.json(docs);
});

});

app.put('/LabTests/:id',function(req,res){
var id=req.params.id
    PCU.LabTest.findAndModify({Query:{_id:mongojs.ObjectId(id)},
update:{$set:{
    patientID:req.body.patientID,
    testCode:req.body.testCode,
    testName:req.body.testName,
    date:req.body.date}},
new:true},function(err,doc){
  res.json(doc);

});

});


app.listen(3001);
console.log("server listning 3001");
