import type { Metadata } from 'next';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

import HistogramAttr from '@/components/HistogramAttr';
import Histogram from '@/components/Histogram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Histograms',
  description: 'A collection of metrics histograms.',
};

const otlpData = [
  {
    name: 'http.server.duration',
    description: 'Measures the duration of inbound HTTP requests.',
    unit: 'ms',
    histogram: {
      dataPoints: [
        {
          startTimeUnixNano: '1685204696217999872',
          timeUnixNano: '1685209919504999936',
          count: '6',
          sum: 2698,
          bucketCounts: ['0', '0', '0', '0', '1', '1', '0', '1', '2', '0', '1'],
          explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
          attributes: [
            {
              key: 'http.scheme',
              value: {
                stringValue: 'http',
              },
            },
            {
              key: 'http.method',
              value: {
                stringValue: 'GET',
              },
            },
            {
              key: 'net.host.name',
              value: {
                stringValue: 'todo-getmidsvc',
              },
            },
            {
              key: 'http.flavor',
              value: {
                stringValue: '1.1',
              },
            },
            {
              key: 'http.status_code',
              value: {
                intValue: '200',
              },
            },
            {
              key: 'net.host.port',
              value: {
                intValue: '3000',
              },
            },
            {
              key: 'http.route',
              value: {
                stringValue: '/items',
              },
            },
          ],
          min: 36,
          max: 1458,
        },
      ],
      aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
    },
  },
  {
    name: 'http.client.duration',
    description: 'Measures the duration of outbound HTTP requests.',
    unit: 'ms',
    histogram: {
      dataPoints: [
        {
          startTimeUnixNano: '1685204650584999936',
          timeUnixNano: '1685209919504999936',
          count: '1',
          sum: 887,
          bucketCounts: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0'],
          explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
          attributes: [
            {
              key: 'http.method',
              value: {
                stringValue: 'GET',
              },
            },
            {
              key: 'net.peer.name',
              value: {
                stringValue: 'kubernetes.default.svc',
              },
            },
            {
              key: 'net.peer.port',
              value: {
                intValue: '443',
              },
            },
            {
              key: 'http.status_code',
              value: {
                intValue: '403',
              },
            },
            {
              key: 'http.flavor',
              value: {
                stringValue: '1.1',
              },
            },
          ],
          min: 887,
          max: 887,
        },
        {
          startTimeUnixNano: '1685204696176999936',
          timeUnixNano: '1685209919504999936',
          count: '6',
          sum: 1812,
          bucketCounts: ['0', '0', '0', '1', '1', '0', '0', '1', '2', '1', '0'],
          explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
          attributes: [
            {
              key: 'http.method',
              value: {
                stringValue: 'GET',
              },
            },
            {
              key: 'net.peer.name',
              value: {
                stringValue: 'todo-backend',
              },
            },
            {
              key: 'net.peer.port',
              value: {
                intValue: '3000',
              },
            },
            {
              key: 'http.status_code',
              value: {
                intValue: '200',
              },
            },
            {
              key: 'http.flavor',
              value: {
                stringValue: '1.1',
              },
            },
          ],
          min: 19,
          max: 886,
        },
      ],
      aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
    },
  },
];

const histogramsTable = otlpData.map((obj, i) => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7" key={i}>
    <Card className="col-span-5">
      <CardContent className="pl-2">
        <Histogram
          description={obj.description || ''}
          unit={obj.unit || ''}
          xAxisLabels={obj.histogram.dataPoints[0].explicitBounds}
          dataArrays={obj.histogram.dataPoints.map(
            (dataPoint) => dataPoint.bucketCounts
          )}
        />
      </CardContent>
    </Card>
    <Card className="col-span-2">
      <HistogramAttr
        attrArrays={obj.histogram.dataPoints.map(
          (dataPoint) => dataPoint.attributes
        )}
      />
    </Card>
  </div>
));

export default function DashboardPage(): JSX.Element {
  return (
    <>
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Histograms</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Service Name
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">xxxxx</div>
                    <p className="text-xs text-muted-foreground">xxxxx</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Telemetry SDK Language
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">xxxxx</div>
                    <p className="text-xs text-muted-foreground">xxxxx</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Container Name
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">xxxxx</div>
                    <p className="text-xs text-muted-foreground">xxxxx</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Pod Name
                    </CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">xxxxx</div>
                    <p className="text-xs text-muted-foreground">xxxxx</p>
                  </CardContent>
                </Card>
              </div>
              {histogramsTable}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
