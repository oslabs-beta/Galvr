const express = require('express');

const backend = require('./backendUrl');

const app = express();

app.use(express.json());

// Forward getItem request to backend
app.get('/items', async (req, res, next) => {
  try {
    console.log('Test Microservice has been encountered')
    res.status(200);
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err}`);
  res.status(400);
});

app.listen(3000, () => console.log('Listening on port 3000'));
