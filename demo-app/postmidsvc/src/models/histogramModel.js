const mongoose = require('mongoose');

const { Schema } = mongoose;

const histogramSchema = new Schema({   
        timestamp: Date,
        metaData:Object,
        timeseries: {
            timeField: 'timeStamp',
            metaField: 'metaData',
            granularity: 'seconds',
        },
        expireAfterSeconds: 21600
    });

module.exports = histogramSchema;