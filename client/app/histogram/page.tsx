import Histogram from '@/components/histogram';

export default function HistogramBoard(): JSX.Element {
  /*
  {
    microsvc_name: "",
    ...,
    otlpData: []
  }
  */
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
            bucketCounts: [
              '0',
              '0',
              '0',
              '0',
              '1',
              '1',
              '0',
              '1',
              '2',
              '0',
              '1',
            ],
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
            bucketCounts: [
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '0',
              '1',
              '0',
            ],
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
            bucketCounts: [
              '0',
              '0',
              '0',
              '1',
              '1',
              '0',
              '0',
              '1',
              '2',
              '1',
              '0',
            ],
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

  // To-do: update key to be serviceName/description
  const histograms = otlpData.map((obj, i) => (
    <>
      <Histogram
        key={i}
        description={obj.description || ''}
        unit={obj.unit || ''}
        xAxisLabels={obj.histogram.dataPoints[0].explicitBounds}
        dataArrays={obj.histogram.dataPoints.map(
          (dataPoint) => dataPoint.bucketCounts
        )}
      />
      <br />
    </>
  ));
  return <>{histograms}</>;
}
