const express = require('express');
const nodeFetch = require('node-fetch');

const backend = require('./backendUrl');

const app = express();

app.use(express.json());

// Forward addItem request to backend
app.post('/items', async (req, res, next) => {
  try {
    console.log('reached')
    const item = await nodeFetch(backend, {
      method: 'POST',
      body: JSON.stringify({ name: req.body.name }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await item.json();
    console.log('postmidsvc Data', data);
    return res.send(data);
  } catch (err) {
    return next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err}`);
  res.status(400);
});

app.listen(3000, () => console.log('Listening on port 3000'));
