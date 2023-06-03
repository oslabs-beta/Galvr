const express = require('express');

const { metricResponse } = require('../proto');
const {
  metricDecoder,
  metricSaver,
} = require('../controllers/metricController');

const router = express.Router();

router.post('/', metricDecoder, metricSaver, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(metricResponse.encode(metricResponse.create({})).finish());
});

module.exports = router;
