import mongoose, { type Mongoose } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
// eslint-disable-next-line import/no-relative-packages
import { testModel } from '../metricEndpoint/src/models/metricModel';

let con: Mongoose;
let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  con = await mongoose.connect(mongoServer.getUri(), {});
});

beforeEach(async () => testModel.collection.drop());

afterAll(async () => {
  if (con) {
    await con.disconnect();
  }
  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe('Test if jest works likes this', () => {
  it('should work good', async () => {
    const data = await testModel.find({});
    expect(data.length).toEqual(0);
  });
});
