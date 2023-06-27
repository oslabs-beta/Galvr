import type express from 'express';

import { ExportTraceServiceRequest } from '../proto/traceTypes';

export const traceDecoder = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    if (req.body) {
      const trace = ExportTraceServiceRequest.decode(req.body);
      res.locals.trace = trace;
    }
    return next();
  } catch (err) {
    return next({ log: err, message: 'Error decoding trace' });
  }
};

export const traceSaver = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    if (res.locals.trace) {
      console.log('trace: ', JSON.stringify(res.locals.trace));
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving trace' });
  }
};
