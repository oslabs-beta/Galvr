import mongoose from 'mongoose';
import { testModel } from '../src/models/metricModel';

beforeEach(async () => testModel.collection.drop());

afterAll(() => {
  mongoose.disconnect().catch((err) => console.log(err));
});

describe('Test if jest works likes this', () => {
  it('should work good', async () => {
    const data = await testModel.find({});
    console.log(process.env.NODE_ENV);
    console.log(data);
    expect(data.length).toEqual(0);
  });
});
