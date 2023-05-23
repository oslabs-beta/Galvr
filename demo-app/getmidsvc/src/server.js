const express = require('express');
const backend = require('./backendUrl');

const app = express();

app.use(express.json());

// Forward getItem request to backend
app.get('/items', async (req, res, next) => {
  try {
    const items = await fetch(backend);
    const data = await items.json();
    res.send(data);
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
