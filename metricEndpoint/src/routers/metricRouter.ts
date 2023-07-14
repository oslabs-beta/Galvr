import express from 'express';

import { ExportMetricsServiceResponse } from '../proto/metricTypes';
import {
  metricDecoder,
  metricParser,
  metricSaver,
  // metricGetter,
} from '../controllers/metricController';

const router = express.Router();

router.post('/', metricDecoder, metricParser, metricSaver, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(
      ExportMetricsServiceResponse.encode(
        ExportMetricsServiceResponse.create()
      ).finish()
    );
});

/* A separate Router (metricsFromDBRouter) is currently used for handling requested from NextJS pod. */

// router.get('/', metricGetter, (req, res) => {
//   res.json(res.locals.metrics);
// });

export default router;
