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
import { ExportMetricsServiceRequest } from '../metricEndpoint/src/proto/metricTypes';
import unparsedMetrics from '../observability/otelDemoUnparsed';
import parsedMetrics from '../observability/otelDemoParsed';

let mongoServer: MongoMemoryServer;
let server: Server;

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
      body: ExportMetricsServiceRequest.encode(unparsedMetrics).finish(),
    } as Request;
    const res = { locals: {} } as Response;
    const next: NextFunction = () => true;
    metricDecoder(req, res, next);
    const metrics = JSON.stringify(res.locals.metrics);
    const comparison = JSON.stringify(unparsedMetrics);
    expect(metrics).toEqual(comparison);
  });
  it('should parse metrics', () => {
    const req = {} as Request;
    const res = { locals: { metrics: unparsedMetrics } } as unknown as Response;
    const next: NextFunction = () => true;
    metricParser(req, res, next);
    const metrics = JSON.stringify(res.locals.metrics);
    const comparison = JSON.stringify(parsedMetrics);
    expect(metrics).toEqual(comparison);
  });
  it('should save metrics', async () => {
    await Services.deleteMany({});
    const req = {} as Request;
    const res = { locals: { metrics: parsedMetrics } } as unknown as Response;
    const next: NextFunction = () => true;
    await metricSaver(req, res, next);
    let services = await Services.find();
    let count = 0;
    while (services.length !== 3 && count < 5) {
      count += 1;
      // eslint-disable-next-line no-await-in-loop
      services = await Services.find();
    }
    expect(services.length).toBe(3);
    const serviceNames = services.map((service) => service.serviceName);
    expect(serviceNames.includes('checkoutservice')).toBe(true);
    services.forEach((service) => {
      if (service.serviceName === 'checkoutservice') {
        expect(JSON.stringify(service.resourceMetrics)).toEqual(
          JSON.stringify(parsedMetrics[0])
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
    let services = await Services.find();
    let count = 0;
    while (services.length !== 3 && count < 5) {
      count += 1;
      // eslint-disable-next-line no-await-in-loop
      services = await Services.find();
    }
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
    expect(res.locals.resourceMetrics.length).toBe(1);
    expect(res.locals.resourceMetrics[0].serviceName).toBe('checkoutservice');
    expect(
      JSON.stringify(res.locals.resourceMetrics[0].resourceMetrics)
    ).toEqual(JSON.stringify(parsedMetrics[0]));
  });
});

xdescribe('POST requests', () => {
  beforeAll(async () => {
    await Services.deleteMany({});
  });
  it('should respond to empty metric requests with success', async () => {});
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
    let services = await Services.find();
    let count = 0;
    while (services.length !== 3 && count < 5) {
      count += 1;
      // eslint-disable-next-line no-await-in-loop
      services = await Services.find();
    }
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
    expect(response.body.length).toBe(1);
    expect(response.body[0].serviceName).toBe('checkoutservice');
    expect(JSON.stringify(response.body[0].resourceMetrics)).toEqual(
      JSON.stringify(parsedMetrics[0])
    );
  });
});
