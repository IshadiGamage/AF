const express = require('express');
const mongoose = require('mongoose');


mongoose.set('debug', false);

const router = express.Router();
const PresModel = require('../DataModel/prescription.model')


router.get('/',function (req,res) {
    PresModel.find().then(prescriptions => {
        res.json(prescriptions);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

router.post('/',function (req,res) {
    const prescription = new PresModel(req.body);
    prescriptions.save().then(prescriptions => {
        res.json(prescriptions);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = router;
