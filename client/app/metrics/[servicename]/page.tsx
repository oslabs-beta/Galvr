import type { Metadata } from 'next';
import { Share2, Languages, Package } from 'lucide-react';

import HistogramAttr from '@/components/HistogramAttr';
import Histogram from '@/components/Histogram';
import PolarAreaChart from '@/components/PolarAreaChart';
import Table from '@/components/Table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type {
  ParsedMetric,
  ParsedResourceMetrics,
  ParsedScopeMetrics,
  ParsedHistogramDataPoint,
} from '../../../lib/metricTypes';
import { servicesEndpoint } from '../../../k8s/k8sUrls';

/* 
  Mock metrics data for local testing (not in K8S). 
*/
import demoOTELExample from '../../../test/demoOTELExample';

export const metadata: Metadata = {
  title: 'Histograms',
  description: 'A collection of metrics histograms.',
};

async function getServiceMetric(
  serviceName: string
): Promise<ParsedResourceMetrics | null> {
  if (process.env.NODE_ENV === 'development') {
    return demoOTELExample;
  }

  try {
    const res = await fetch(`${servicesEndpoint}/${serviceName}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: ParsedResourceMetrics = await res.json();

    return data;
  } catch (err) {
    console.log(
      `Error encounted when fetching metrics from metricEndPoint: ${err}`
    );
    return null;
  }
}

function allocateGaugeOrSum(
  metricObj: ParsedMetric,
  metricType: 'gauge' | 'sum',
  multiGaugeOrSumWithZero: ParsedMetric[],
  multiGaugeOrSumNoZero: ParsedMetric[]
): void {
  let hasZero = false;
  metricObj[metricType]!.dataPoints.forEach((datapoint) => {
    if (datapoint.asDouble === 0 || datapoint.asInt === '0') {
      hasZero = true;
    }
  });
  hasZero
    ? multiGaugeOrSumWithZero.push(metricObj)
    : multiGaugeOrSumNoZero.push(metricObj);
}

export default async function HistogramPage({
  params,
}: {
  params: { servicename: string };
}): Promise<JSX.Element> {
  /* serviceObj: an object representing attributes and a collection of ScopeMetrics from a service. */
  const serviceObj = await getServiceMetric(params.servicename);

  if (serviceObj) {
    /* histograms: an array of Metric objects from the same Resource, each representing a histogram, sum or gauge (with one or more data points) */
    const histograms: ParsedMetric[] = [];
    const multiGaugeOrSumNoZero: ParsedMetric[] = [];
    const multiGaugeOrSumWithZero: ParsedMetric[] = [];

    serviceObj.scopeMetrics.forEach(
      (instrumentationLib: ParsedScopeMetrics) => {
        /* Filter the Metrics objects received to keep only the ones with histogram type and associated dataPoint array exists (has valid dataPoint) */

        instrumentationLib.metrics.forEach((metricObj: ParsedMetric) => {
          /*
            Only render the metric data with descriptions (meaningful data to the frontend users).
          */
          if (metricObj.description) {
            if (metricObj.histogram?.dataPoints.length) {
              histograms.push(metricObj);
            }

            if (metricObj.gauge && metricObj.gauge.dataPoints.length > 1) {
              allocateGaugeOrSum(
                metricObj,
                'gauge',
                multiGaugeOrSumWithZero,
                multiGaugeOrSumNoZero
              );
            }

            if (metricObj.sum && metricObj.sum.dataPoints.length > 1) {
              allocateGaugeOrSum(
                metricObj,
                'sum',
                multiGaugeOrSumWithZero,
                multiGaugeOrSumNoZero
              );
            }
          }
        });
      }
    );

    /* histogramElements: an array of React elements, each representing a histogram from the histograms array */
    const histogramElements = histograms.map(
      (histoObj): JSX.Element => (
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"
          key={histoObj.name}
        >
          <Card className="col-span-5">
            <CardContent className="pl-2">
              <Histogram
                description={histoObj.description || ''}
                unit={histoObj.unit || ''}
                xAxisLabels={histoObj.histogram!.dataPoints[0].explicitBounds}
                dataArrays={histoObj.histogram!.dataPoints.map(
                  (dataPoint: ParsedHistogramDataPoint) =>
                    dataPoint.bucketCounts
                )}
              />
            </CardContent>
          </Card>
          <Card className="col-span-2 overflow-auto h-96">
            <HistogramAttr
              attrArrays={histoObj.histogram!.dataPoints.map(
                (dataPoint: ParsedHistogramDataPoint) => ({
                  count: dataPoint.count,
                  min: dataPoint.min,
                  max: dataPoint.max,
                  ...dataPoint.attributes,
                })
              )}
            />
          </Card>
        </div>
      )
    );

    /* multiGaugeOrSumNoZeroElements: an array of React elements, each representing a gauge or sum with multiple datapoints using Polar Chart */
    const multiGaugeOrSumNoZeroElements = multiGaugeOrSumNoZero.map(
      (multiGaugeOrSumNoZeroObj): JSX.Element => {
        const { description, unit } = multiGaugeOrSumNoZeroObj;
        const dataPointsArr =
          multiGaugeOrSumNoZeroObj.sum?.dataPoints ??
          multiGaugeOrSumNoZeroObj.gauge?.dataPoints;

        return (
          <Card key={multiGaugeOrSumNoZeroObj.name}>
            <PolarAreaChart
              description={description}
              unit={unit}
              dataPointsArr={dataPointsArr!}
            />
          </Card>
        );
      }
    );

    /*
     */
    const multiGaugeOrSumWithZeroElements = multiGaugeOrSumWithZero.map(
      (multiGaugeOrSumWithZeroObj): JSX.Element => {
        const { description, unit } = multiGaugeOrSumWithZeroObj;
        const dataPointsArr =
          multiGaugeOrSumWithZeroObj.sum?.dataPoints ??
          multiGaugeOrSumWithZeroObj.gauge?.dataPoints;

        return (
          <Card className="pl-5 pr-5" key={multiGaugeOrSumWithZeroObj.name}>
            <Table
              description={description}
              unit={unit}
              dataPointsArr={dataPointsArr!}
            />
          </Card>
        );
      }
    );

    /* Render metadata of one resource and its associated histograms */
    return (
      <>
        <hr className="border-gray-300 my-6" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Service Name
              </CardTitle>
              <Share2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              {/* <div className="text-2xl font-bold">
                {obj.resource['service.name']}
              </div> */}
              <p className="text-lg font-bold text-muted-foreground">
                {serviceObj.resource.attributes['service.name']}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pod Name</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-muted-foreground">
                {serviceObj.resource.attributes['k8s.pod.name']}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Telemetry SDK Language
              </CardTitle>
              <Languages className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-lg font-bold text-muted-foreground">
                {serviceObj.resource.attributes['telemetry.sdk.language']}
              </p>
            </CardContent>
          </Card>
        </div>
        {histogramElements}
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          {multiGaugeOrSumNoZeroElements}
          {multiGaugeOrSumWithZeroElements}
        </div>
      </>
    );
  }

  /* Render all resourceElements */
  return <h1>{`Cannot fetch metrics from ${params.servicename}`}</h1>;
}
