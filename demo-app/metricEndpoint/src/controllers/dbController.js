const mongoose = require('mongoose');
const Services = require('../models/serviceModel');

const conn = mongoose.createConnection

const dbController = {};

dbController.saveMetrics = async (req, res, next) => {
    try {
        if (res.locals.metrics) {

          res.locals.forEach( metric => {
            const { resource, scopeMetrics } = metric;

            const serviceExists = mongoose.connection.db.listCollections({ name: resource.name })
              if (serviceExists) {
                          // Object.keys(scopeMetrics).forEach( instrument => {
                          //   instrument.forEach( metric => {
              
                          //   })
                          // })
                        }


            })
          }
          console.log('resource: ', JSON.stringify(metric.resource));
          console.log('scopeMetrics: ', JSON.stringify(metric.scopeMetrics));
        return next();
    }
    } catch (err) {
      return next({ log: err, status: 502, message: 'Error saving metrics' });
  }

module.exports = dbController;