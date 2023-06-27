const mongoose = require('mongoose');

const { Schema } = mongoose;
const { instrumentationSchema } = require('./instrumentationModel')

const servicesSchema = new Schema({ 
    'serviceName': String,
    'resourceInfo': Object,
    'scopeMetric': instrumentationSchema
});

module.exports = mongoose.model('Services', servicesSchema);