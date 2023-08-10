import express from 'express';
import { ExportTraceServiceResponse } from '../proto/traceTypes';
import { traceDecoder, traceSaver } from '../controllers/traceController';

const traceRouter = express.Router();

traceRouter.post('/', traceDecoder, traceSaver, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(
      ExportTraceServiceResponse.encode(ExportTraceServiceResponse.create())
    );
});

export default traceRouter;
