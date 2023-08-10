import mongoose from 'mongoose';

import { type ParsedResourceMetrics } from '../proto/metricTypes';

/* Initiate connection to MongoDB instance within cluster */
if (process.env.NODE_ENV !== 'test')
  mongoose
    .connect('mongodb://mongo-svc:27017/galvr')
    .catch((err) => console.log(err));

export interface ServiceSchema {
  serviceName: string;
  resourceMetrics: ParsedResourceMetrics;
};

/* Define schema for Service documents */
const servicesSchema = new mongoose.Schema<ServiceSchema>(
  {
    serviceName: String,
    resourceMetrics: {},
  },
  { minimize: false }
);

export const Services = mongoose.model('Services', servicesSchema);
