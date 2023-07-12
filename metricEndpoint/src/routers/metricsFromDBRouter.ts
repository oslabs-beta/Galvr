import express from 'express';

import { metricGetter } from '../controllers/metricController';
import { allServicesGetter, serviceGetter } from '../controllers/serviceController';

const router = express.Router();

router.get('/', metricGetter, (req, res) => {
  // console.log('res.locals.metrics', res.locals.metrics)
  res.json(res.locals.metrics);
});

export default router;
