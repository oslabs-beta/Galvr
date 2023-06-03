const { metricRequest } = require('../proto');

const metricController = {};

metricController.metricDecoder = (req, res, next) => {
  try {
    if (req.body) {
      const metric = metricRequest.decode(req.body);
      res.locals.metrics = metric;
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
          const curValue = Object.values(cur.value)[0];
          curObj[cur.key] = curValue;
          return Object.assign(obj, curObj);
        }, {});

      const dataTypes = {
        gauge: 'gauge',
        sum: 'sum',
        histogram: 'histogram',
        exponential_histogram: 'exponentialHistogram',
        summary: 'summary',
      };
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
                        if (Object.hasOwn(dataTypes, key)) {
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

metricController.metricSaver = (req, res, next) => {
  try {
    if (res.locals.metrics) {
      console.log('resource: ', res.locals.metrics[0].resource);
      console.log('scopeMetrics: ', res.locals.metrics[0].scopeMetrics);
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving metrics' });
  }
};

module.exports = metricController;
