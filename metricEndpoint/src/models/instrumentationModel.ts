import mongoose from 'mongoose';

const { histogramSchema } = require('./histogramModel')

interface InstrumentationMetric {
    instrumentation: string
    metric: {
        name: string,
        description: string,
        unit: string,
    }
    histogram: any
}

const instrumentationSchema = new mongoose.Schema<InstrumentationMetric>({
    'instrumentation': {
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
});

module.exports = instrumentationSchema