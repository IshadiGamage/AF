'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PrescriptionSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    prescriptionCode: {
        type: String,
        required: true
    },
    prescriptionName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

var Prescription = mongoose.model('Prescription', PrescriptionSchema);

module.exports = Prescription;