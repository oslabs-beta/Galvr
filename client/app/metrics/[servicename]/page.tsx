import type { Metadata } from 'next';
import { Share2, Languages, Package } from 'lucide-react';

import HistogramAttr from '@/components/HistogramAttr';
import Histogram from '@/components/Histogram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { servicesEndpoint } from '../../../k8s/k8sUrls';

/* Mock metrics data for local testing (not in K8S). 
   For deploying to K8S, comment out below import and const allMetrics declaration, and uncomment the other const allMetrics declaration in exported HistogramPage function component. 
*/
import demoOTELExample from '../../../test/demoOTELExample';

// const allMetrics = demoOTELExample;

export const metadata: Metadata = {
  title: 'Histograms',
  description: 'A collection of metrics histograms.',
};

async function getServiceMetric(serviceName: string): Promise<any> {
  if (process.env.NODE_ENV === 'development') {
    return demoOTELExample;
  }

  try {
    // let services = await fetch(servicesEndpoint, { cache: 'no-store' }); // Should return an Array of serviceName strings

    // services = await services.json();

    // let url = servicesEndpoint + '/todo-frontend';

    // const individualService = await fetch(url, { cache: 'no-store' });

    // const individualServiceData = await individualService.json();

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
  const allMetrics = await getServiceMetric(params.servicename);

  let resourceElements:
    | string
    | JSX.Element[] = `Cannot fetch metrics from ${params.servicename}`;

  if (allMetrics) {
    /* resourceElements: an array of React elements, each representing a collection of ScopeMetrics from a Resource */
    resourceElements = allMetrics.map((resourceObj: any, i: number) => {
      /* histograms: an array of Metric objects from the same Resource, each representing a histogram (with one or more data points) */
      const histograms: any[] = [];
      resourceObj.scopeMetrics.forEach((instrumentationLib: any) => {
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
              attrArrays={histoObj.histogram.dataPoints.map(
                (dataPoint: any) => ({
                  count: dataPoint.count,
                  min: dataPoint.min,
                  max: dataPoint.max,
                  ...dataPoint.attributes,
                })
              )}
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
                  {resourceObj.resource.attributes['service.name']}
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
                  {resourceObj.resource.attributes['k8s.pod.name']}
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
                  {resourceObj.resource.attributes['telemetry.sdk.language']}
                </p>
              </CardContent>
            </Card>
          </div>
          {histogramElements}
        </>
      );
    });
  }

  /* Render all resourceElements */
  return <>{resourceElements}</>;
}
