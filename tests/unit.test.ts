/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable import/no-relative-packages */
import mongoose from 'mongoose';
import request from 'supertest';
import { type Request, type Response, type NextFunction } from 'express';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { type Server } from 'http';
import app from '../metricEndpoint/src/server';
import {
  metricDecoder,
  metricParser,
  metricSaver,
} from '../metricEndpoint/src/controllers/metricController';
import {
  allServicesGetter,
  serviceGetter,
} from '../metricEndpoint/src/controllers/serviceController';
import { Services } from '../metricEndpoint/src/models/serviceModel';
import {
  ExportMetricsServiceRequest,
  ExportMetricsServiceResponse,
} from '../metricEndpoint/src/proto/metricTypes';
import unparsedMetrics from './otelDemoUnparsed';
import parsedMetrics from './otelDemoParsed';

let mongoServer: MongoMemoryServer;
let server: Server;
const metricBuf = ExportMetricsServiceRequest.encode(unparsedMetrics).finish();
const unparsedMetricString = JSON.stringify(unparsedMetrics);
const parsedMetricString = JSON.stringify(parsedMetrics);
const checkoutMetricString = JSON.stringify(parsedMetrics[0]);

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri(), {});
  server = app.listen(3000);
});

afterAll(async () => {
  await mongoose.connection.close();
  if (mongoServer) {
    await mongoServer.stop();
  }
  if (server) server.close();
});

describe('Saving Metrics', () => {
  beforeAll(async () => {
    await Services.deleteMany({});
  });
  it('should decode metrics', () => {
    const req = {
      body: metricBuf,
    } as Request;
    const res = { locals: {} } as Response;
    const next: NextFunction = () => true;
    metricDecoder(req, res, next);
    expect(JSON.stringify(res.locals.metrics)).toEqual(unparsedMetricString);
  });
  it('should parse metrics', () => {
    const req = {} as Request;
    const res = { locals: { metrics: unparsedMetrics } } as unknown as Response;
    const next: NextFunction = () => true;
    metricParser(req, res, next);
    expect(JSON.stringify(res.locals.metrics)).toEqual(parsedMetricString);
  });
  it('should save metrics', async () => {
    await Services.deleteMany({});
    const req = {} as Request;
    const res = { locals: { metrics: parsedMetrics } } as unknown as Response;
    const next: NextFunction = () => true;
    await metricSaver(req, res, next);
    const services = await Services.find();
    expect(services.length).toBe(3);
    const serviceNames = services.map((service) => service.serviceName);
    expect(serviceNames.includes('checkoutservice')).toBe(true);
    services.forEach((service) => {
      if (service.serviceName === 'checkoutservice') {
        expect(JSON.stringify(service.resourceMetrics)).toEqual(
          checkoutMetricString
        );
      }
    });
  });
});

describe('Fetching Metrics', () => {
  beforeAll(async () => {
    await Services.deleteMany({});
    parsedMetrics.forEach(async (service) => {
      await Services.create({
        serviceName: service.resource.attributes['service.name'],
        resourceMetrics: service,
      });
    });
  });
  it('should fetch a list of service names', async () => {
    const req = {} as Request;
    const res = { locals: {} } as Response;
    const next: NextFunction = () => true;
    await allServicesGetter(req, res, next);
    expect(res.locals.services.length).toBe(3);
  });
  it('should fetch a full service resourceMetric', async () => {
    const req = { params: { name: 'checkoutservice' } } as unknown as Request;
    const res = { locals: {} } as Response;
    const next: NextFunction = () => true;
    await serviceGetter(req, res, next);
    expect(res.locals.resourceMetrics.resource.attributes['service.name']).toBe(
      'checkoutservice'
    );
    expect(JSON.stringify(res.locals.resourceMetrics)).toEqual(
      checkoutMetricString
    );
  });
});

describe('POST requests', () => {
  beforeAll(async () => {
    await Services.deleteMany({});
  });
  it('should save data from metric requests', async () => {
    const response = await request(server)
      .post('/v1/metrics')
      .send(metricBuf)
      .set({ 'Content-Type': 'application/x-protobuf' })
      .buffer()
      .parse((res, callback) => {
        res.setEncoding('binary');
        let data = '';
        res.on('data', (chunk: string) => {
          data += chunk;
        });
        res.on('end', () => {
          callback(null, Buffer.from(data, 'binary'));
        });
      });

    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/x-protobuf/);
    const message = ExportMetricsServiceResponse.decode(response.body);
    expect(message.partialSuccess).toBe(undefined);

    const services = await Services.find();
    expect(services.length).toBe(3);
    const serviceNames = services.map((service) => service.serviceName);
    expect(serviceNames.includes('checkoutservice')).toBe(true);
    services.forEach((service) => {
      if (service.serviceName === 'checkoutservice') {
        expect(JSON.stringify(service.resourceMetrics)).toEqual(
          checkoutMetricString
        );
      }
    });
  });
});

describe('GET requests', () => {
  beforeAll(async () => {
    await Services.deleteMany({});
    parsedMetrics.forEach(async (service) => {
      await Services.create({
        serviceName: service.resource.attributes['service.name'],
        resourceMetrics: service,
      });
    });
  });

  it('should fetch a list of services', async () => {
    const response = await request(server).get('/services');
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.length).toBe(3);
    expect(response.body.includes('checkoutservice')).toBe(true);
  });

  it('should fetch resource metrics of a single service', async () => {
    const response = await request(server).get('/services/checkoutservice');
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body.resource.attributes['service.name']).toBe(
      'checkoutservice'
    );
    expect(JSON.stringify(response.body)).toEqual(checkoutMetricString);
  });
});
