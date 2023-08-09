import express from 'express';

import { allServicesGetter, serviceGetter } from '../controllers/serviceController';

const router = express.Router();

/* Get array of service names for drop-down menu */
router.get('/', allServicesGetter, (req, res) => {
  res.json(res.locals.services);
});

/* Get current metrics for service by name */
router.get('/:name', serviceGetter, (req,res) => {
    res.json(res.locals.resourceMetrics);
}) 

export default router;
