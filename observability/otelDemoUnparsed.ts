const UNPARSED = {
  resourceMetrics: [
    {
      resource: {
        attributes: [
          {
            key: 'host.name',
            value: {
              stringValue: 'demo-otel-checkoutservice-794dbf4d77-82nns',
            },
          },
          { key: 'k8s.namespace.name', value: { stringValue: 'default' } },
          { key: 'k8s.node.name', value: { stringValue: 'docker-desktop' } },
          {
            key: 'k8s.pod.name',
            value: {
              stringValue: 'demo-otel-checkoutservice-794dbf4d77-82nns',
            },
          },
          {
            key: 'os.description',
            value: {
              stringValue:
                'Alpine Linux 3.17.3 (Linux demo-otel-checkoutservice-794dbf4d77-82nns 5.15.49-linuxkit #1 SMP PREEMPT Tue Sep 13 07:51:32 UTC 2022 aarch64)',
            },
          },
          { key: 'os.type', value: { stringValue: 'linux' } },
          {
            key: 'process.command_args',
            value: {
              arrayValue: { values: [{ stringValue: './checkoutservice' }] },
            },
          },
          {
            key: 'process.executable.name',
            value: { stringValue: 'checkoutservice' },
          },
          {
            key: 'process.executable.path',
            value: { stringValue: '/usr/src/app/checkoutservice' },
          },
          { key: 'process.owner', value: { stringValue: 'root' } },
          { key: 'process.pid', value: { intValue: '1' } },
          {
            key: 'process.runtime.description',
            value: { stringValue: 'go version go1.19.2 linux/arm64' },
          },
          { key: 'process.runtime.name', value: { stringValue: 'go' } },
          {
            key: 'process.runtime.version',
            value: { stringValue: 'go1.19.2' },
          },
          {
            key: 'service.instance.id',
            value: { stringValue: '2b977e86-cda6-40b5-bbff-c304ee1a1ad7' },
          },
          { key: 'service.name', value: { stringValue: 'checkoutservice' } },
          {
            key: 'service.namespace',
            value: { stringValue: 'opentelemetry-demo' },
          },
          { key: 'telemetry.sdk.language', value: { stringValue: 'go' } },
          {
            key: 'telemetry.sdk.name',
            value: { stringValue: 'opentelemetry' },
          },
          { key: 'telemetry.sdk.version', value: { stringValue: '1.10.0' } },
        ],
        droppedAttributesCount: 0,
      },
      scopeMetrics: [
        {
          scope: {
            name: 'go.opentelemetry.io/contrib/instrumentation/runtime',
            version: 'semver:0.36.1',
            attributes: [],
            droppedAttributesCount: 0,
          },
          metrics: [
            {
              name: 'runtime.uptime',
              description: 'Milliseconds since application was initialized',
              unit: 'ms',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286842713',
                    timeUnixNano: '1689209744318632171',
                    asInt: '16560123',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_idle',
              description: 'Bytes in idle (unused) spans',
              unit: 'By',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286867963',
                    timeUnixNano: '1689209744318652546',
                    asInt: '68788224',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_released',
              description:
                'Bytes of idle spans whose physical memory has been returned to the OS',
              unit: 'By',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286871046',
                    timeUnixNano: '1689209744318653213',
                    asInt: '42885120',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_sys',
              description: 'Bytes of heap memory obtained from the OS',
              unit: 'By',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286873630',
                    timeUnixNano: '1689209744318653463',
                    asInt: '176062464',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.gc.pause_total_ns',
              description:
                'Cumulative nanoseconds in GC stop-the-world pauses since the program started',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286878713',
                    timeUnixNano: '1689209744318653671',
                    asInt: '6557429886',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.go.goroutines',
              description: 'Number of goroutines that currently exist',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286856296',
                    timeUnixNano: '1689209744318653963',
                    asInt: '691',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.lookups',
              description: 'Number of pointer lookups performed by the runtime',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286875796',
                    timeUnixNano: '1689209744318654213',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.go.mem.live_objects',
              description:
                'Number of live objects is the number of cumulative Mallocs - Frees',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286876838',
                    timeUnixNano: '1689209744318654338',
                    asInt: '286382',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.gc.count',
              description: 'Number of completed garbage collection cycles',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286877713',
                    timeUnixNano: '1689209744318654546',
                    asInt: '2281',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.go.cgo.calls',
              description: 'Number of cgo calls made by the current process',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286857546',
                    timeUnixNano: '1689209744318654921',
                    asInt: '115',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_alloc',
              description: 'Bytes of allocated heap objects',
              unit: 'By',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286861088',
                    timeUnixNano: '1689209744318655171',
                    asInt: '68828856',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_inuse',
              description: 'Bytes in in-use spans',
              unit: 'By',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286868880',
                    timeUnixNano: '1689209744318656463',
                    asInt: '107274240',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.mem.heap_objects',
              description: 'Number of allocated heap objects',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286870130',
                    timeUnixNano: '1689209744318656671',
                    asInt: '286382',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.go.gc.pause_ns',
              description: 'Amount of nanoseconds in GC stop-the-world pauses',
              unit: '',
              histogram: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208364286892130',
                    timeUnixNano: '1689209744318657921',
                    count: '186',
                    sum: 531747294,
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
                      '186',
                    ],
                    explicitBounds: [0, 5, 10, 25, 50, 75, 100, 250, 500, 1000],
                    exemplars: [],
                    flags: 0,
                    min: 87125,
                    max: 43603833,
                  },
                ],
                aggregationTemporality: 2,
              },
            },
          ],
          schemaUrl: '',
        },
      ],
      schemaUrl: 'https://opentelemetry.io/schemas/1.12.0',
    },
    {
      resource: {
        attributes: [
          {
            key: 'container.id',
            value: {
              stringValue:
                'f04d0019eddb42e83f0e93ee3f511f02dd97a15cfb97cd1b5f6f3a1fef7516ff',
            },
          },
          { key: 'host.arch', value: { stringValue: 'aarch64' } },
          {
            key: 'host.name',
            value: {
              stringValue: 'demo-otel-frauddetectionservice-64c7cb4764-jz5zp',
            },
          },
          { key: 'k8s.namespace.name', value: { stringValue: 'default' } },
          { key: 'k8s.node.name', value: { stringValue: 'docker-desktop' } },
          {
            key: 'k8s.pod.name',
            value: {
              stringValue: 'demo-otel-frauddetectionservice-64c7cb4764-jz5zp',
            },
          },
          {
            key: 'os.description',
            value: { stringValue: 'Linux 5.15.49-linuxkit' },
          },
          { key: 'os.type', value: { stringValue: 'linux' } },
          {
            key: 'process.command_line',
            value: {
              stringValue:
                '/usr/lib/jvm/java-17-openjdk-arm64/bin/java -javaagent:/app/opentelemetry-javaagent.jar',
            },
          },
          {
            key: 'process.executable.path',
            value: {
              stringValue: '/usr/lib/jvm/java-17-openjdk-arm64/bin/java',
            },
          },
          { key: 'process.pid', value: { intValue: '1' } },
          {
            key: 'process.runtime.description',
            value: {
              stringValue:
                'Debian OpenJDK 64-Bit Server VM 17.0.6+10-Debian-1deb11u1',
            },
          },
          {
            key: 'process.runtime.name',
            value: { stringValue: 'OpenJDK Runtime Environment' },
          },
          {
            key: 'process.runtime.version',
            value: { stringValue: '17.0.6+10-Debian-1deb11u1' },
          },
          {
            key: 'service.instance.id',
            value: { stringValue: '5c701b9c-77ee-4bcc-b70f-c2a994cf8fa6' },
          },
          {
            key: 'service.name',
            value: { stringValue: 'frauddetectionservice' },
          },
          {
            key: 'service.namespace',
            value: { stringValue: 'opentelemetry-demo' },
          },
          { key: 'telemetry.auto.version', value: { stringValue: '1.23.0' } },
          { key: 'telemetry.sdk.language', value: { stringValue: 'java' } },
          {
            key: 'telemetry.sdk.name',
            value: { stringValue: 'opentelemetry' },
          },
          { key: 'telemetry.sdk.version', value: { stringValue: '1.23.1' } },
        ],
        droppedAttributesCount: 0,
      },
      scopeMetrics: [
        {
          scope: {
            name: 'io.opentelemetry.sdk.trace',
            version: '',
            attributes: [],
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
                    attributes: [
                      { key: 'dropped', value: { boolValue: false } },
                      {
                        key: 'spanProcessorType',
                        value: { stringValue: 'BatchSpanProcessor' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '206',
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
            name: 'io.opentelemetry.exporters.otlp-grpc-okhttp',
            version: '',
            attributes: [],
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
                    attributes: [
                      { key: 'type', value: { stringValue: 'span' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '206',
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
                    attributes: [
                      { key: 'success', value: { boolValue: true } },
                      { key: 'type', value: { stringValue: 'span' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '206',
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
            attributes: [],
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.004743219352334957,
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 4.25,
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '7225',
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
                    attributes: [{ key: 'daemon', value: { boolValue: true } }],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '16',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'daemon', value: { boolValue: false } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      { key: 'pool', value: { stringValue: 'mapped' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "mapped - 'non-volatile memory'",
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'direct' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '44444',
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
                    attributes: [
                      { key: 'pool', value: { stringValue: 'mapped' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "mapped - 'non-volatile memory'",
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'direct' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '9',
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
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "CodeHeap 'non-profiled nmethods'",
                        },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '3836032',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Tenured Gen' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '17615192',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: 'Compressed Class Space' },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '4270896',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Eden Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '5362568',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Metaspace' } },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '37225976',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'profiled nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '10838016',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'non-nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '1337088',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Survivor Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '312168',
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
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "CodeHeap 'non-profiled nmethods'",
                        },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '3866624',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Tenured Gen' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '29360128',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: 'Compressed Class Space' },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '4390912',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Eden Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '11862016',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Metaspace' } },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '37486592',
                    exemplars: [],
                    'f2023-07-13T00:56:03.695964514Z lags': 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'profiled nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '10878976',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'non-nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '2555904',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Survivor Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '7248',
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
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "CodeHeap 'non-profiled nmethods'",
                        },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '2555904',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Tenured Gen' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '5636096',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: 'Compressed Class Space' },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Eden Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '2228224',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Metaspace' } },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'profiled nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '2555904',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'non-nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '2555904',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Survivor Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "CodeHeap 'non-profiled nmethods'",
                        },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '122912768',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Tenured Gen' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '69926912',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: 'Compressed Class Space' },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '1073741824',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Eden Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '27983872',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'profiled nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '122908672',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: { stringValue: "CodeHeap 'non-nmethods'" },
                      },
                      { key: 'type', value: { stringValue: 'non_heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '5836800',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Survivor Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      { key: 'pool', value: { stringValue: 'mapped' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'pool',
                        value: {
                          stringValue: "mapped - 'non-volatile memory'",
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'direct' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '44444',
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
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Tenured Gen' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '17615192',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Eden Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'pool', value: { stringValue: 'Survivor Space' } },
                      { key: 'type', value: { stringValue: 'heap' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '312168',
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asInt: '23',
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
                    attributes: [],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.004779025442000862,
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
                    attributes: [
                      {
                        key: 'action',
                        value: { stringValue: 'end of major GC' },
                      },
                      { key: 'gc', value: { stringValue: 'MarkSweepCompact' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    count: '2',
                    sum: 266,
                    bucketCounts: [
                      '0',
                      '0',
                      '0',
                      '0',
                      '1',
                      '0',
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
                    ],
                    explicitBounds: [
                      0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500,
                      5000, 7500, 10000,
                    ],
                    exemplars: [],
                    flags: 0,
                    min: 27,
                    max: 239,
                  },
                  {
                    attributes: [
                      {
                        key: 'action',
                        value: { stringValue: 'end of minor GC' },
                      },
                      { key: 'gc', value: { stringValue: 'Copy' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    count: '25',
                    sum: 920,
                    bucketCounts: [
                      '0',
                      '13',
                      '1',
                      '3',
                      '3',
                      '1',
                      '0',
                      '4',
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
                      0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500,
                      5000, 7500, 10000,
                    ],
                    exemplars: [],
                    flags: 0,
                    min: 1,
                    max: 218,
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
            name: 'io.opentelemetry.kafka-clients-0.11',
            version: '1.23.0-alpha',
            attributes: [],
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.0018868765425455588,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
              name: 'kafka.consumer.last_rebalance_seconds_ago',
              description:
                'The number of seconds since the last successful rebalance event',
              unit: '',
              gauge: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 1376,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 275,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.2242655303879794,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 7042,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 26.00803558616731,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 395,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
                    exemplars: [],
                    flags: 0,
                  },
                ],
              },
            },
            {
              name: 'kafka.consumer.j2023-07-13T00:56:03.695964514Z oin_total',
              description: 'The total number of group joins',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 173,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 485.26666666666665,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.5595431041136065,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2.06265899663099,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 11.75,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 16767,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 611,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 147313,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 155.6206896551724,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 79.4,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 151,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 320.2,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.4984081977595358,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 535,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 65054,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 37230,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 206,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 1336803843833,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 87.07144373058594,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 163.7751243325006,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 206,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 67,
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
              description:
                'The number of bytes read off all sockets per second',
              unit: '',
              gauge: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 12.136296982326154,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 102.65166273233561,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.3531073446327683,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 6499741572,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 204,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 738,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 3,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2741,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 6499741572,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 738,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 3,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2740,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.5595107175242615,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2.06265899663099,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 5.344395137950994,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.1270389755577011,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2734,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 2.062706270627063,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 37942237.55448276,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 48,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'partition', value: { stringValue: '0' } },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 202,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 40.6778799735759,
                    exemplars: [],
                    flags: 0,
                  },
                ],
              },
            },
            {
              name: 'kafka.consumer.connection_creation_rate',
              description:
                'The number of new connections established per second',
              unit: '',
              gauge: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 1336803843833,
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
              description:
                'The average latency observed due to re-authentication',
              unit: '',
              gauge: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 100.55740740740741,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'topic', value: { stringValue: 'orders' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 1,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
              description:
                'The total number of outgoing bytes sent to all servers',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 114857,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 219,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 218716,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 72549.7524137931,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 0.9868030645358014,
                    exemplars: [],
                    'flags2023-07-13T00:56:03.695964514Z ': 0,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 8,
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      {
                        key: 'node-id',
                        value: { stringValue: 'node-2147483646' },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node--1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: null,
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                      { key: 'node-id', value: { stringValue: 'node-1' } },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
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
                    attributes: [
                      {
                        key: 'client-id',
                        value: {
                          stringValue: 'consumer-frauddetectionservice-1',
                        },
                      },
                    ],
                    startTimeUnixNano: '1689208365835760755',
                    timeUnixNano: '1689209745867720714',
                    asDouble: 458,
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
    },
    {
      resource: {
        attributes: [
          {
            key: 'container.id',
            value: {
              stringValue:
                '5ad9a83f880c19d3ca731b90734d0cf76a505d71669be3f82d45abe3fb4a1f03',
            },
          },
          { key: 'service.name', value: { stringValue: 'cartservice' } },
          {
            key: 'service.instance.id',
            value: { stringValue: '7fc271cf-1093-4a9d-8991-7f0109756a44' },
          },
          {
            key: 'service.namespace',
            value: { stringValue: 'opentelemetry-demo' },
          },
          { key: 'k8s.namespace.name', value: { stringValue: 'default' } },
          { key: 'k8s.node.name', value: { stringValue: 'docker-desktop' } },
          {
            key: 'k8s.pod.name',
            value: { stringValue: 'demo-otel-cartservice-6cb7d4b7ff-k6l82' },
          },
          {
            key: 'telemetry.sdk.name',
            value: { stringValue: 'opentelemetry' },
          },
          { key: 'telemetry.sdk.language', value: { stringValue: 'dotnet' } },
          { key: 'telemetry.sdk.version', value: { stringValue: '1.4.0.802' } },
        ],
        droppedAttributesCount: 0,
      },
      scopeMetrics: [
        {
          scope: {
            name: 'OpenTelemetry.Instrumentation.Runtime',
            version: '1.1.0.2',
            attributes: [],
            droppedAttributesCount: 0,
          },
          metrics: [
            {
              name: 'process.runtime.dotnet.gc.collections.count',
              description:
                'Number of garbage collections that have occurred since process start.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen2' } },
                    ],
                    startTimeUnixNano: '1689208366026572300',
                    timeUnixNano: '1689209746002969600',
                    asInt: '0',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen1' } },
                    ],
                    startTimeUnixNano: '1689208366026572300',
                    timeUnixNano: '1689209746002969600',
                    asInt: '1',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen0' } },
                    ],
                    startTimeUnixNano: '1689208366026572300',
                    timeUnixNano: '1689209746002969600',
                    asInt: '2',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.gc.objects.size',
              description:
                "Count of bytes currently in use by objects in the GC heap that haven't been collected yet. Fragmentation and other GC committed memory pools are excluded.",
              unit: 'bytes',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029624600',
                    timeUnixNano: '1689209746002979500',
                    asInt: '8438304',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.gc.allocations.size',
              description:
                'Count of bytes allocated on the managed GC heap since the process start. .NET objects are allocated from this heap. Object allocations from unmanaged languages such as C/C++ do not use this heap.',
              unit: 'bytes',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029695000',
                    timeUnixNano: '1689209746003001200',
                    asInt: '63961632',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.gc.committed_memory.size',
              description:
                'The amount of committed virtual memory for the managed GC heap, as observed during the latest garbage collection. Committed virtual memory may be larger than the heap size because it includes both memory for storing existing objects (the heap size) and some extra memory that is ready to handle newly allocated objects in the future. The value will be unavailable until at least one garbage collection has occurred.',
              unit: 'bytes',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029729800',
                    timeUnixNano: '1689209746003005400',
                    asInt: '34258944',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.gc.heap.size',
              description:
                'The heap size (including fragmentation), as observed during the latest garbage collection. The value will be unavailable until at least one garbage collection has occurred.',
              unit: 'bytes',
              sum: {
                dataPoints: [
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen0' } },
                    ],
                    startTimeUnixNano: '1689208366029755600',
                    timeUnixNano: '1689209746003010700',
                    asInt: '96',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen1' } },
                    ],
                    startTimeUnixNano: '1689208366029755600',
                    timeUnixNano: '1689209746003010700',
                    asInt: '1747144',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'gen2' } },
                    ],
                    startTimeUnixNano: '1689208366029755600',
                    timeUnixNano: '1689209746003010700',
                    asInt: '2161176',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'loh' } },
                    ],
                    startTimeUnixNano: '1689208366029755600',
                    timeUnixNano: '1689209746003010700',
                    asInt: '2251856',
                    exemplars: [],
                    flags: 0,
                  },
                  {
                    attributes: [
                      { key: 'generation', value: { stringValue: 'poh' } },
                    ],
                    startTimeUnixNano: '1689208366029755600',
                    timeUnixNano: '1689209746003010700',
                    asInt: '134280',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.jit.il_compiled.size',
              description:
                'Count of bytes of intermediate language that have been compiled since the process start.',
              unit: 'bytes',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029783200',
                    timeUnixNano: '1689209746003015700',
                    asInt: '1101606',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.jit.methods_compiled.count',
              description:
                'The number of times the JIT compiler compiled a method since the process start. The JIT compiler may be invoked multiple times for the same method to compile with different generic parameters, or because tiered compilation requested different optimization settings.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029808600',
                    timeUnixNano: '1689209746003019400',
                    asInt: '16098',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.jit.compilation_time',
              description:
                'The amount of time the JIT compiler has spent compiling methods since the process start.',
              unit: 'ns',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029834000',
                    timeUnixNano: '1689209746003024200',
                    asInt: '13460698300',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.monitor.lock_contention.count',
              description:
                'The number of times there was contention when trying to acquire a monitor lock since the process start. Monitor locks are commonly acquired by using the lock keyword in C#, or by calling Monitor.Enter() and Monitor.TryEnter().',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029853200',
                    timeUnixNano: '1689209746003029400',
                    asInt: '1735',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.thread_pool.threads.count',
              description:
                'The number of thread pool threads that currently exist.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029878800',
                    timeUnixNano: '1689209746003034200',
                    asInt: '9',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.thread_pool.completed_items.count',
              description:
                'The number of work items that have been processed by the thread pool since the process start.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029894200',
                    timeUnixNano: '1689209746003062500',
                    asInt: '39980',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: true,
              },
            },
            {
              name: 'process.runtime.dotnet.thread_pool.queue.length',
              description:
                'The number of work items that are currently queued to be processed by the thread pool.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029918700',
                    timeUnixNano: '1689209746003062800',
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
              name: 'process.runtime.dotnet.timer.count',
              description:
                'The number of timer instances that are currently active. Timers can be created by many sources such as System.Threading.Timer, Task.Delay, or the timeout in a CancellationSource. An active timer is registered to tick at some point in the future and has not yet been canceled.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366029976500',
                    timeUnixNano: '1689209746003068500',
                    asInt: '7',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.assemblies.count',
              description:
                'The number of .NET assemblies that are currently loaded.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366030017100',
                    timeUnixNano: '1689209746003076700',
                    asInt: '119',
                    exemplars: [],
                    flags: 0,
                  },
                ],
                aggregationTemporality: 2,
                isMonotonic: false,
              },
            },
            {
              name: 'process.runtime.dotnet.exceptions.count',
              description:
                'Count of exceptions that have been thrown in managed code, since the observation started. The value will be unavailable until an exception has been thrown after OpenTelemetry.Instrumentation.Runtime initialization.',
              unit: '',
              sum: {
                dataPoints: [
                  {
                    attributes: [],
                    startTimeUnixNano: '1689208366030037500',
                    timeUnixNano: '1689209746003091000',
                    asInt: '181',
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
            name: 'OpenTelemetry.Instrumentation.AspNetCore',
            version: '1.0.0.0',
            attributes: [],
            droppedAttributesCount: 0,
          },
          metrics: [
            {
              name: 'http.server.duration',
              description: 'Measures the duration of inbound HTTP requests',
              unit: 'ms',
              histogram: {
                dataPoints: [
                  {
                    attributes: [
                      { key: 'http.flavor', value: { stringValue: '2.0' } },
                      { key: 'http.method', value: { stringValue: 'POST' } },
                      {
                        key: 'http.route',
                        value: { stringValue: '/oteldemo.CartService/GetCart' },
                      },
                      { key: 'http.scheme', value: { stringValue: 'http' } },
                      { key: 'http.status_code', value: { intValue: '200' } },
                      {
                        key: 'net.host.name',
                        value: { stringValue: 'demo-otel-cartservice' },
                      },
                      { key: 'net.host.port', value: { intValue: '8080' } },
                    ],
                    startTimeUnixNano: '1689208366030060000',
                    timeUnixNano: '1689209746003117300',
                    count: '1097',
                    sum: 6438.950200000005,
                    bucketCounts: [
                      '0',
                      '891',
                      '87',
                      '77',
                      '24',
                      '8',
                      '3',
                      '5',
                      '1',
                      '1',
                      '0',
                      '0',
                      '0',
                      '0',
                      '0',
                      '0',
                    ],
                    explicitBounds: [
                      0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500,
                      5000, 7500, 10000,
                    ],
                    exemplars: [],
                    flags: 0,
                    min: 0.2182,
                    max: 666.2306,
                  },
                  {
                    attributes: [
                      { key: 'http.flavor', value: { stringValue: '2.0' } },
                      { key: 'http.method', value: { stringValue: 'POST' } },
                      {
                        key: 'http.route',
                        value: { stringValue: '/oteldemo.CartService/AddItem' },
                      },
                      { key: 'http.scheme', value: { stringValue: 'http' } },
                      { key: 'http.status_code', value: { intValue: '200' } },
                      {
                        key: 'net.host.name',
                        value: { stringValue: 'demo-otel-cartservice' },
                      },
                      { key: 'net.host.port', value: { intValue: '8080' } },
                    ],
                    startTimeUnixNano: '1689208366030060000',
                    timeUnixNano: '1689209746003117300',
                    count: '619',
                    sum: 7960.401600000002,
                    bucketCounts: [
                      '0',
                      '345',
                      '111',
                      '98',
                      '35',
                      '13',
                      '5',
                      '11',
                      '1',
                      '0',
                      '0',
                      '0',
                      '0',
                      '0',
                      '0',
                      '0',
                    ],
                    explicitBounds: [
                      0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500,
                      5000, 7500, 10000,
                    ],
                    exemplars: [],
                    flags: 0,
                    min: 0.8537,
                    max: 489.3148,
                  },
                  {
                    attributes: [
                      { key: 'http.flavor', value: { stringValue: '2.0' } },
                      { key: 'http.method', value: { stringValue: 'POST' } },
                      {
                        key: 'http.route',
                        value: {
                          stringValue: '/oteldemo.CartService/EmptyCart',
                        },
                      },
                      { key: 'http.scheme', value: { stringValue: 'http' } },
                      { key: 'http.status_code', value: { intValue: '200' } },
                      {
                        key: 'net.host.name',
                        value: { stringValue: 'demo-otel-cartservice' },
                      },
                      { key: 'net.host.port', value: { intValue: '8080' } },
                    ],
                    startTimeUnixNano: '1689208366030060000',
                    timeUnixNano: '1689209746003117300',
                    count: '206',
                    sum: 1627.3238999999992,
                    bucketCounts: [
                      '0',
                      '163',
                      '14',
                      '11',
                      '10',
                      '3',
                      '2',
                      '3',
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
                      0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500,
                      5000, 7500, 10000,
                    ],
                    exemplars: [],
                    flags: 0,
                    min: 0.4361,
                    max: 177.875,
                  },
                ],
                'aggregationTempora2023-07-13T00:56:03.695964514Z lity': 2,
              },
            },
          ],
          schemaUrl: '',
        },
      ],
      schemaUrl: '',
    },
  ],
};
