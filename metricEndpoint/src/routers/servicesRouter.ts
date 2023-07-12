import express from 'express';

import { allServicesGetter, serviceGetter } from '../controllers/serviceController';

const router = express.Router();

router.get('/', allServicesGetter, (req, res) => {
  res.json(res.locals.services);
});

router.get('/:name', serviceGetter, (req,res) => {
    res.json(res.locals.resourceMetrics);
}) 

export default router;