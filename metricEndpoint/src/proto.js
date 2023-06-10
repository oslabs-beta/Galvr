const protobuf = require('protobufjs');

const protoExports = {};

const traceRoot = protobuf.loadSync('src/proto/trace_service.proto');
protoExports.traceRequest = traceRoot.lookupType(
  'opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest'
);
protoExports.traceResponse = traceRoot.lookupType(
  'opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse'
);
const metricRoot = protobuf.loadSync('src/proto/metrics_service.proto');
protoExports.metricRequest = metricRoot.lookupType(
  'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest'
);
protoExports.metricResponse = metricRoot.lookupType(
  'opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse'
);
const statusRoot = protobuf.loadSync('src/proto/status.proto');
protoExports.protoStatus = statusRoot.lookupType('google.rpc.Status');

module.exports = protoExports;
