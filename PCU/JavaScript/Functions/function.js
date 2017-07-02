var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.set('port',process.env.PORT ||3000);
app.set('views',__dirname+'/views');
app.set('view engine','jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/PCU_FrontEnd');

var Schema = new mongoose.schema({
   patientId : String,
    presCode :String,
    presName:String,
    qty :number

});

var prescription = mongoose.model('pres',Schema);

app.post('/addPres',function (req,res) {
    new prescription({
        patientId : req.body.pid,
        presCode :req.body.code,
        presName :req.body.name,
        qty : req.body.qty 
    }).save(function (err,doc) {
        if(err) res.json(err);
        else res.send("successfully inserted")
    })
});

app.params('id',function (req,res,next,id) {
    prescription.findById(id,function (err,docs) {
        if(err) res.json(err);
        else{
            req.pid = doc;
            next();
        }
    });
});

app.put('/prescription/:id',function (req,res) {
    prescription.update({patientId:req.params.id},{
        presCode :req.body.code,
        presName :req.body.name,
        qty : req.body.qty
    },function (err) {
        if(err) res.json(err);
        else res.redirect('/prescription/'+req.params.id)
        }
    )
});

app.get('/prescription/:id/edit',function (req,res ) {
    res.$render('ManagePrescription',{prescription:req.pid});
});