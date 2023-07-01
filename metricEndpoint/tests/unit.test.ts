import mongoose, { type Mongoose } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { testModel } from '../src/models/metricModel';

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
    console.log(process.env.NODE_ENV);
    console.log(data);
    expect(data.length).toEqual(0);
  });
});
