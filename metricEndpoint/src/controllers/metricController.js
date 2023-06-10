const { metricRequest } = require('../proto');
const metricModel = require('../models/metricModel');

const metricController = {};

metricController.metricDecoder = (req, res, next) => {
  try {
    if (req.body) {
      const metric = metricRequest.decode(req.body);
      res.locals.metrics = metricRequest.toObject(metric, {
        enums: String, // enums as string names
        longs: String, // longs as strings (requires long.js)
        bytes: String, // bytes as base64 encoded strings
      });
    }
    return next();
  } catch (err) {
    return next({ log: err, message: 'Error decoding metrics' });
  }
};

metricController.metricParser = (req, res, next) => {
  try {
    if (res.locals.metrics) {
      const attributeParser = (arr) =>
        arr.reduce((obj, cur) => {
          const curObj = {};
          let curValue = Object.values(cur.value)[0];
          if (
            typeof curValue === 'object' &&
            Object.hasOwn(curValue, 'values')
          ) {
            curValue = curValue.values.reduce((nestArr, nestObj) => {
              nestArr.push(Object.values(nestObj)[0]);
              return nestArr;
            }, []);
          }
          curObj[cur.key] = curValue;
          return Object.assign(obj, curObj);
        }, {});

      res.locals.metrics = res.locals.metrics.resourceMetrics.reduce(
        (resourceMetricsArr, resourceMetricsCur) => {
          const curResourceMetricObj = {};

          curResourceMetricObj.resource = attributeParser(
            resourceMetricsCur.resource.attributes
          );

          curResourceMetricObj.scopeMetrics =
            resourceMetricsCur.scopeMetrics.reduce(
              (scopeMetricsObj, scopeMetricsCur) => {
                const scopeMetricCurObj = {};
                if (
                  Object.hasOwn(scopeMetricsCur, 'metrics') &&
                  scopeMetricsCur.metrics.length > 0
                ) {
                  scopeMetricCurObj[scopeMetricsCur.scope.name] =
                    scopeMetricsCur.metrics.reduce((metricsArr, metricsCur) => {
                      const metricsCurCopy = structuredClone(metricsCur);
                      Object.keys(metricsCurCopy).forEach((key) => {
                        if (Object.hasOwn(metricsCurCopy[key], 'dataPoints')) {
                          metricsCurCopy[key].dataPoints = metricsCurCopy[
                            key
                          ].dataPoints.reduce((arr, dataPoint) => {
                            const dataPointCopy = structuredClone(dataPoint);
                            dataPointCopy.attributes = attributeParser(
                              dataPointCopy.attributes
                            );
                            arr.push(dataPointCopy);
                            return arr;
                          }, []);
                        }
                      });
                      metricsArr.push(metricsCurCopy);
                      return metricsArr;
                    }, []);
                }
                return Object.assign(scopeMetricsObj, scopeMetricCurObj);
              },
              {}
            );

          resourceMetricsArr.push(curResourceMetricObj);
          return resourceMetricsArr;
        },
        []
      );
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error parsing metrics' });
  }
};

metricController.metricSaver = async (req, res, next) => {
  try {
    if (res.locals.metrics) {
      res.locals.metrics.forEach(async (metric) => {
        const curMetric = await metricModel.findOne({
          serviceName: metric.resource['service.name'],
        });
        if (curMetric) {
          await metricModel.findByIdAndUpdate(curMetric._id, {
            metrics: metric,
          });
        } else {
          await metricModel.create({
            serviceName: metric.resource['service.name'],
            metrics: metric,
          });
        }
      });
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving metrics' });
  }
};

metricController.metricGetter = async (req, res, next) => {
  try {
    const metrics = await metricModel.find({});
    res.locals.metrics = metrics.reduce((arr, cur) => {
      arr.push(cur.metrics);
      return arr;
    }, []);
    console.log(res.locals.metrics);
    return next();
  } catch (err) {
    return next({ log: err, message: 'Error geting metrics' });
  }
};

module.exports = metricController;
