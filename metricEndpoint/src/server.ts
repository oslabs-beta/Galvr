import express from 'express';
import metricRouter from './routers/metricRouter';
import traceRouter from './routers/traceRouter';
import servicesRouter from './routers/servicesRouter';
import { Status } from './proto/statusTypes';

const app = express();

app.use(express.raw({ type: 'application/x-protobuf' }));

/* Service querying endpoint */
app.use('/services', servicesRouter);

/* Metric parsing and saving endpoint */
app.use('/v1/metrics', metricRouter);

/* Trace parsing endpoint */
app.use('/v1/traces', traceRouter);

app.use((req, res) => res.sendStatus(404));

interface errorNext {
  log: string;
  status: number;
  message: string;
}

/* Express error handling */
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

    /* Error handling for protobuf content */
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
  app.listen(3000, () => console.log('server is listening on 3000'));

export default app;
