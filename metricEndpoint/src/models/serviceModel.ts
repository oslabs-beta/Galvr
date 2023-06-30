import mongoose from 'mongoose';

// const { instrumentationSchema } = require('./instrumentationModel')
import { ParsedResourceMetrics } from "../proto/metricTypes";

export interface ServiceSchema {
    serviceName: string;
    scopeMetrics: ParsedResourceMetrics;
  }

const servicesSchema = new mongoose.Schema<ServiceSchema>({ 
    'serviceName': String,
    // 'resourceInfo': Object,
    'scopeMetrics': {},
});

export const Services = mongoose.model('Services', servicesSchema);