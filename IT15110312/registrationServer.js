/**
 * Created by DELL on 7/1/2017.
 */

var express=require('express');
var app=express();
var mongojs=require('mongojs');
var PCUreg=mongojs('PCU',['Registartion']);
//var PCU2=mongojs('PCU',['LabTest']);
var bodyParser=require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/Main.html');
});

app.get('/Registartion',function(req,res){

    PCUreg.Registartion.find(function(err,docs){

        res.json(docs);
        console.log(docs);
    });

});


//inserting values to the database
app.post('/Registartion',function(req,res){
    // console.log(req.body);
    PCUreg.Registartion.insert(req.body,function(err,docs){
        res.json(docs);//return data to controller

    });
});

//deleting values from the data base
app.delete('/Registartion/:id',function(req,res){
    var id=req.params.id
    PCUreg.Registartion.remove({_id:mongojs.ObjectId(id)},function(err,docs){
        res.json(docs);//remove  data to controller

    });
});

//load that data from db
app.get('/Registartion/:id',function(req,res){
    var id=req.params.id
    PCUreg.Registartion.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
        console.log(docs);
        res.json(docs);
    });

});

app.put('/Registartion/:id',function(req,res){
    var id=req.params.id
    PCUreg.Registartion.findAndModify({Query:{_id:mongojs.ObjectId(id)},
        update:{$set:{
            registration_number:req.body.registration_number,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            date_of_birth:req.body.date_of_birth,
            age : req.body.age,
            address : req.body.address,
            gender : req.body.gender,
            blood_group : req.body.blood_group,
            gurantor_name : req.body.gurantor_name,
            gurantor_phone: req.body.gurantor_phone,
            date_of_admission : req.body.date_of_admission,
            ward_status : req.body.ward_status,
            surgery_status : req.body.surgery_status,
            doctor_status : req.body.doctor_status,

        }},
        new:true},function(err,doc){
        res.json(doc);

    });

});


app.listen(4000);
console.log("server listning 4000");

