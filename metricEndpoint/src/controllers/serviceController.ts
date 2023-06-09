import type express from 'express';

import { type ServiceSchema, Services } from '../models/serviceModel';

export const allServicesGetter = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const servicesRes = await Services.find();

    if (!servicesRes) {
      throw new Error('failed to fetch services from Database');
    }

    res.locals.services = servicesRes.map(
      (service: ServiceSchema) => service.serviceName
    );

    if (!res.locals.services) throw new Error();

    return next();
  } catch (err) {
    return next({ log: err, message: 'Error getting services' });
  }
};

export const serviceGetter = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const { name } = req.params;

    const resourceMetrics = await Services.find({ serviceName: name });

    if (!resourceMetrics) throw new Error();

    res.locals.resourceMetrics = resourceMetrics;

    return next();
  } catch (err) {
    return next({
      log: err,
      message: 'Error getting individual service metrics',
    });
  }
};
