const express = require('express');

const { metricResponse } = require('../proto');
const {
  metricDecoder,
  metricParser,
  metricSaver,
  metricGetter,
} = require('../controllers/metricController');

const router = express.Router();

router.post(
  '/',
  metricDecoder,
  metricParser,
  metricSaver,
  metricGetter,
  (req, res) => {
    res
      .set('Content-Type', 'application/x-protobuf')
      .send(metricResponse.encode(metricResponse.create({})).finish());
  }
);

/* A separate Router (metricsFromDBRouter) is currently used for handling requested from NextJS pod. */

// router.get('/', metricGetter, (req, res) => {
//   res.json(res.locals.metrics);
// });

module.exports = router;
