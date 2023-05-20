const express = require('express');

const app = express();

app.use(express.json());

// Forward getItem request to backend
app.get('/', async (req, res, next) => {
  try {
    console.log('Received request in getMidSvc.');

    const items = await fetch(
      `http://${process.env.BB_BACKEND_SERVICE_HOST}:${process.env.BB_BACKEND_SERVICE_PORT}/items`
    );
    const data = await items.json();

    console.log('Received response in getMidSvc.');

    res.send(data);
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.log(`Error: ${err}`);
});

app.listen(3000, () => console.log('Listening on port 3000'));
