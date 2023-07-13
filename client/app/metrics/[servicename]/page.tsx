import type { Metadata } from 'next';
import { Share2, Languages, Package } from 'lucide-react';

import HistogramAttr from '@/components/HistogramAttr';
import Histogram from '@/components/Histogram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { servicesEndpoint } from '../../../k8s/k8sUrls';

/* 
  Mock metrics data for local testing (not in K8S). 
*/
import demoOTELExample from '../../../test/demoOTELExample';

export const metadata: Metadata = {
  title: 'Histograms',
  description: 'A collection of metrics histograms.',
};

async function getServiceMetric(serviceName: string): Promise<any> {
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
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(
      `Error encounted when fetching metrics from metricEndPoint: ${err}`
    );
    return undefined;
  }
}

export default async function HistogramPage({
  params,
}: {
  params: { servicename: string };
}): Promise<JSX.Element> {
  /* serviceObj: an object representing attributes and a collection of ScopeMetrics from a service. */
  const serviceObj = await getServiceMetric(params.servicename);

  if (serviceObj) {
    /* histograms: an array of Metric objects from the same Resource, each representing a histogram (with one or more data points) */
    const histograms: any[] = [];
    serviceObj.scopeMetrics.forEach((instrumentationLib: any) => {
      /* Filter the Metrics objects received to keep only the ones with histogram type and associated dataPoint array exists (has valid dataPoint) */

      instrumentationLib.metrics.forEach((metricObj: any) => {
        if (metricObj.histogram?.dataPoints.length) {
          histograms.push(metricObj);
        }
      });
    });

    /* histogramElements: an array of React elements, each representing a histogram from the histograms array */
    const histogramElements = histograms.map((histoObj) => (
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"
        key={histoObj.name}
      >
        <Card className="col-span-5">
          <CardContent className="pl-2">
            <Histogram
              description={histoObj.description || ''}
              unit={histoObj.unit || ''}
              xAxisLabels={histoObj.histogram.dataPoints[0].explicitBounds}
              dataArrays={histoObj.histogram.dataPoints.map(
                (dataPoint: any) => dataPoint.bucketCounts
              )}
            />
          </CardContent>
        </Card>
        <Card className="col-span-2 overflow-auto h-96">
          <HistogramAttr
            attrArrays={histoObj.histogram.dataPoints.map((dataPoint: any) => ({
              count: dataPoint.count,
              min: dataPoint.min,
              max: dataPoint.max,
              ...dataPoint.attributes,
            }))}
          />
        </Card>
      </div>
    ));

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
      </>
    );
  }

  /* Render all resourceElements */
  return <h1>{`Cannot fetch metrics from ${params.servicename}`}</h1>;
}
