const Services = require('../models/serviceModel')

const dbController = {};

dbController.saveMetrics = (req, res, next) => {
    try {
        if (res.locals.metrics) {
          console.log('resource: ', JSON.stringify(res.locals.metrics[0].resource));
          console.log('scopeMetrics: ', JSON.stringify(res.locals.metrics[0].scopeMetrics));
        }
        return next();
      } catch (err) {
        return next({ log: err, status: 502, message: 'Error saving metrics' });
      }
}

module.exports = dbController;