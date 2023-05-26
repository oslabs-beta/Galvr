const express = require('express');
const protobuf = require('protobufjs');

const app = express();

async function run() {
  const root = await protobuf.load('src/metrics_service.proto');
  const metricRequest = root.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest'
  );

  const metricResponse = root.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse'
  );

  app.use('/v1/metrics', (req, res) => {
    console.log(req.body);
    if (req.body) {
      const metrics = metricRequest.decode(Buffer.from(req.body));
      console.log(metrics);
    }
    res
      .set('Content-Type', 'application/x-protobuf')
      .send(metricResponse.encode(metricResponse.create({})).finish());
  });
}

run().catch((err) => console.log(err));

// Error handler
// app.use((err, req, res, next) => {
//   console.log(`Error: ${err}`);
//   res.status(400);
// });

app.listen(3000, () => console.log('Listening on port 3000'));
