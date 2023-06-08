const express = require('express');

const { metricResponse } = require('../proto');
const {
  metricDecoder,
  metricParser,
} = require('../controllers/metricController');

const {
  saveMetrics
} = require('../controllers/dbController')

const router = express.Router();

router.post('/', metricDecoder, metricParser, saveMetrics, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(metricResponse.encode(metricResponse.create({})).finish());
});

module.exports = router;
