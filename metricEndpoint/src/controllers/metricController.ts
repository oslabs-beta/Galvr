import type express from 'express';
import {
  type AnyValue,
  ExportMetricsServiceRequest,
  type KeyValue,
  type ParsedKeyValue,
  type ResourceMetrics,
  type ParsedResourceMetrics,
  type ScopeMetrics,
  type ParsedMetric,
  type DataPoint,
  type ParsedDataPoint,
  type ParsedScopeMetrics,
} from '../proto/metricTypes';
import { type ServiceSchema, Services } from '../models/serviceModel';

export const metricDecoder = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    if (req.body) {
      // console.log('requestBody', JSON.stringify(req.body));

      const metric = ExportMetricsServiceRequest.decode(req.body);
      res.locals.metrics = metric;

      // console.log('Unparsed: ', JSON.stringify(res.locals.metrics));
    }

    return next();
  } catch (err) {
    return next({ log: err, message: 'Error decoding metrics' });
  }
};

export const metricParser = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  try {
    if (res.locals.metrics) {
      // console.log('Unparsed: ', JSON.stringify(res.locals.metrics));

      const attributeParser = (arr: KeyValue[]): ParsedKeyValue =>
        arr.reduce((obj: ParsedKeyValue, cur: KeyValue) => {
          const curObj: ParsedKeyValue = {};
          let curValue: any = cur.value
            ? Object.values(cur.value)[0]
            : undefined;
          if (
            typeof curValue === 'object' &&
            // @ts-expect-error Object does have hasOwn method
            Object.hasOwn(curValue, 'values')
          ) {
            curValue = curValue.values.reduce(
              (nestArr: ParsedKeyValue[], nestObj: AnyValue) => {
                nestArr.push(Object.values(nestObj)[0]);
                return nestArr;
              },
              []
            );
          }
          curObj[cur.key] = curValue;
          return Object.assign(obj, curObj);
        }, {});

      res.locals.metrics = res.locals.metrics.resourceMetrics.reduce(
        (
          resourceMetricsArr: ParsedResourceMetrics[],
          resourceMetricsCur: ResourceMetrics
        ) => {
          const curResourceMetricObj: ParsedResourceMetrics = {
            resource: { attributes: {}, droppedAttributesCount: 0 },
            scopeMetrics: [],
            schemaUrl: '',
          };

          if (resourceMetricsCur.resource) {
            curResourceMetricObj.resource.attributes = attributeParser(
              resourceMetricsCur.resource.attributes
            );
            curResourceMetricObj.resource.droppedAttributesCount =
              resourceMetricsCur.resource.droppedAttributesCount;
          }

          if (resourceMetricsCur.schemaUrl)
            curResourceMetricObj.schemaUrl = resourceMetricsCur.schemaUrl;

          curResourceMetricObj.scopeMetrics =
            resourceMetricsCur.scopeMetrics.reduce(
              (
                scopeMetricsArr: ParsedScopeMetrics[],
                scopeMetricsCur: ScopeMetrics
              ) => {
                const scopeMetricCurObj: ParsedScopeMetrics = {
                  scope: undefined,
                  metrics: [],
                  schemaUrl: scopeMetricsCur.schemaUrl,
                };

                scopeMetricCurObj.scope = scopeMetricsCur.scope?.attributes
                  ? Object.assign(scopeMetricsCur.scope, {
                      attributes: attributeParser(
                        scopeMetricsCur.scope.attributes
                      ),
                    })
                  : scopeMetricsCur.scope;

                scopeMetricCurObj.metrics = scopeMetricsCur.metrics.reduce(
                  (metricsArr: ParsedMetric[], metricsCur) => {
                    // @ts-expect-error metrics is mutated in place, causing type errors between parsed and unparsed version.
                    const metricsCurCopy: ParsedMetric =
                      structuredClone(metricsCur);
                    Object.keys(metricsCurCopy).forEach((key) => {
                      if (
                        // @ts-expect-error iterating over keys
                        typeof metricsCur[key] === 'object' &&
                        // @ts-expect-error Object does have hasOwn method
                        Object.hasOwn(metricsCur[key], 'dataPoints')
                      ) {
                        // @ts-expect-error iterating over keys
                        metricsCurCopy[key].dataPoints = metricsCur[
                          key
                        ].dataPoints.reduce(
                          (arr: ParsedDataPoint[], dataPoint: DataPoint) => {
                            const dataPointCopy: ParsedDataPoint =
                              structuredClone(dataPoint);
                            // @ts-expect-error attributes will be an object here
                            dataPointCopy.attributes = attributeParser(
                              dataPoint.attributes
                            );
                            arr.push(dataPointCopy);
                            return arr;
                          },
                          []
                        );
                      }
                    });
                    metricsArr.push(metricsCurCopy);
                    return metricsArr;
                  },
                  []
                );
                if (scopeMetricCurObj.metrics.length > 0)
                  scopeMetricsArr.push(scopeMetricCurObj);
                return scopeMetricsArr;
              },
              []
            );

          resourceMetricsArr.push(curResourceMetricObj);
          return resourceMetricsArr;
        },
        []
      );
    }
    // console.log('Parsed: ', JSON.stringify(res.locals.metrics));
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error parsing metrics' });
  }
};

export const metricSaver = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    if (res.locals.metrics) {
      res.locals.metrics.forEach(async (metric: ParsedResourceMetrics) => {
        const { resource } = metric;
        const { attributes } = resource;

        const filter = { serviceName: attributes['service.name'] };
        const update = { resourceMetrics: metric };

        const ServiceDoc = await Services.findOneAndUpdate(
          filter, // Filter to find current Service document
          update, // Updated scopeMetrics
          {
            new: true, // returns the updated document
            upsert: true, // if document doesn't exist, create it using filter and update
          }
        );
        // console.log(ServiceDoc);
      });
    }
    return next();
  } catch (err) {
    return next({ log: err, status: 502, message: 'Error saving metrics' });
  }
};

export const metricGetter = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): Promise<void> => {
  try {
    const metrics = await Services.find({});

    res.locals.metrics = metrics.reduce(
      (arr: ParsedResourceMetrics[], cur: ServiceSchema) => {
        arr.push(cur.resourceMetrics);
        return arr;
      },
      []
    );

    return next();
  } catch (err) {
    return next({ log: err, message: 'Error geting metrics' });
  }
};

// try {
//   if (res.locals.metrics) {
//     res.locals.metrics.forEach(async (metric: ParsedResourceMetrics) => {
//       const resourceString = JSON.stringify(metric.resource);
//       const curMetric = await testModel.findOne({
//         resourceString,
//       });
//       if (curMetric) {
//         await testModel.findByIdAndUpdate(curMetric._id, {
//           metrics: metric,
//         });
//       } else {
//         await testModel.create({
//           resourceString,
//           metrics: metric,
//         });
//       }
//     });
//   }
//   return next();
// } catch (err) {
//   return next({ log: err, status: 502, message: 'Error saving metrics' });
// }
