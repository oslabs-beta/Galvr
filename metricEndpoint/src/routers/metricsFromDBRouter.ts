import express from 'express';

import { metricGetter, serviceGetter } from '../controllers/metricController';

const router = express.Router();

router.get('/', metricGetter, (req, res) => {
  res.json(res.locals.metrics);
});

export default router;
