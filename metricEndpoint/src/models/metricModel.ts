import mongoose from 'mongoose';

import { type ParsedResourceMetrics } from '../proto/metricTypes';

const mongoURI =
  process.env.NODE_ENV === 'test'
    ? 'mongodb://mongo-svc:27017/test'
    : 'mongodb://mongo-svc:27017/galvr';

mongoose.connect(mongoURI).catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log(mongoURI);
  console.log('Connected to Database');
});

export interface testMetric {
  resourceString: string;
  metrics: ParsedResourceMetrics;
}

export const testSchema = new mongoose.Schema<testMetric>({
  resourceString: { type: String, required: true },
  metrics: {},
});

export const testModel = mongoose.model<testMetric>('Test', testSchema);
