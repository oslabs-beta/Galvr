const mongoose = require('mongoose');

const { Schema } = mongoose;

const { histogramSchema } = require('./histogramModel')

const instrumentationSchema = new Schema({
    'instrument': {
        'type': String,
        'required': true,
    },
    'metric': {
        'name': String,
        'description': String,
        'unit': String,
        'required': true
    },
    'histogram': histogramSchema
})

module.exports = instrumentationSchema