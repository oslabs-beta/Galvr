import express from 'express';

import { ExportMetricsServiceResponse } from '../proto/metricTypes';
import {
  metricDecoder,
  metricParser,
  metricSaver,
} from '../controllers/metricController';

const router = express.Router();

/* Decode, parse, and save metrics provided by OTEL Collector */
router.post('/', metricDecoder, metricParser, metricSaver, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(
      ExportMetricsServiceResponse.encode(
        ExportMetricsServiceResponse.create()
      ).finish()
    );
});

export default router;
