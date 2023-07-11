import mongoose from 'mongoose';

// const { instrumentationSchema } = require('./instrumentationModel')
import { ParsedResourceMetrics } from "../proto/metricTypes";

mongoose
  .connect('mongodb://mongo-svc:27017/galvr')
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to Database! ServiceModel');
});

export interface ServiceSchema {
    serviceName: string;
    resourceMetrics: ParsedResourceMetrics;
  }

const servicesSchema = new mongoose.Schema<ServiceSchema>({ 
    'serviceName': String,
    'resourceMetrics': {},
});

export const Services = mongoose.model('Services', servicesSchema);