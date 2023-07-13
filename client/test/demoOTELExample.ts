const demoOTELExample = {
  resource: {
    attributes: {
      'container.id':
        '0448e11afe033e5a4b5a55a2f5128729a31c466743e650234a6219dba78a14c7',
      'host.arch': 'aarch64',
      'host.name': 'my-otel-demo-frauddetectionservice-d659c9c64-kvqjq',
      'k8s.namespace.name': 'default',
      'k8s.node.name': 'docker-desktop',
      'k8s.pod.name': 'my-otel-demo-frauddetectionservice-d659c9c64-kvqjq',
      'os.description': 'Linux 5.15.49-linuxkit',
      'os.type': 'linux',
      'process.command_line':
        '/usr/lib/jvm/java-17-openjdk-arm64/bin/java -javaagent:/app/opentelemetry-javaagent.jar',
      'process.executable.path': '/usr/lib/jvm/java-17-openjdk-arm64/bin/java',
      'process.runtime.description':
        'Debian OpenJDK 64-Bit Server VM 17.0.6+10-Debian-1deb11u1',
      'process.runtime.name': 'OpenJDK Runtime Environment',
      'process.runtime.version': '17.0.6+10-Debian-1deb11u1',
      'service.instance.id': 'f6ccb2f1-a729-4140-abfa-b8b2e4412f18',
      'service.name': 'frauddetectionservice',
      'service.namespace': 'opentelemetry-demo',
      'telemetry.auto.version': '1.23.0',
      'telemetry.sdk.language': 'java',
      'telemetry.sdk.name': 'opentelemetry',
      'telemetry.sdk.version': '1.23.1',
    },
    droppedAttributesCount: 0,
  },
  scopeMetrics: [
    {
      scope: {
        name: 'io.opentelemetry.sdk.trace',
        version: '',
        attributes: {},
        droppedAttributesCount: 0,
      },
      metrics: [
        {
          name: 'processedSpans',
          description:
            'The number of spans processed by the BatchSpanProcessor. [dropped=true if they were dropped due to high throughput]',
          unit: '1',
          sum: {
            dataPoints: [
              {
                attributes: {
                  spanProcessorType: 'BatchSpanProcessor',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
      ],
      schemaUrl: '',
    },
    {
      scope: {
        name: 'io.opentelemetry.kafka-clients-0.11',
        version: '1.23.0-alpha',
        attributes: {},
        droppedAttributesCount: 0,
      },
      metrics: [
        {
          name: 'kafka.consumer.failed_rebalance_rate_per_hour',
          description: 'The number of failed rebalance events per hour',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 63.90003195001597,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_ratio',
          description:
            '*Deprecated* The fraction of time the I/O thread spent doing I/O',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.002873871574707161,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.connection_close_total',
          description: 'The total number of connections closed',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.last_rebalance_seconds_ago',
          description:
            'The number of seconds since the last successful rebalance event',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 56,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.commit_total',
          description: 'The total number of commit calls',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 11,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.join_rate',
          description: 'The number of group joins per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.017752214588769948,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.join_time_avg',
          description: 'The average time taken for a group rejoin',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 7,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.failed_authentication_total',
          description:
            'The total number of connections with failed authentication',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.commit_rate',
          description: 'The number of commit calls per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.2143873394531174,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_lag',
          description: 'The latest lag of the partition',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_lag_max',
          description:
            'The maximum lag in terms of number of records for any partition in this window. NOTE: This is based on current offset and not committed offset',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.network_io_total',
          description:
            'The total number of network operations (reads or writes) on all connections',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 307,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.rebalance_latency_avg',
          description:
            'The average time taken for a group to complete a successful rebalance, which may be composed of several failed re-trials until it succeeded',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 39,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.partition_lost_latency_max',
          description:
            'The max time taken for a partition-lost rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.select_rate',
          description:
            'The number of times the I/O layer checked for new I/O to perform per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 25.713478383724215,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_size_max',
          description: 'The maximum number of bytes fetched per request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 381,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.partition_lost_latency_avg',
          description:
            'The average time taken for a partition-lost rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.failed_rebalance_total',
          description: 'The total number of failed rebalance events',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.successful_reauthentication_rate',
          description:
            'The number of successful re-authentication of connections per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.join_total',
          description: 'The total number of group joins',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.request_size_max',
          description: 'The maximum size of any request sent.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 286,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 75,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 127,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_latency_avg',
          description: 'The average time taken for a fetch request.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 491.20175438596493,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.sync_time_avg',
          description: 'The average time taken for a group sync',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 4,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.response_rate',
          description: 'The number of responses received per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.6034253261158932,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.05308419152776303,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 2.0607567951678805,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.commit_latency_avg',
          description: 'The average time taken for a commit request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 12.727272727272727,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.incoming_byte_total',
          description: 'The total number of bytes read off all sockets',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1543,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 617,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 5148,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.request_size_avg',
          description: 'The average size of requests sent.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 158.38235294117646,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 73,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 78.61538461538461,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.time_between_poll_max',
          description:
            'The max delay between invocations of poll() in milliseconds.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 411,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.last_poll_seconds_ago',
          description:
            'The number of seconds since the last poll() invocation.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_size_avg',
          description: 'The average number of bytes fetched per request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 274,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.poll_idle_ratio_avg',
          description:
            "The average fraction of time the consumer's poll() is idle as opposed to waiting for the user code to process records.",
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.4994125808271729,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.successful_authentication_total',
          description:
            'The total number of connections with successful authentication',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.fetch_latency_max',
          description: 'The max time taken for any fetch request.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 579,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.bytes_consumed_total',
          description: 'The total number of bytes consumed',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1644,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.select_total',
          description:
            'The total number of times the I/O layer checked for new I/O to perform',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1456,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.connection_close_rate',
          description: 'The number of connections closed per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_consumed_total',
          description: 'The total number of records consumed',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 5,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.assigned_partitions',
          description:
            'The number of partitions currently assigned to this consumer',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_waittime_total',
          description:
            '*Deprecated* The total time the I/O thread spent waiting',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 55367914281,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.join_time_max',
          description: 'The max time taken for a group rejoin',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 7,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.successful_reauthentication_total',
          description:
            'The total number of successful re-authentication of connections',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.connection_count',
          description: 'The current number of active connections.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 3,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.outgoing_byte_rate',
          description:
            'The number of outgoing bytes sent to all servers per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 95.55157300778963,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 3.8741862439852817,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 163.39799616286507,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.partition_assigned_latency_avg',
          description:
            'The average time taken for a partition-assigned rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.last_heartbeat_seconds_ago',
          description:
            'The number of seconds since the last coordinator heartbeat was sent',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 2,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_lead',
          description: 'The latest lead of the partition',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 5,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.rebalance_latency_total',
          description:
            'The total number of milliseconds this consumer has spent in successful rebalances since creation',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 39,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.incoming_byte_rate',
          description: 'The number of bytes read off all sockets per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 27.384861123435975,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 10.91764872420993,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 91.45496535796767,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.heartbeat_rate',
          description: 'The number of heartbeats per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.3375654032968888,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.iotime_total',
          description:
            '*Deprecated* The total time the I/O thread spent doing I/O',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 162664005,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.records_lead_avg',
          description: 'The average lead of the partition',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 2.5,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.request_total',
          description: 'The total number of requests sent',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 34,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 3,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 117,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.partition_revoked_latency_avg',
          description:
            'The average time taken for a partition-revoked rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.sync_rate',
          description: 'The number of group syncs per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.017754420850791847,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.partition_assigned_latency_max',
          description:
            'The max time taken for a partition-assigned rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.rebalance_rate_per_hour',
          description:
            'The number of successful rebalance events per hour, each event is composed of several failed re-trials until it succeeded',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 63.923859580588456,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_time_ns_total',
          description: 'The total time the I/O thread spent doing I/O',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 162664005,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.reauthentication_latency_max',
          description: 'The max latency observed due to re-authentication',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_throttle_time_avg',
          description: 'The average throttle time in ms',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.response_total',
          description: 'The total number of responses received',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 34,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 3,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 116,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.request_rate',
          description: 'The number of requests sent per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.603296839789201,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.053071044438154545,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 2.0784480920912385,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.network_io_rate',
          description:
            'The number of network operations (reads or writes) on all connections per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 5.431032957701629,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_consumed_rate',
          description: 'The average number of records consumed per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.0897488826264113,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_total',
          description: 'The total number of fetch requests.',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 114,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.fetch_rate',
          description: 'The number of fetch requests per second.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 2.04620106617845,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_lag_avg',
          description: 'The average lag of the partition',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.request_latency_max',
          description: '',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_wait_time_ns_avg',
          description:
            'The average length of time the I/O thread spent waiting for a socket ready for reads or writes in nanoseconds.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 38027413.65453297,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.failed_reauthentication_rate',
          description:
            'The number of failed re-authentication of connections per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.commit_latency_max',
          description: 'The max time taken for a commit request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 76,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_lead_min',
          description:
            'The minimum lead in terms of number of records for any partition in this window',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  partition: '0',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.connection_creation_total',
          description: 'The total number of new connections established',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 3,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.rebalance_latency_max',
          description:
            'The max time taken for a group to complete a successful rebalance, which may be composed of several failed re-trials until it succeeded',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 39,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.fetch_throttle_time_max',
          description: 'The maximum throttle time in ms',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.bytes_consumed_rate',
          description: 'The average number of bytes consumed per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 29.508902929350945,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.connection_creation_rate',
          description: 'The number of new connections established per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.052994170641229466,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_wait_time_ns_total',
          description: 'The total time the I/O thread spent waiting',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 55367914281,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.reauthentication_latency_avg',
          description: 'The average latency observed due to re-authentication',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.sync_time_max',
          description: 'The max time taken for a group sync',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 4,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.successful_authentication_rate',
          description:
            'The number of connections with successful authentication per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.time_between_poll_avg',
          description:
            'The average delay between invocations of poll() in milliseconds.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 101.20818505338079,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.records_per_request_avg',
          description: 'The average number of records in each request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  topic: 'orders',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.8333333333333334,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.sync_total',
          description: 'The total number of group syncs',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.outgoing_byte_total',
          description: 'The total number of outgoing bytes sent to all servers',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 5385,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 219,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 9198,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.io_time_ns_avg',
          description:
            'The average length of time for I/O per select call in nanoseconds.',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 111719.78365384616,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.io_wait_ratio',
          description:
            '*Deprecated* The fraction of time the I/O thread spent waiting',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.9778170789947725,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.partition_revoked_latency_max',
          description:
            'The max time taken for a partition-revoked rebalance listener callback',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.heartbeat_response_time_max',
          description:
            'The max time taken to receive a response to a heartbeat request',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 54,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.failed_authentication_rate',
          description:
            'The number of connections with failed authentication per second',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.committed_time_ns_total',
          description:
            'The total time the consumer has spent in committed in nanoseconds',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.request_latency_avg',
          description: '',
          unit: '',
          gauge: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-2147483646',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node--1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                  'node-id': 'node-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: null,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'kafka.consumer.rebalance_total',
          description:
            'The total number of successful rebalance events, each event is composed of several failed re-trials until it succeeded',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 1,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.failed_reauthentication_total',
          description:
            'The total number of failed re-authentication of connections',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.commit_sync_time_ns_total',
          description:
            'The total time the consumer has spent in commitSync in nanoseconds',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.successful_authentication_no_reauth_total',
          description:
            'The total number of connections with successful authentication where the client does not support re-authentication',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'kafka.consumer.heartbeat_total',
          description: 'The total number of heartbeats',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  'client-id': 'consumer-frauddetectionservice-1',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 18,
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
      ],
      schemaUrl: '',
    },
    {
      scope: {
        name: 'io.opentelemetry.runtime-metrics',
        version: '1.23.0-alpha',
        attributes: {},
        droppedAttributesCount: 0,
      },
      metrics: [
        {
          name: 'process.runtime.jvm.cpu.utilization',
          description: 'Recent cpu utilization for the process',
          unit: '1',
          gauge: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.013801460935133134,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'process.runtime.jvm.system.cpu.load_1m',
          description:
            'Average CPU load of the whole system for the last minute',
          unit: '1',
          gauge: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 8.14,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'process.runtime.jvm.classes.current_loaded',
          description: 'Number of classes currently loaded',
          unit: '1',
          sum: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '7191',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.threads.count',
          description: 'Number of executing threads',
          unit: '1',
          sum: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '15',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '1',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.buffer.limit',
          description: 'Total capacity of the buffers in this pool',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: 'mapped',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "mapped - 'non-volatile memory'",
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'direct',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '18718',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.buffer.count',
          description: 'The number of buffers in the pool',
          unit: '{buffers}',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: 'mapped',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "mapped - 'non-volatile memory'",
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'direct',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '6',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.memory.usage',
          description: 'Measure of memory used',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: "CodeHeap 'non-profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2564352',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Tenured Gen',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '17869872',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Compressed Class Space',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '4250528',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Eden Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5415704',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Metaspace',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '36237168',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '10228864',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'non-nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '1333888',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Survivor Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.memory.committed',
          description: 'Measure of memory committed',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: "CodeHeap 'non-profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2621440',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Tenured Gen',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '29786112',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Compressed Class Space',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '4456448',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Eden Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '12058624',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Metaspace',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '36634624',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '10289152',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'non-nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2555904',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Survivor Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '1441792',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.classes.loaded',
          description: 'Number of classes loaded since JVM start',
          unit: '1',
          sum: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '7192',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'process.runtime.jvm.memory.init',
          description: 'Measure of initial memory requested',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: "CodeHeap 'non-profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2555904',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Tenured Gen',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5636096',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Compressed Class Space',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Eden Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2228224',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Metaspace',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2555904',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'non-nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '2555904',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Survivor Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '262144',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.memory.limit',
          description: 'Measure of max obtainable memory',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: "CodeHeap 'non-profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '122912768',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Tenured Gen',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '69926912',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Compressed Class Space',
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '1073741824',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Eden Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '27983872',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'profiled nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '122908672',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "CodeHeap 'non-nmethods'",
                  type: 'non_heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5836800',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Survivor Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '3473408',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.buffer.usage',
          description:
            'Memory that the Java virtual machine is using for this buffer pool',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: 'mapped',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: "mapped - 'non-volatile memory'",
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'direct',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '18718',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.memory.usage_after_last_gc',
          description:
            'Measure of memory used after the most recent garbage collection event on this pool',
          unit: 'By',
          sum: {
            dataPoints: [
              {
                attributes: {
                  pool: 'Tenured Gen',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '17869872',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Eden Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
              {
                attributes: {
                  pool: 'Survivor Space',
                  type: 'heap',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '0',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: false,
          },
        },
        {
          name: 'process.runtime.jvm.classes.unloaded',
          description: 'Number of classes unloaded since JVM start',
          unit: '1',
          sum: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '1',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'process.runtime.jvm.system.cpu.utilization',
          description: 'Recent cpu utilization for the whole system',
          unit: '1',
          gauge: {
            dataPoints: [
              {
                attributes: {},
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asDouble: 0.013824312860821706,
                exemplars: [],
                flags: 0,
              },
            ],
          },
        },
        {
          name: 'process.runtime.jvm.gc.duration',
          description: 'Duration of JVM garbage collection actions',
          unit: 'ms',
          histogram: {
            dataPoints: [
              {
                attributes: {
                  action: 'end of major GC',
                  gc: 'MarkSweepCompact',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                count: '2',
                sum: 91,
                bucketCounts: [
                  '0',
                  '0',
                  '0',
                  '1',
                  '0',
                  '1',
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
                ],
                explicitBounds: [
                  0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000,
                  7500, 10000,
                ],
                exemplars: [],
                flags: 0,
                min: 19,
                max: 72,
              },
              {
                attributes: {
                  action: 'end of minor GC',
                  gc: 'Copy',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                count: '14',
                sum: 50,
                bucketCounts: [
                  '0',
                  '13',
                  '0',
                  '1',
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
                  '0',
                  '0',
                ],
                explicitBounds: [
                  0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000,
                  7500, 10000,
                ],
                exemplars: [],
                flags: 0,
                min: 1,
                max: 17,
              },
            ],
            aggregationTemporality: 2,
          },
        },
      ],
      schemaUrl: '',
    },
    {
      scope: {
        name: 'io.opentelemetry.exporters.otlp-grpc-okhttp',
        version: '',
        attributes: {},
        droppedAttributesCount: 0,
      },
      metrics: [
        {
          name: 'otlp.exporter.seen',
          description: '',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  type: 'span',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
        {
          name: 'otlp.exporter.exported',
          description: '',
          unit: '',
          sum: {
            dataPoints: [
              {
                attributes: {
                  type: 'span',
                },
                startTimeUnixNano: '1687921511141980304',
                timeUnixNano: '1687921571197403304',
                asInt: '5',
                exemplars: [],
                flags: 0,
              },
            ],
            aggregationTemporality: 2,
            isMonotonic: true,
          },
        },
      ],
      schemaUrl: '',
    },
  ],
  schemaUrl: 'https://opentelemetry.io/schemas/1.18.0',
};

export default demoOTELExample;
