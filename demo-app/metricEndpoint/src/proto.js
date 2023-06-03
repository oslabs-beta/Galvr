const protobuf = require('protobufjs');

const exports = {};

async function setup() {
  const traceRoot = await protobuf.load('src/proto/trace_service.proto');
  exports.traceRequest = traceRoot.lookupType(
    'opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest'
  );
  exports.traceResponse = traceRoot.lookupType(
    'opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse'
  );
  const metricRoot = await protobuf.load('src/proto/metrics_service.proto');
  exports.metricRequest = metricRoot.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest'
  );
  exports.metricResponse = metricRoot.lookupType(
    'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse'
  );
  const statusRoot = await protobuf.load('src/proto/status.proto');
  exports.protoStatus = statusRoot.lookupType('google.rpc.Status');
}

setup().catch((err) => console.log(err));

module.exports = exports;
