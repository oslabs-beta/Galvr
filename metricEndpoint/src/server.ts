import express from 'express';
import zlib from 'zlib';

import metricRouter from './routers/metricRouter';
import traceRouter from './routers/traceRouter';
import metricsFromDBRouter from './routers/metricsFromDBRouter';
import servicesRouter from './routers/servicesRouter';
import { Status } from './proto/statusTypes';

const app = express();

app.use('/metricsFromDB', metricsFromDBRouter);
app.use('/services', servicesRouter);

// app.use('/services', servicesRouter);

app.use((req, res, next) => {
  if (req.get('Content-Encoding') === 'gzip') {
    const data: any[] = [];
    req.addListener('data', (chunk) => {
      data.push(Buffer.from(chunk));
    });
    req.addListener('end', () => {
      const buffer = Buffer.concat(data);
      zlib.gunzip(buffer, (err, result) => {
        if (!err) {
          req.body = result;
          next();
        } else {
          next({ log: err });
        }
      });
    });
  }
});

app.use('/v1/metrics', metricRouter);
app.use('/v1/traces', traceRouter);

app.use((req, res) => res.sendStatus(404));

interface errorNext {
  log: string;
  status: number;
  message: string;
}

app.use(
  (
    err: errorNext,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: 'An error occurred',
    };

    const errorObj = Object.assign(defaultErr, err);

    console.log(errorObj.log);

    if (req.get('Content-Type') === 'application/x-protobuf') {
      return res
        .status(errorObj.status)
        .set('Content-Type', 'application/x-protobuf')
        .send(
          Status.encode(
            Status.create({ code: 13, message: errorObj.message })
          ).finish()
        );
    }

    return res.status(errorObj.status).json(errorObj.message);
  }
);

if (process.env.NODE_ENV !== 'test')
  app.listen(3000, () => console.log('Listening on port 3000'));

export default app;
