const express = require('express');
const zlib = require('zlib');

const mongoose = require('mongoose');

const metricRouter = require('./routers/metricRouter');
const traceRouter = require('./routers/traceRouter');
const { protoStatus } = require('./proto');

mongoose.connect('mongodb://localhost:27017/')

const app = express();

app.use((req, res, next) => {
  const data = [];
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
        next(err);
      }
    });
  });
});

app.use('/v1/metrics', metricRouter);
app.use('/v1/traces', traceRouter);

app.use((err, req, res, next) => {
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
        protoStatus
          .encode(protoStatus.create({ message: errorObj.message }))
          .finish()
      );
  }

  return res.status(errorObj.status).json(errorObj.message);
});

app.use((req, res) => res.sendStatus(404));

app.listen(3000, () => console.log('Listening on port 3000'));
