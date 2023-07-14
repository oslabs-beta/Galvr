import mongoose from 'mongoose';

// const { instrumentationSchema } = require('./instrumentationModel')
import { type ParsedResourceMetrics } from '../proto/metricTypes';

if (process.env.NODE_ENV !== 'test')
  mongoose
    .connect('mongodb://mongo-svc:27017/galvr')
    .catch((err) => console.log(err));

// mongoose.connection.once('open', () => {
//   console.log('Connected to Database!');
// });

export interface ServiceSchema {
  serviceName: string;
  resourceMetrics: ParsedResourceMetrics;
}

const servicesSchema = new mongoose.Schema<ServiceSchema>(
  {
    serviceName: String,
    resourceMetrics: {},
  },
  { minimize: false }
);

export const Services = mongoose.model('Services', servicesSchema);
