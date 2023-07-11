import express from 'express';

import { serviceGetter } from '../controllers/metricController';

const router = express.Router();

router.get('/', serviceGetter, (req, res) => {
  res.json(res.locals.services);
});

export default router;