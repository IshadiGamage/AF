'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LabTestSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    testCode: {
        type: String,
        required: true
    },
    testName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

var LabTest = mongoose.model('LabTest', LabTestSchema);

module.exports = LabTest;