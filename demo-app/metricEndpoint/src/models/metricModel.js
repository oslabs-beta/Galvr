const mongoose = require('mongoose');

const { Schema } = mongoose;

const { dataPointsSchema } = require('./histogramModel')

const dataPointsSchema = new Schema({
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