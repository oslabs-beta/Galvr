const mongoose = require('mongoose');

const { Schema } = mongoose;

const { histogramSchema } = require('./histogramModel')

const instrumentationSchema = new Schema({
    'instrument': String,
    'metric': {
        'name': String,
        'description': String,
        'unit': String
    },
    'dataPoints': [
         histogramSchema
    ]
})

module.exports = instrumentationSchema