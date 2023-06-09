import type { Metadata } from 'next';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';
import fetch from 'node-fetch';

import HistogramAttr from '@/components/HistogramAttr';
import Histogram from '@/components/Histogram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import metricEndPoint from '../../k8s/k8sUrls';

export const metadata: Metadata = {
  title: 'Histograms',
  description: 'A collection of metrics histograms.',
};

async function getMetrics(): Promise<any> {
  // console.log('Hit the getMetrics function');
  try {
    const res = await fetch(metricEndPoint);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    // console.log(JSON.stringify(data));
    return data;
  } catch (err) {
    console.log(
      `Error encounted when fetching metrics from metricEndPoint: ${err}`
    );
    return undefined;
  }
}

// const otlpData = [
//   {
//     name: 'http.server.duration',
//     description: 'Measures the duration of inbound HTTP requests.',
//     unit: 'ms',
//     histogram: {
//       dataPoints: [
//         {
//           startTimeUnixNano: '1685204696217999872',
//           timeUnixNano: '1685209919504999936',
//           count: '6',
//           sum: 2698,
//           bucketCounts: ['0', '0', '0', '0', '1', '1', '0', '1', '2', '0', '1'],
//           explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
//           attributes: [
//             {
//               key: 'http.scheme',
//               value: {
//                 stringValue: 'http',
//               },
//             },
//             {
//               key: 'http.method',
//               value: {
//                 stringValue: 'GET',
//               },
//             },
//             {
//               key: 'net.host.name',
//               value: {
//                 stringValue: 'todo-getmidsvc',
//               },
//             },
//             {
//               key: 'http.flavor',
//               value: {
//                 stringValue: '1.1',
//               },
//             },
//             {
//               key: 'http.status_code',
//               value: {
//                 intValue: '200',
//               },
//             },
//             {
//               key: 'net.host.port',
//               value: {
//                 intValue: '3000',
//               },
//             },
//             {
//               key: 'http.route',
//               value: {
//                 stringValue: '/items',
//               },
//             },
//           ],
//           min: 36,
//           max: 1458,
//         },
//       ],
//       aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
//     },
//   },
//   {
//     name: 'http.client.duration',
//     description: 'Measures the duration of outbound HTTP requests.',
//     unit: 'ms',
//     histogram: {
//       dataPoints: [
//         {
//           startTimeUnixNano: '1685204650584999936',
//           timeUnixNano: '1685209919504999936',
//           count: '1',
//           sum: 887,
//           bucketCounts: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '0'],
//           explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
//           attributes: [
//             {
//               key: 'http.method',
//               value: {
//                 stringValue: 'GET',
//               },
//             },
//             {
//               key: 'net.peer.name',
//               value: {
//                 stringValue: 'kubernetes.default.svc',
//               },
//             },
//             {
//               key: 'net.peer.port',
//               value: {
//                 intValue: '443',
//               },
//             },
//             {
//               key: 'http.status_code',
//               value: {
//                 intValue: '403',
//               },
//             },
//             {
//               key: 'http.flavor',
//               value: {
//                 stringValue: '1.1',
//               },
//             },
//           ],
//           min: 887,
//           max: 887,
//         },
//         {
//           startTimeUnixNano: '1685204696176999936',
//           timeUnixNano: '1685209919504999936',
//           count: '6',
//           sum: 1812,
//           bucketCounts: ['0', '0', '0', '1', '1', '0', '0', '1', '2', '1', '0'],
//           explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
//           attributes: [
//             {
//               key: 'http.method',
//               value: {
//                 stringValue: 'GET',
//               },
//             },
//             {
//               key: 'net.peer.name',
//               value: {
//                 stringValue: 'todo-backend',
//               },
//             },
//             {
//               key: 'net.peer.port',
//               value: {
//                 intValue: '3000',
//               },
//             },
//             {
//               key: 'http.status_code',
//               value: {
//                 intValue: '200',
//               },
//             },
//             {
//               key: 'http.flavor',
//               value: {
//                 stringValue: '1.1',
//               },
//             },
//           ],
//           min: 19,
//           max: 886,
//         },
//       ],
//       aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
//     },
//   },
// ];

// function HistogramsTables({ otlpData }: { otlpData: any }): JSX.Element {
//   return;
// }

export default async function DashboardPage(): Promise<JSX.Element> {
  const allMetrics = await getMetrics();
  // const allMetrics = [
  //   {
  //     resource: {
  //       'service.name': 'todo-postmidsvc',
  //       'telemetry.sdk.language': 'nodejs',
  //       'telemetry.sdk.name': 'opentelemetry',
  //       'telemetry.sdk.version': '1.13.0',
  //       'container.id':
  //         '0df46c4b4699234248a7ce2853bda18cdb6e9857d93e17dde97f475b335a7207',
  //       'k8s.container.name': 'todo-postmidsvc',
  //       'k8s.deployment.name': 'todo-postmidsvc',
  //       'k8s.namespace.name': 'default',
  //       'k8s.node.name': 'minikube',
  //       'k8s.pod.name': 'todo-postmidsvc-84c76cff7-sb9fr',
  //       'k8s.replicaset.name': 'todo-postmidsvc-84c76cff7',
  //       'host.name': 'todo-postmidsvc-84c76cff7-sb9fr',
  //       'host.arch': 'arm64',
  //       'os.type': 'linux',
  //       'os.version': '5.15.49-linuxkit',
  //       'process.pid': '1',
  //       'process.executable.name': 'node',
  //       'process.executable.path': '/usr/local/bin/node',
  //       'process.command_args': ['/usr/local/bin/node', '/app/src/server.js'],
  //       'process.runtime.version': '18.16.0',
  //       'process.runtime.name': 'nodejs',
  //       'process.runtime.description': 'Node.js',
  //       'process.command': '/app/src/server.js',
  //       'process.owner': 'root',
  //     },
  //     scopeMetrics: {
  //       '@opentelemetry/instrumentation-http': [
  //         {
  //           name: 'http.server.duration',
  //           description: 'Measures the duration of inbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686268839012000000',
  //                 timeUnixNano: '1686268925436999936',
  //                 count: '6',
  //                 sum: 221,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '3',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'POST',
  //                   'net.host.name': 'todo-postmidsvc',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 16,
  //                 max: 101,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //         {
  //           name: 'http.client.duration',
  //           description: 'Measures the duration of outbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686261901963000064',
  //                 timeUnixNano: '1686268925436999936',
  //                 count: '1',
  //                 sum: 2014,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '1',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'GET',
  //                   'net.peer.name': 'kubernetes.default.svc',
  //                 },
  //                 min: 2014,
  //                 max: 2014,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268839008999936',
  //                 timeUnixNano: '1686268925436999936',
  //                 count: '6',
  //                 sum: 123,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '3',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'POST',
  //                   'net.peer.name': 'todo-backend',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 9,
  //                 max: 40,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //       '@opentelemetry/instrumentation-mysql': [
  //         {
  //           name: 'db.client.connections.usage',
  //           description:
  //             'The number of connections that are currently in state described by the state attribute.',
  //           unit: '{connection}',
  //           sum: {
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     resource: {
  //       'service.name': 'todo-frontend',
  //       'telemetry.sdk.language': 'nodejs',
  //       'telemetry.sdk.name': 'opentelemetry',
  //       'telemetry.sdk.version': '1.13.0',
  //       'container.id':
  //         '7cd569347fc3226963a4dc89f0a10b8e75f0d9bbbfe67370f1f3472b23498a17',
  //       'k8s.container.name': 'todo-front',
  //       'k8s.deployment.name': 'todo-frontend',
  //       'k8s.namespace.name': 'default',
  //       'k8s.node.name': 'minikube',
  //       'k8s.pod.name': 'todo-frontend-568c5c86d-gf5nv',
  //       'k8s.replicaset.name': 'todo-frontend-568c5c86d',
  //       'host.name': 'todo-frontend-568c5c86d-gf5nv',
  //       'host.arch': 'arm64',
  //       'os.type': 'linux',
  //       'os.version': '5.15.49-linuxkit',
  //       'process.pid': '1',
  //       'process.executable.name': 'node',
  //       'process.executable.path': '/usr/local/bin/node',
  //       'process.command_args': ['/usr/local/bin/node', '/app/src/index.js'],
  //       'process.runtime.version': '18.16.0',
  //       'process.runtime.name': 'nodejs',
  //       'process.runtime.description': 'Node.js',
  //       'process.command': '/app/src/index.js',
  //       'process.owner': 'root',
  //     },
  //     scopeMetrics: {
  //       '@opentelemetry/instrumentation-http': [
  //         {
  //           name: 'http.server.duration',
  //           description: 'Measures the duration of inbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686268836167000064',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '11',
  //                 sum: 316,
  //                 bucketCounts: [
  //                   '0',
  //                   '1',
  //                   '2',
  //                   '0',
  //                   '7',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '',
  //                 },
  //                 min: 4,
  //                 max: 50,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268836356999936',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '1',
  //                 sum: 3,
  //                 bucketCounts: [
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '404',
  //                   'net.host.port': '3000',
  //                   'http.route': '',
  //                 },
  //                 min: 3,
  //                 max: 3,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268836624999936',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '3',
  //                 sum: 205,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 31,
  //                 max: 132,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268839016000000',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '6',
  //                 sum: 363,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '3',
  //                   '1',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'POST',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 23,
  //                 max: 178,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268844128999936',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '88',
  //                 sum: 394,
  //                 bucketCounts: [
  //                   '0',
  //                   '48',
  //                   '34',
  //                   '6',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '304',
  //                   'net.host.port': '3000',
  //                   'http.route': '',
  //                 },
  //                 min: 1,
  //                 max: 13,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268845068000000',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '6',
  //                 sum: 145,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '4',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '304',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 13,
  //                 max: 39,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268848176000000',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '3',
  //                 sum: 83,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'DELETE',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items/:id',
  //                 },
  //                 min: 16,
  //                 max: 46,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268850606000128',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '3',
  //                 sum: 84,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'PUT',
  //                   'net.host.name': '127.0.0.1',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items/:id',
  //                 },
  //                 min: 17,
  //                 max: 36,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //         {
  //           name: 'http.client.duration',
  //           description: 'Measures the duration of outbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686261902079000064',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '1',
  //                 sum: 2007,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '1',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'GET',
  //                   'net.peer.name': 'kubernetes.default.svc',
  //                 },
  //                 min: 2007,
  //                 max: 2007,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268836622000128',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '9',
  //                 sum: 298,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '4',
  //                   '4',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'GET',
  //                   'net.peer.name': 'todo-getmidsvc',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 11,
  //                 max: 101,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268839012999936',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '6',
  //                 sum: 277,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '3',
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'POST',
  //                   'net.peer.name': 'todo-postmidsvc',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 20,
  //                 max: 118,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268848174000128',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '3',
  //                 sum: 67,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'DELETE',
  //                   'net.peer.name': 'todo-backend',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 13,
  //                 max: 39,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268850604000000',
  //                 timeUnixNano: '1686268925524000000',
  //                 count: '3',
  //                 sum: 61,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'PUT',
  //                   'net.peer.name': 'todo-backend',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 13,
  //                 max: 27,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //       '@opentelemetry/instrumentation-mysql': [
  //         {
  //           name: 'db.client.connections.usage',
  //           description:
  //             'The number of connections that are currently in state described by the state attribute.',
  //           unit: '{connection}',
  //           sum: {
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     resource: {
  //       'service.name': 'todo-getmidsvc',
  //       'telemetry.sdk.language': 'nodejs',
  //       'telemetry.sdk.name': 'opentelemetry',
  //       'telemetry.sdk.version': '1.13.0',
  //       'container.id':
  //         '4e26de9fb87282edbcd674978e84518b666c6a113b5a4d7dbbe2ed4f3ee74f2f',
  //       'k8s.container.name': 'todo-getmidsvc',
  //       'k8s.deployment.name': 'todo-getmidsvc',
  //       'k8s.namespace.name': 'default',
  //       'k8s.node.name': 'minikube',
  //       'k8s.pod.name': 'todo-getmidsvc-796d78cf6f-hxqdg',
  //       'k8s.replicaset.name': 'todo-getmidsvc-796d78cf6f',
  //       'host.name': 'todo-getmidsvc-796d78cf6f-hxqdg',
  //       'host.arch': 'arm64',
  //       'os.type': 'linux',
  //       'os.version': '5.15.49-linuxkit',
  //       'process.pid': '1',
  //       'process.executable.name': 'node',
  //       'process.executable.path': '/usr/local/bin/node',
  //       'process.command_args': ['/usr/local/bin/node', '/app/src/server.js'],
  //       'process.runtime.version': '18.16.0',
  //       'process.runtime.name': 'nodejs',
  //       'process.runtime.description': 'Node.js',
  //       'process.command': '/app/src/server.js',
  //       'process.owner': 'root',
  //     },
  //     scopeMetrics: {
  //       '@opentelemetry/instrumentation-http': [
  //         {
  //           name: 'http.server.duration',
  //           description: 'Measures the duration of inbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686268836620000000',
  //                 timeUnixNano: '1686268925363000064',
  //                 count: '9',
  //                 sum: 225,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '4',
  //                   '2',
  //                   '0',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': 'todo-getmidsvc',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 7,
  //                 max: 81,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //         {
  //           name: 'http.client.duration',
  //           description: 'Measures the duration of outbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686261901968000000',
  //                 timeUnixNano: '1686268925363000064',
  //                 count: '1',
  //                 sum: 2012,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '1',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'GET',
  //                   'net.peer.name': 'kubernetes.default.svc',
  //                 },
  //                 min: 2012,
  //                 max: 2012,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268836614000128',
  //                 timeUnixNano: '1686268925363000064',
  //                 count: '9',
  //                 sum: 154,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '4',
  //                   '3',
  //                   '1',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.method': 'GET',
  //                   'net.peer.name': 'todo-backend',
  //                   'net.peer.port': '3000',
  //                   'http.status_code': '200',
  //                   'http.flavor': '1.1',
  //                 },
  //                 min: 5,
  //                 max: 58,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //       '@opentelemetry/instrumentation-mysql': [
  //         {
  //           name: 'db.client.connections.usage',
  //           description:
  //             'The number of connections that are currently in state described by the state attribute.',
  //           unit: '{connection}',
  //           sum: {
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     resource: {
  //       'service.name': 'todo-backend',
  //       'telemetry.sdk.language': 'nodejs',
  //       'telemetry.sdk.name': 'opentelemetry',
  //       'telemetry.sdk.version': '1.13.0',
  //       'container.id':
  //         'f77bb7b15b666c45e65564d00866605493d08d3d3cadef559263b30fbde1901c',
  //       'k8s.container.name': 'todo-back',
  //       'k8s.deployment.name': 'todo-backend',
  //       'k8s.namespace.name': 'default',
  //       'k8s.node.name': 'minikube',
  //       'k8s.pod.name': 'todo-backend-84d5c75bcb-v8v49',
  //       'k8s.replicaset.name': 'todo-backend-84d5c75bcb',
  //       'host.name': 'todo-backend-84d5c75bcb-v8v49',
  //       'host.arch': 'arm64',
  //       'os.type': 'linux',
  //       'os.version': '5.15.49-linuxkit',
  //       'process.pid': '1',
  //       'process.executable.name': 'node',
  //       'process.executable.path': '/usr/local/bin/node',
  //       'process.command_args': ['/usr/local/bin/node', '/app/src/index.js'],
  //       'process.runtime.version': '18.16.0',
  //       'process.runtime.name': 'nodejs',
  //       'process.runtime.description': 'Node.js',
  //       'process.command': '/app/src/index.js',
  //       'process.owner': 'root',
  //     },
  //     scopeMetrics: {
  //       '@opentelemetry/instrumentation-http': [
  //         {
  //           name: 'http.server.duration',
  //           description: 'Measures the duration of inbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             dataPoints: [
  //               {
  //                 startTimeUnixNano: '1686268836611000064',
  //                 timeUnixNano: '1686268925468000000',
  //                 count: '9',
  //                 sum: 76,
  //                 bucketCounts: [
  //                   '0',
  //                   '4',
  //                   '3',
  //                   '1',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'GET',
  //                   'net.host.name': 'todo-backend',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 2,
  //                 max: 33,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268839007000064',
  //                 timeUnixNano: '1686268925468000000',
  //                 count: '6',
  //                 sum: 86,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '2',
  //                   '3',
  //                   '1',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'POST',
  //                   'net.host.name': 'todo-backend',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items',
  //                 },
  //                 min: 6,
  //                 max: 32,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268848172999936',
  //                 timeUnixNano: '1686268925468000000',
  //                 count: '3',
  //                 sum: 43,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'DELETE',
  //                   'net.host.name': 'todo-backend',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items/:id',
  //                 },
  //                 min: 8,
  //                 max: 24,
  //               },
  //               {
  //                 startTimeUnixNano: '1686268850604000000',
  //                 timeUnixNano: '1686268925468000000',
  //                 count: '3',
  //                 sum: 40,
  //                 bucketCounts: [
  //                   '0',
  //                   '0',
  //                   '1',
  //                   '2',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                   '0',
  //                 ],
  //                 explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
  //                 attributes: {
  //                   'http.scheme': 'http',
  //                   'http.method': 'PUT',
  //                   'net.host.name': 'todo-backend',
  //                   'http.flavor': '1.1',
  //                   'http.status_code': '200',
  //                   'net.host.port': '3000',
  //                   'http.route': '/items/:id',
  //                 },
  //                 min: 8,
  //                 max: 17,
  //               },
  //             ],
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //         {
  //           name: 'http.client.duration',
  //           description: 'Measures the duration of outbound HTTP requests.',
  //           unit: 'ms',
  //           histogram: {
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //       '@opentelemetry/instrumentation-mysql': [
  //         {
  //           name: 'db.client.connections.usage',
  //           description:
  //             'The number of connections that are currently in state described by the state attribute.',
  //           unit: '{connection}',
  //           sum: {
  //             aggregationTemporality: 'AGGREGATION_TEMPORALITY_CUMULATIVE',
  //           },
  //         },
  //       ],
  //     },
  //   },
  // ];

  let resourceBlocks: string | JSX.Element[] =
    'Cannot fetch histograms metrics';
  if (allMetrics) {
    resourceBlocks = allMetrics.map((obj: any, i: number) => {
      const histograms: any[] = [];
      Object.keys(obj.scopeMetrics).forEach((key) => {
        if (obj.scopeMetrics[key][0].histogram) {
          obj.scopeMetrics[key].forEach((dataObj: any) => {
            if (dataObj.histogram.dataPoints) {
              histograms.push(dataObj);
            }
          });
        }
      });

      const histogramsTable = histograms.map((histoObj) => (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7" key={i}>
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
                (dataPoint: any) => dataPoint.attributes
              )}
            />
          </Card>
        </div>
      ));

      return (
        <TabsContent value="overview" className="space-y-4" key={i}>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Service Name
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold">
                {obj.resource['service.name']}
              </div> */}
                <p className="text-sm text-muted-foreground">
                  {obj.resource['service.name']}
                </p>
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
                {/* <div className="text-2xl font-bold">
                {obj.resource['telemetry.sdk.language']}
              </div> */}
                <p className="text-sm text-muted-foreground">
                  {obj.resource['telemetry.sdk.language']}
                </p>
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
                {/* <div className="text-2xl font-bold">
                {obj.resource['k8s.container.name']}
              </div> */}
                <p className="text-sm text-muted-foreground">
                  {obj.resource['k8s.container.name']}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pod Name</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold">
                {obj.resource['k8s.pod.name']}
              </div> */}
                <p className="text-sm text-muted-foreground">
                  {obj.resource['k8s.pod.name']}
                </p>
              </CardContent>
            </Card>
          </div>
          {histogramsTable}
        </TabsContent>
      );
    });
  }

  return (
    <>
      <div className="flex-col flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Histograms</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-10">
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
            {resourceBlocks}
          </Tabs>
        </div>
      </div>
    </>
  );
}
