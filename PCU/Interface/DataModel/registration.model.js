/**
 * Created by DELL on 6/28/2017.
 */
'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var RegSchema = new Schema({
    registrationNo: {
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
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true

    },
    blood:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    admsiondate:{
        type:Date,
        required:true
    },

});

var Registration = mongoose.model('Registration', RegSchema);

module.exports = Registration;


