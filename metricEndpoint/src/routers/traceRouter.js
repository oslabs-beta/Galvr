const express = require('express');

const { traceResponse } = require('../proto');
const { traceDecoder, traceSaver } = require('../controllers/traceController');

const router = express.Router();

router.post('/', traceDecoder, traceSaver, (req, res) => {
  res
    .set('Content-Type', 'application/x-protobuf')
    .send(traceResponse.encode(traceResponse.create({})).finish());
});

module.exports = router;
