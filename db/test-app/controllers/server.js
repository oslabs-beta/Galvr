const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect('mongodb://mongo-svc:27017/galvr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const testSchema = new mongoose.Schema({
  test: { type: Boolean, required: true },
});
const testModel = mongoose.model('Test', testSchema);

app.use(express.json());

app.post('/test', async (req, res) => {
  try {
    const testDoc = await testModel.create({ test: req.body.test });
    console.log(testDoc);
    res.status(200).json(testDoc);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.get('/test', async (req, res) => {
  try {
    const testDocs = await testModel.find({});
    console.log(testDocs);
    res.status(200).json(testDocs);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

app.listen(3000, () => console.log('Listening on port 3000'));
