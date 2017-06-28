/**
 * Created by DELL on 6/28/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var AdmissionSchema = new Schema({
    admissionNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    age:{
        type:String,
        required:true
    },
    blood:{
        type:String,
        required:true
    },
    bed:{
        type:String,
        required:true

    },
    gname:{
        type:String,
        required:true
    },
    gphone:{
        type:String,
        required:true
    }

});

var Admission = mongoose.model('Admission', AdmissionSchema);

module.exports = Admission;