/**
 * Created by DELL on 7/1/2017.
 */

'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegistartionSchema = new Schema({
    registration_number: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    blood_group: {
        type: String,
        required: true
    },
    gurantor_name: {
        type: String,
        required: true
    },

    gurantor_phone: {
        type: String,
        required: true
    },

    date_of_admission: {
        type: String,
        required: true
    },

    ward_status: {
        type: String,
        required: true
    },

    surgery_status: {
        type: String,
        required: true
    },
    doctor_status:{
        type: String,
        required: true

    }

});

var Registartion = mongoose.model('Registartion', RegistartionSchema);

module.exports = Registartion;