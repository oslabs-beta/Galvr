const exampleFormattedMetrics = [
  {
    resource: {
      attributes: {
        'service.name': 'todo-postmidsvc',
        'telemetry.sdk.language': 'nodejs',
        'telemetry.sdk.name': 'opentelemetry',
        'telemetry.sdk.version': '1.13.0',
        'container.id':
          '9fed385178cce4d97d08c3cb5850b35bfadae7deef5b3b51506607edba94e124',
        'k8s.container.name': 'todo-postmidsvc',
        'k8s.deployment.name': 'todo-postmidsvc',
        'k8s.namespace.name': 'default',
        'k8s.node.name': 'docker-desktop',
        'k8s.pod.name': 'todo-postmidsvc-5f44bd9cd7-6bqtn',
        'k8s.replicaset.name': 'todo-postmidsvc-5f44bd9cd7',
        'service.version': 'todo-postmidsvc',
        'host.name': 'todo-postmidsvc-5f44bd9cd7-6bqtn',
        'host.arch': 'amd64',
        'os.type': 'linux',
        'os.version': '5.15.49-linuxkit-pr',
        'process.pid': null,
        'process.executable.name': 'node',
        'process.executable.path': '/usr/local/bin/node',
        'process.command_args': null,
        'process.runtime.version': '18.16.0',
        'process.runtime.name': 'nodejs',
        'process.runtime.description': 'Node.js',
        'process.command': '/app/src/server.js',
        'process.owner': 'root',
      },
      droppedAttributesCount: 0,
    },
    scopeMetrics: [
      {
        scope: {
          name: '@opentelemetry/instrumentation-http',
          version: '0.39.1',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'http.server.duration',
            description: 'Measures the duration of inbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'POST',
                    'net.host.name': 'todo-postmidsvc',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840037216999936',
                  timeUnixNano: '1686840641305999872',
                  count: '3',
                  sum: 592,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '2',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 21,
                  max: 547,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
          {
            name: 'http.client.duration',
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.method': 'GET',
                    'net.peer.name': 'kubernetes.default.svc',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686837469780999936',
                  timeUnixNano: '1686840641305999872',
                  count: '1',
                  sum: 1676,
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
                    '0',
                    '1',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 1676,
                  max: 1676,
                },
                {
                  attributes: {
                    'http.method': 'POST',
                    'net.peer.name': 'todo-backend',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840037179000064',
                  timeUnixNano: '1686840641305999872',
                  count: '3',
                  sum: 256,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '2',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 14,
                  max: 224,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
      {
        scope: {
          name: '@opentelemetry/instrumentation-mysql',
          version: '0.33.2',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'db.client.connections.usage',
            description:
              'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}',
            gauge: null,
            sum: {
              dataPoints: [],
              aggregationTemporality: 2,
              isMonotonic: false,
            },
            histogram: null,
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
    ],
    schemaUrl: '',
  },
  {
    resource: {
      attributes: {
        'service.name': 'todo-getmidsvc',
        'telemetry.sdk.language': 'nodejs',
        'telemetry.sdk.name': 'opentelemetry',
        'telemetry.sdk.version': '1.13.0',
        'container.id':
          '622fd1a84c6da19d33862aa53a0cf6681db336656f3e11ce2791044ac824c8d9',
        'k8s.container.name': 'todo-getmidsvc',
        'k8s.deployment.name': 'todo-getmidsvc',
        'k8s.namespace.name': 'default',
        'k8s.node.name': 'docker-desktop',
        'k8s.pod.name': 'todo-getmidsvc-676ccbb5ff-vm7ll',
        'k8s.replicaset.name': 'todo-getmidsvc-676ccbb5ff',
        'service.version': 'todo-getmidsvc',
        'host.name': 'todo-getmidsvc-676ccbb5ff-vm7ll',
        'host.arch': 'amd64',
        'os.type': 'linux',
        'os.version': '5.15.49-linuxkit-pr',
        'process.pid': null,
        'process.executable.name': 'node',
        'process.executable.path': '/usr/local/bin/node',
        'process.command_args': null,
        'process.runtime.version': '18.16.0',
        'process.runtime.name': 'nodejs',
        'process.runtime.description': 'Node.js',
        'process.command': '/app/src/server.js',
        'process.owner': 'root',
      },
      droppedAttributesCount: 0,
    },
    scopeMetrics: [
      {
        scope: {
          name: '@opentelemetry/instrumentation-http',
          version: '0.39.1',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'http.server.duration',
            description: 'Measures the duration of inbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'todo-getmidsvc',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840033188000000',
                  timeUnixNano: '1686840699870000128',
                  count: '1',
                  sum: 749,
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
                  exemplars: [],
                  flags: 0,
                  min: 749,
                  max: 749,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
          {
            name: 'http.client.duration',
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.method': 'GET',
                    'net.peer.name': 'kubernetes.default.svc',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686837468275000064',
                  timeUnixNano: '1686840699870000128',
                  count: '1',
                  sum: 1457,
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
                    '0',
                    '1',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 1457,
                  max: 1457,
                },
                {
                  attributes: {
                    'http.method': 'GET',
                    'net.peer.name': 'todo-backend',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840033136999936',
                  timeUnixNano: '1686840699870000128',
                  count: '1',
                  sum: 462,
                  bucketCounts: [
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
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 462,
                  max: 462,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
      {
        scope: {
          name: '@opentelemetry/instrumentation-mysql',
          version: '0.33.2',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'db.client.connections.usage',
            description:
              'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}',
            gauge: null,
            sum: {
              dataPoints: [],
              aggregationTemporality: 2,
              isMonotonic: false,
            },
            histogram: null,
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
    ],
    schemaUrl: '',
  },
  {
    resource: {
      attributes: {
        'service.name': 'todo-frontend',
        'telemetry.sdk.language': 'nodejs',
        'telemetry.sdk.name': 'opentelemetry',
        'telemetry.sdk.version': '1.13.0',
        'container.id':
          'd7501eccd2d35e11b3846ac70e3d412d5dd5764702f0a6dcab05a5577e2732d7',
        'k8s.container.name': 'todo-front',
        'k8s.deployment.name': 'todo-frontend',
        'k8s.namespace.name': 'default',
        'k8s.node.name': 'docker-desktop',
        'k8s.pod.name': 'todo-frontend-68bf786fb-mlmx7',
        'k8s.replicaset.name': 'todo-frontend-68bf786fb',
        'service.version': 'todo-frontend',
        'host.name': 'todo-frontend-68bf786fb-mlmx7',
        'host.arch': 'amd64',
        'os.type': 'linux',
        'os.version': '5.15.49-linuxkit-pr',
        'process.pid': null,
        'process.executable.name': 'node',
        'process.executable.path': '/usr/local/bin/node',
        'process.command_args': null,
        'process.runtime.version': '18.16.0',
        'process.runtime.name': 'nodejs',
        'process.runtime.description': 'Node.js',
        'process.command': '/app/src/index.js',
        'process.owner': 'root',
      },
      droppedAttributesCount: 0,
    },
    scopeMetrics: [
      {
        scope: {
          name: '@opentelemetry/instrumentation-http',
          version: '0.39.1',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'http.server.duration',
            description: 'Measures the duration of inbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '',
                  },
                  startTimeUnixNano: '1686840031395000064',
                  timeUnixNano: '1686840700614000128',
                  count: '9',
                  sum: 883,
                  bucketCounts: [
                    '0',
                    '0',
                    '2',
                    '2',
                    '1',
                    '2',
                    '1',
                    '0',
                    '0',
                    '1',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 5,
                  max: 596,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '',
                  },
                  startTimeUnixNano: '1686840031748000000',
                  timeUnixNano: '1686840700614000128',
                  count: '2',
                  sum: 510,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '1',
                    '1',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 233,
                  max: 277,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '',
                  },
                  startTimeUnixNano: '1686840031956999936',
                  timeUnixNano: '1686840700614000128',
                  count: '1',
                  sum: 27,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 27,
                  max: 27,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840033220000000',
                  timeUnixNano: '1686840700614000128',
                  count: '1',
                  sum: 1096,
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
                    '0',
                    '1',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 1096,
                  max: 1096,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'POST',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840037220999936',
                  timeUnixNano: '1686840700614000128',
                  count: '3',
                  sum: 881,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '0',
                    '2',
                    '0',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 32,
                  max: 815,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'PUT',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items/:id',
                  },
                  startTimeUnixNano: '1686840043676000000',
                  timeUnixNano: '1686840700614000128',
                  count: '6',
                  sum: 166,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '2',
                    '4',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 20,
                  max: 35,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'DELETE',
                    'net.host.name': 'localhost',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items/:id',
                  },
                  startTimeUnixNano: '1686840047436000000',
                  timeUnixNano: '1686840700614000128',
                  count: '3',
                  sum: 73,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '2',
                    '1',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 22,
                  max: 28,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
          {
            name: 'http.client.duration',
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.method': 'GET',
                    'net.peer.name': 'kubernetes.default.svc',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686837469888000000',
                  timeUnixNano: '1686840700614000128',
                  count: '1',
                  sum: 1630,
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
                    '0',
                    '1',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 1630,
                  max: 1630,
                },
                {
                  attributes: {
                    'http.method': 'GET',
                    'net.peer.name': 'todo-getmidsvc',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840033192999936',
                  timeUnixNano: '1686840700614000128',
                  count: '1',
                  sum: 966,
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
                  exemplars: [],
                  flags: 0,
                  min: 966,
                  max: 966,
                },
                {
                  attributes: {
                    'http.method': 'POST',
                    'net.peer.name': 'todo-postmidsvc',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840037217999872',
                  timeUnixNano: '1686840700614000128',
                  count: '3',
                  sum: 700,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '0',
                    '2',
                    '0',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 25,
                  max: 646,
                },
                {
                  attributes: {
                    'http.method': 'PUT',
                    'net.peer.name': 'todo-backend',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840043672999936',
                  timeUnixNano: '1686840700614000128',
                  count: '6',
                  sum: 126,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '4',
                    '2',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 16,
                  max: 29,
                },
                {
                  attributes: {
                    'http.method': 'DELETE',
                    'net.peer.name': 'todo-backend',
                    'net.peer.port': null,
                    'http.status_code': null,
                    'http.flavor': '1.1',
                  },
                  startTimeUnixNano: '1686840047433999872',
                  timeUnixNano: '1686840700614000128',
                  count: '3',
                  sum: 54,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '3',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 16,
                  max: 19,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
      {
        scope: {
          name: '@opentelemetry/instrumentation-mysql',
          version: '0.33.2',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'db.client.connections.usage',
            description:
              'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}',
            gauge: null,
            sum: {
              dataPoints: [],
              aggregationTemporality: 2,
              isMonotonic: false,
            },
            histogram: null,
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
    ],
    schemaUrl: '',
  },
  {
    resource: {
      attributes: {
        'service.name': 'todo-backend',
        'telemetry.sdk.language': 'nodejs',
        'telemetry.sdk.name': 'opentelemetry',
        'telemetry.sdk.version': '1.13.0',
        'container.id':
          'c3d83a32f7fd25a89a7523c7e067c9f05c9a76431b140a22a8c90b91e41cb01f',
        'k8s.container.name': 'todo-back',
        'k8s.deployment.name': 'todo-backend',
        'k8s.namespace.name': 'default',
        'k8s.node.name': 'docker-desktop',
        'k8s.pod.name': 'todo-backend-6b8df9f9bd-rfwqp',
        'k8s.replicaset.name': 'todo-backend-6b8df9f9bd',
        'service.version': 'todo-backend',
        'host.name': 'todo-backend-6b8df9f9bd-rfwqp',
        'host.arch': 'amd64',
        'os.type': 'linux',
        'os.version': '5.15.49-linuxkit-pr',
        'process.pid': null,
        'process.executable.name': 'node',
        'process.executable.path': '/usr/local/bin/node',
        'process.command_args': null,
        'process.runtime.version': '18.16.0',
        'process.runtime.name': 'nodejs',
        'process.runtime.description': 'Node.js',
        'process.command': '/app/src/index.js',
        'process.owner': 'root',
      },
      droppedAttributesCount: 0,
    },
    scopeMetrics: [
      {
        scope: {
          name: '@opentelemetry/instrumentation-http',
          version: '0.39.1',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'http.server.duration',
            description: 'Measures the duration of inbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'GET',
                    'net.host.name': 'todo-backend',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840033128000000',
                  timeUnixNano: '1686840700095000064',
                  count: '1',
                  sum: 301,
                  bucketCounts: [
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
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 301,
                  max: 301,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'POST',
                    'net.host.name': 'todo-backend',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items',
                  },
                  startTimeUnixNano: '1686840037172000000',
                  timeUnixNano: '1686840700095000064',
                  count: '3',
                  sum: 210,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '2',
                    '0',
                    '0',
                    '0',
                    '1',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 12,
                  max: 186,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'PUT',
                    'net.host.name': 'todo-backend',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items/:id',
                  },
                  startTimeUnixNano: '1686840043671000064',
                  timeUnixNano: '1686840700095000064',
                  count: '6',
                  sum: 93,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '6',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 11,
                  max: 23,
                },
                {
                  attributes: {
                    'http.scheme': 'http',
                    'http.method': 'DELETE',
                    'net.host.name': 'todo-backend',
                    'http.flavor': '1.1',
                    'http.status_code': null,
                    'net.host.port': null,
                    'http.route': '/items/:id',
                  },
                  'sta2023-06-15T14:51:41.292334039Z rtTimeUnixNano':
                    '1686840047432999936',
                  timeUnixNano: '1686840700095000064',
                  count: '3',
                  sum: 41,
                  bucketCounts: [
                    '0',
                    '0',
                    '0',
                    '3',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                    '0',
                  ],
                  explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                  exemplars: [],
                  flags: 0,
                  min: 10,
                  max: 16,
                },
              ],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
          {
            name: 'http.client.duration',
            description: 'Measures the duration of outbound HTTP requests.',
            unit: 'ms',
            gauge: null,
            sum: null,
            histogram: {
              dataPoints: [],
              aggregationTemporality: 2,
            },
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
      {
        scope: {
          name: '@opentelemetry/instrumentation-mysql',
          version: '0.33.2',
          attributes: {},
          droppedAttributesCount: 0,
        },
        metrics: [
          {
            name: 'db.client.connections.usage',
            description:
              'The number of connections that are currently in state described by the state attribute.',
            unit: '{connection}',
            gauge: null,
            sum: {
              dataPoints: [],
              aggregationTemporality: 2,
              isMonotonic: false,
            },
            histogram: null,
            exponentialHistogram: null,
            summary: null,
          },
        ],
        schemaUrl: '',
      },
    ],
    schemaUrl: '',
  },
];

export default exampleFormattedMetrics;
