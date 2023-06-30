import mongoose from 'mongoose';

import { type ParsedResourceMetrics } from '../proto/metricTypes';

mongoose
  .connect('mongodb://mongo-svc:27017/galvr')
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to Database!');
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
