const express = require('express');

const { metricGetter } = require('../controllers/metricController');

const router = express.Router();

router.get('/', metricGetter, (req, res) => {
  res.json(res.locals.metrics);
});

module.exports = router;
