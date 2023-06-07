const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect('mongodb://admin:password@mongo-svc:27017/galvr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log('Listening on port 3000'));
