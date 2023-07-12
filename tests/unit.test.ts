/* eslint-disable import/no-relative-packages */
import mongoose, { type Mongoose } from 'mongoose';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { type Server } from 'http';

import { testModel } from '../metricEndpoint/src/models/metricModel';
import { ExportMetricsServiceRequest } from '../metricEndpoint/src/proto/metricTypes';
import app from '../metricEndpoint/src/server';

let con: Mongoose;
let mongoServer: MongoMemoryServer;
let server: Server;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  con = await mongoose.connect(mongoServer.getUri(), {});
  server = app.listen(3000);
});

// beforeEach(async () => testModel.collection.drop());

afterAll(async () => {
  if (con) {
    await con.disconnect();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
  if (server) {
    server.close();
  }
});

describe('Interactions with Otel Collector', () => {
  it('should respond respond to empty request with success', async () => {
    const response = await request(server)
      .post('/v1/metrics')
      .send(
        ExportMetricsServiceRequest.encode(ExportMetricsServiceRequest.create())
      )
      .set('Content-Type', 'application/x-protobuf');
    expect(response.headers['Content-Type']).toMatch(/application\/x-protobuf/);
    expect(response.status).toEqual(200);
  });
});
