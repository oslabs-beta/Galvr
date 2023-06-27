const mongoose = require('mongoose');
// const dataPointsSchema = require('./datapointModel');

const { Schema } = mongoose;

const histogramSchema = new Schema({   
        'timeStamp': Date,
        'metaData': Object,
        'timeseries': {
            'timeField': 'timeStamp',
            'metaField': 'metaData',
            'granularity': 'seconds',
        },
        'expireAfterSeconds': 21600
    });

module.exports = histogramSchema;