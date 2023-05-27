const express = require('express');
const protobuf = require('protobufjs');
const zlib = require('zlib');

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

async function run() {
  const metricRoot = await protobuf.load('src/metrics_service.proto');
  const metricRequest = metricRoot.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest'
  );
  const metricResponse = metricRoot.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse'
  );
  app.post('/v1/metrics', (req, res) => {
    if (req.body) {
      const metrics = metricRequest.decode(req.body);
      console.log('metrics: ', JSON.stringify(metrics));
    }
    res
      .set('Content-Type', 'application/x-protobuf')
      .send(metricResponse.encode(metricResponse.create({})).finish());
  });
  const traceRoot = await protobuf.load('src/trace_service.proto');
  const traceRequest = traceRoot.lookupType(
    'opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest'
  );
  const traceResponse = traceRoot.lookupType(
    'opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse'
  );
  app.post('/v1/traces', (req, res) => {
    if (req.body) {
      const trace = traceRequest.decode(req.body);
      console.log('trace: ', JSON.stringify(trace));
    }
    res
      .set('Content-Type', 'application/x-protobuf')
      .send(traceResponse.encode(traceResponse.create({})).finish());
  });
}

run().catch((err) => console.log(err));

// Error handler
// app.use((err, req, res, next) => {
//   console.log(`Error: ${err}`);
//   res.status(400);
// });

app.listen(3000, () => console.log('Listening on port 3000'));
