const { metricRequest } = require('../proto');

const metricController = {};

metricController.metricDecoder = (req, res, next) => {
  try {
    if (req.body) {
      const metric = metricRequest.decode(req.body);
      res.locals.metric = metric;
    }
    return next();
  } catch (err) {
    return next({ log: err, message: 'Error decoding metric' });
  }
};

metricController.metricSaver = (req, res, next) => {
  try {
    if (res.locals.metric) {
      console.log('metric: ', JSON.stringify(res.locals.metric));
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving metric' });
  }
};

module.exports = metricController;
