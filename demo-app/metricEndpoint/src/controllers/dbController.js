const mongoose = require('mongoose');
const Services = require('../models/serviceModel');

const conn = mongoose.createConnection

const dbController = {};

dbController.saveMetrics = async (req, res, next) => {
    try {
        if (res.locals.metrics) {

          for (let i = 0; i < res.locals.metrics.length; i + 1) {
            const { resource, scopeMetrics } = res.locals.metrics[i];
            
            const scopeMetricsArr = [];

            Object.keys(scopeMetrics).forEach( instrument => {
              instrument.forEach( metric => {
                scopeMetricsArr.push()
              })
            })

            const resourceColl = Services.find({'serviceName': resource['service.name']})
            .then(data => data)

            if (!resourceColl) {
              await Services.create({
                'serviceName' : resource['service.name'],
                'resourceInfo' : resource,

              })
            }



          }
          console.log('resource: ', JSON.stringify(res.locals.metrics[0].resource));
          console.log('scopeMetrics: ', JSON.stringify(res.locals.metrics[0].scopeMetrics));
        }
        return next();
      } catch (err) {
        return next({ log: err, status: 502, message: 'Error saving metrics' });
      }
}

module.exports = dbController;