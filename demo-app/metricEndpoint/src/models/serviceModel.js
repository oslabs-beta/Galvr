const mongoose = require('mongoose');

const { Schema } = mongoose;
const { histogramSchema } = require('./histogramModel')

const Histogram = mongoose.model('Histogram', histogramSchema)

const servicesSchema = new Schema({ 
    service: String,
    histogram: Histogram
});

module.exports = mongoose.model('Services', servicesSchema);