/* eslint-disable */
// generated with https://github.com/stephenh/ts-proto
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export enum AggregationTemporality {
  AGGREGATION_TEMPORALITY_UNSPECIFIED = 0,
  AGGREGATION_TEMPORALITY_DELTA = 1,
  AGGREGATION_TEMPORALITY_CUMULATIVE = 2,
  UNRECOGNIZED = -1,
}

export function aggregationTemporalityFromJSON(
  object: any
): AggregationTemporality {
  switch (object) {
    case 0:
    case 'AGGREGATION_TEMPORALITY_UNSPECIFIED':
      return AggregationTemporality.AGGREGATION_TEMPORALITY_UNSPECIFIED;
    case 1:
    case 'AGGREGATION_TEMPORALITY_DELTA':
      return AggregationTemporality.AGGREGATION_TEMPORALITY_DELTA;
    case 2:
    case 'AGGREGATION_TEMPORALITY_CUMULATIVE':
      return AggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AggregationTemporality.UNRECOGNIZED;
  }
}

export function aggregationTemporalityToJSON(
  object: AggregationTemporality
): string {
  switch (object) {
    case AggregationTemporality.AGGREGATION_TEMPORALITY_UNSPECIFIED:
      return 'AGGREGATION_TEMPORALITY_UNSPECIFIED';
    case AggregationTemporality.AGGREGATION_TEMPORALITY_DELTA:
      return 'AGGREGATION_TEMPORALITY_DELTA';
    case AggregationTemporality.AGGREGATION_TEMPORALITY_CUMULATIVE:
      return 'AGGREGATION_TEMPORALITY_CUMULATIVE';
    case AggregationTemporality.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export enum DataPointFlags {
  DATA_POINT_FLAGS_DO_NOT_USE = 0,
  DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK = 1,
  UNRECOGNIZED = -1,
}

export function dataPointFlagsFromJSON(object: any): DataPointFlags {
  switch (object) {
    case 0:
    case 'DATA_POINT_FLAGS_DO_NOT_USE':
      return DataPointFlags.DATA_POINT_FLAGS_DO_NOT_USE;
    case 1:
    case 'DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK':
      return DataPointFlags.DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return DataPointFlags.UNRECOGNIZED;
  }
}

export function dataPointFlagsToJSON(object: DataPointFlags): string {
  switch (object) {
    case DataPointFlags.DATA_POINT_FLAGS_DO_NOT_USE:
      return 'DATA_POINT_FLAGS_DO_NOT_USE';
    case DataPointFlags.DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK:
      return 'DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK';
    case DataPointFlags.UNRECOGNIZED:
    default:
      return 'UNRECOGNIZED';
  }
}

export interface AnyValue {
  stringValue?: string | undefined;
  boolValue?: boolean | undefined;
  intValue?: string | undefined;
  doubleValue?: number | undefined;
  arrayValue?: ArrayValue | undefined;
  kvlistValue?: KeyValueList | undefined;
  bytesValue?: Uint8Array | undefined;
}

export interface ArrayValue {
  values: AnyValue[];
}

export interface KeyValueList {
  values: KeyValue[];
}

export interface KeyValue {
  key: string;
  value: AnyValue | undefined;
}

export interface InstrumentationScope {
  name: string;
  version: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface Resource {
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface MetricsData {
  resourceMetrics: ResourceMetrics[];
}

export interface ResourceMetrics {
  resource: Resource | undefined;
  scopeMetrics: ScopeMetrics[];
  schemaUrl: string;
}

export interface ScopeMetrics {
  scope: InstrumentationScope | undefined;
  metrics: Metric[];
  schemaUrl: string;
}

export interface Metric {
  name: string;
  description: string;
  unit: string;
  gauge?: Gauge | undefined;
  sum?: Sum | undefined;
  histogram?: Histogram | undefined;
  exponentialHistogram?: ExponentialHistogram | undefined;
  summary?: Summary | undefined;
}

export interface Gauge {
  dataPoints: NumberDataPoint[];
}

export interface Sum {
  dataPoints: NumberDataPoint[];
  aggregationTemporality: AggregationTemporality;
  isMonotonic: boolean;
}

export interface Histogram {
  dataPoints: HistogramDataPoint[];
  aggregationTemporality: AggregationTemporality;
}

export interface ExponentialHistogram {
  dataPoints: ExponentialHistogramDataPoint[];
  aggregationTemporality: AggregationTemporality;
}

export interface Summary {
  dataPoints: SummaryDataPoint[];
}

export interface NumberDataPoint {
  attributes: KeyValue[];
  startTimeUnixNano: string;
  timeUnixNano: string;
  asDouble?: number | undefined;
  asInt?: string | undefined;
  exemplars: Exemplar[];
  flags: number;
}

export interface HistogramDataPoint {
  attributes: KeyValue[];
  startTimeUnixNano: string;
  timeUnixNano: string;
  count: string;
  sum?: number | undefined;
  bucketCounts: string[];
  explicitBounds: number[];
  exemplars: Exemplar[];
  flags: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface ExponentialHistogramDataPoint {
  attributes: KeyValue[];
  startTimeUnixNano: string;
  timeUnixNano: string;
  count: string;
  sum?: number | undefined;
  scale: number;
  zeroCount: string;
  positive: ExponentialHistogramDataPoint_Buckets | undefined;
  negative: ExponentialHistogramDataPoint_Buckets | undefined;
  flags: number;
  exemplars: Exemplar[];
  min?: number | undefined;
  max?: number | undefined;
  zeroThreshold: number;
}

export interface ExponentialHistogramDataPoint_Buckets {
  offset: number;
  bucketCounts: string[];
}

export interface SummaryDataPoint {
  attributes: KeyValue[];
  startTimeUnixNano: string;
  timeUnixNano: string;
  count: string;
  sum: number;
  quantileValues: SummaryDataPoint_ValueAtQuantile[];
  flags: number;
}

export interface SummaryDataPoint_ValueAtQuantile {
  quantile: number;
  value: number;
}

export interface Exemplar {
  filteredAttributes: KeyValue[];
  timeUnixNano: string;
  asDouble?: number | undefined;
  asInt?: string | undefined;
  spanId: Uint8Array;
  traceId: Uint8Array;
}

export interface ExportMetricsServiceRequest {
  resourceMetrics: ResourceMetrics[];
}

export interface ExportMetricsServiceResponse {
  partialSuccess: ExportMetricsPartialSuccess | undefined;
}

export interface ExportMetricsPartialSuccess {
  rejectedDataPoints: string;
  errorMessage: string;
}

function createBaseAnyValue(): AnyValue {
  return {
    stringValue: undefined,
    boolValue: undefined,
    intValue: undefined,
    doubleValue: undefined,
    arrayValue: undefined,
    kvlistValue: undefined,
    bytesValue: undefined,
  };
}

export const AnyValue = {
  encode(
    message: AnyValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(24).int64(message.intValue);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(33).double(message.doubleValue);
    }
    if (message.arrayValue !== undefined) {
      ArrayValue.encode(message.arrayValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.kvlistValue !== undefined) {
      KeyValueList.encode(
        message.kvlistValue,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.boolValue = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.intValue = longToString(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.doubleValue = reader.double();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.arrayValue = ArrayValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.kvlistValue = KeyValueList.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.bytesValue = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    type keys =
      | 'stringValue'
      | 'boolValue'
      | 'intValue'
      | 'doubleValue'
      | 'arrayValue'
      | 'kvlistValue'
      | 'bytesValue';

    const keyArr: keys[] = [
      'stringValue',
      'boolValue',
      'intValue',
      'doubleValue',
      'arrayValue',
      'kvlistValue',
      'bytesValue',
    ];
    keyArr.forEach((key) => {
      if (message[key] === undefined) delete message[key];
    });
    return message;
  },

  fromJSON(object: any): AnyValue {
    return {
      stringValue: isSet(object.stringValue)
        ? String(object.stringValue)
        : undefined,
      boolValue: isSet(object.boolValue)
        ? Boolean(object.boolValue)
        : undefined,
      intValue: isSet(object.intValue) ? String(object.intValue) : undefined,
      doubleValue: isSet(object.doubleValue)
        ? Number(object.doubleValue)
        : undefined,
      arrayValue: isSet(object.arrayValue)
        ? ArrayValue.fromJSON(object.arrayValue)
        : undefined,
      kvlistValue: isSet(object.kvlistValue)
        ? KeyValueList.fromJSON(object.kvlistValue)
        : undefined,
      bytesValue: isSet(object.bytesValue)
        ? bytesFromBase64(object.bytesValue)
        : undefined,
    };
  },

  toJSON(message: AnyValue): unknown {
    const obj: any = {};
    message.stringValue !== undefined &&
      (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.intValue !== undefined && (obj.intValue = message.intValue);
    message.doubleValue !== undefined &&
      (obj.doubleValue = message.doubleValue);
    message.arrayValue !== undefined &&
      (obj.arrayValue = message.arrayValue
        ? ArrayValue.toJSON(message.arrayValue)
        : undefined);
    message.kvlistValue !== undefined &&
      (obj.kvlistValue = message.kvlistValue
        ? KeyValueList.toJSON(message.kvlistValue)
        : undefined);
    message.bytesValue !== undefined &&
      (obj.bytesValue =
        message.bytesValue !== undefined
          ? base64FromBytes(message.bytesValue)
          : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<AnyValue>, I>>(base?: I): AnyValue {
    return AnyValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AnyValue>, I>>(object: I): AnyValue {
    const message = createBaseAnyValue();
    message.stringValue = object.stringValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.arrayValue =
      object.arrayValue !== undefined && object.arrayValue !== null
        ? ArrayValue.fromPartial(object.arrayValue)
        : undefined;
    message.kvlistValue =
      object.kvlistValue !== undefined && object.kvlistValue !== null
        ? KeyValueList.fromPartial(object.kvlistValue)
        : undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    return message;
  },
};

function createBaseArrayValue(): ArrayValue {
  return { values: [] };
}

export const ArrayValue = {
  encode(
    message: ArrayValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      AnyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArrayValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(AnyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArrayValue {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => AnyValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ArrayValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? AnyValue.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayValue>, I>>(base?: I): ArrayValue {
    return ArrayValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayValue>, I>>(
    object: I
  ): ArrayValue {
    const message = createBaseArrayValue();
    message.values = object.values?.map((e) => AnyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeyValueList(): KeyValueList {
  return { values: [] };
}

export const KeyValueList = {
  encode(
    message: KeyValueList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.values) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValueList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(KeyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyValueList {
    return {
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => KeyValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: KeyValueList): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValueList>, I>>(
    base?: I
  ): KeyValueList {
    return KeyValueList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeyValueList>, I>>(
    object: I
  ): KeyValueList {
    const message = createBaseKeyValueList();
    message.values = object.values?.map((e) => KeyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeyValue(): KeyValue {
  return { key: '', value: undefined };
}

export const KeyValue = {
  encode(
    message: KeyValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AnyValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValue {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = AnyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyValue {
    return {
      key: isSet(object.key) ? String(object.key) : '',
      value: isSet(object.value) ? AnyValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: KeyValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? AnyValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValue>, I>>(base?: I): KeyValue {
    return KeyValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeyValue>, I>>(object: I): KeyValue {
    const message = createBaseKeyValue();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? AnyValue.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseInstrumentationScope(): InstrumentationScope {
  return { name: '', version: '', attributes: [], droppedAttributesCount: 0 };
}

export const InstrumentationScope = {
  encode(
    message: InstrumentationScope,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== '') {
      writer.uint32(18).string(message.version);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(32).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InstrumentationScope {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentationScope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.version = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InstrumentationScope {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      version: isSet(object.version) ? String(object.version) : '',
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? Number(object.droppedAttributesCount)
        : 0,
    };
  },

  toJSON(message: InstrumentationScope): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<InstrumentationScope>, I>>(
    base?: I
  ): InstrumentationScope {
    return InstrumentationScope.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InstrumentationScope>, I>>(
    object: I
  ): InstrumentationScope {
    const message = createBaseInstrumentationScope();
    message.name = object.name ?? '';
    message.version = object.version ?? '';
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseResource(): Resource {
  return { attributes: [], droppedAttributesCount: 0 };
}

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(16).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Resource {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount)
        ? Number(object.droppedAttributesCount)
        : 0,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Resource>, I>>(base?: I): Resource {
    return Resource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseMetricsData(): MetricsData {
  return { resourceMetrics: [] };
}

export const MetricsData = {
  encode(
    message: MetricsData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resourceMetrics) {
      ResourceMetrics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricsData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceMetrics.push(
            ResourceMetrics.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MetricsData {
    return {
      resourceMetrics: Array.isArray(object?.resourceMetrics)
        ? object.resourceMetrics.map((e: any) => ResourceMetrics.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MetricsData): unknown {
    const obj: any = {};
    if (message.resourceMetrics) {
      obj.resourceMetrics = message.resourceMetrics.map((e) =>
        e ? ResourceMetrics.toJSON(e) : undefined
      );
    } else {
      obj.resourceMetrics = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MetricsData>, I>>(base?: I): MetricsData {
    return MetricsData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MetricsData>, I>>(
    object: I
  ): MetricsData {
    const message = createBaseMetricsData();
    message.resourceMetrics =
      object.resourceMetrics?.map((e) => ResourceMetrics.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceMetrics(): ResourceMetrics {
  return { resource: undefined, scopeMetrics: [], schemaUrl: '' };
}

export const ResourceMetrics = {
  encode(
    message: ResourceMetrics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scopeMetrics) {
      ScopeMetrics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== '') {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceMetrics {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.scopeMetrics.push(
            ScopeMetrics.decode(reader, reader.uint32())
          );
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schemaUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResourceMetrics {
    return {
      resource: isSet(object.resource)
        ? Resource.fromJSON(object.resource)
        : undefined,
      scopeMetrics: Array.isArray(object?.scopeMetrics)
        ? object.scopeMetrics.map((e: any) => ScopeMetrics.fromJSON(e))
        : [],
      schemaUrl: isSet(object.schemaUrl) ? String(object.schemaUrl) : '',
    };
  },

  toJSON(message: ResourceMetrics): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    if (message.scopeMetrics) {
      obj.scopeMetrics = message.scopeMetrics.map((e) =>
        e ? ScopeMetrics.toJSON(e) : undefined
      );
    } else {
      obj.scopeMetrics = [];
    }
    message.schemaUrl !== undefined && (obj.schemaUrl = message.schemaUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceMetrics>, I>>(
    base?: I
  ): ResourceMetrics {
    return ResourceMetrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceMetrics>, I>>(
    object: I
  ): ResourceMetrics {
    const message = createBaseResourceMetrics();
    message.resource =
      object.resource !== undefined && object.resource !== null
        ? Resource.fromPartial(object.resource)
        : undefined;
    message.scopeMetrics =
      object.scopeMetrics?.map((e) => ScopeMetrics.fromPartial(e)) || [];
    message.schemaUrl = object.schemaUrl ?? '';
    return message;
  },
};

function createBaseScopeMetrics(): ScopeMetrics {
  return { scope: undefined, metrics: [], schemaUrl: '' };
}

export const ScopeMetrics = {
  encode(
    message: ScopeMetrics,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.scope !== undefined) {
      InstrumentationScope.encode(
        message.scope,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.metrics) {
      Metric.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== '') {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScopeMetrics {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopeMetrics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.scope = InstrumentationScope.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metrics.push(Metric.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schemaUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ScopeMetrics {
    return {
      scope: isSet(object.scope)
        ? InstrumentationScope.fromJSON(object.scope)
        : undefined,
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => Metric.fromJSON(e))
        : [],
      schemaUrl: isSet(object.schemaUrl) ? String(object.schemaUrl) : '',
    };
  },

  toJSON(message: ScopeMetrics): unknown {
    const obj: any = {};
    message.scope !== undefined &&
      (obj.scope = message.scope
        ? InstrumentationScope.toJSON(message.scope)
        : undefined);
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) =>
        e ? Metric.toJSON(e) : undefined
      );
    } else {
      obj.metrics = [];
    }
    message.schemaUrl !== undefined && (obj.schemaUrl = message.schemaUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScopeMetrics>, I>>(
    base?: I
  ): ScopeMetrics {
    return ScopeMetrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScopeMetrics>, I>>(
    object: I
  ): ScopeMetrics {
    const message = createBaseScopeMetrics();
    message.scope =
      object.scope !== undefined && object.scope !== null
        ? InstrumentationScope.fromPartial(object.scope)
        : undefined;
    message.metrics = object.metrics?.map((e) => Metric.fromPartial(e)) || [];
    message.schemaUrl = object.schemaUrl ?? '';
    return message;
  },
};

function createBaseMetric(): Metric {
  return {
    name: '',
    description: '',
    unit: '',
    gauge: undefined,
    sum: undefined,
    histogram: undefined,
    exponentialHistogram: undefined,
    summary: undefined,
  };
}

export const Metric = {
  encode(
    message: Metric,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description);
    }
    if (message.unit !== '') {
      writer.uint32(26).string(message.unit);
    }
    if (message.gauge !== undefined) {
      Gauge.encode(message.gauge, writer.uint32(42).fork()).ldelim();
    }
    if (message.sum !== undefined) {
      Sum.encode(message.sum, writer.uint32(58).fork()).ldelim();
    }
    if (message.histogram !== undefined) {
      Histogram.encode(message.histogram, writer.uint32(74).fork()).ldelim();
    }
    if (message.exponentialHistogram !== undefined) {
      ExponentialHistogram.encode(
        message.exponentialHistogram,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.summary !== undefined) {
      Summary.encode(message.summary, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metric {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.unit = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gauge = Gauge.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.sum = Sum.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.histogram = Histogram.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.exponentialHistogram = ExponentialHistogram.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.summary = Summary.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    type keys =
      | 'gauge'
      | 'sum'
      | 'histogram'
      | 'exponentialHistogram'
      | 'summary';
    const keyArr: keys[] = [
      'gauge',
      'sum',
      'histogram',
      'exponentialHistogram',
      'summary',
    ];
    keyArr.forEach((type: keys) => {
      if (message[type] === undefined) delete message[type];
    });
    return message;
  },

  fromJSON(object: any): Metric {
    return {
      name: isSet(object.name) ? String(object.name) : '',
      description: isSet(object.description) ? String(object.description) : '',
      unit: isSet(object.unit) ? String(object.unit) : '',
      gauge: isSet(object.gauge) ? Gauge.fromJSON(object.gauge) : undefined,
      sum: isSet(object.sum) ? Sum.fromJSON(object.sum) : undefined,
      histogram: isSet(object.histogram)
        ? Histogram.fromJSON(object.histogram)
        : undefined,
      exponentialHistogram: isSet(object.exponentialHistogram)
        ? ExponentialHistogram.fromJSON(object.exponentialHistogram)
        : undefined,
      summary: isSet(object.summary)
        ? Summary.fromJSON(object.summary)
        : undefined,
    };
  },

  toJSON(message: Metric): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.unit !== undefined && (obj.unit = message.unit);
    message.gauge !== undefined &&
      (obj.gauge = message.gauge ? Gauge.toJSON(message.gauge) : undefined);
    message.sum !== undefined &&
      (obj.sum = message.sum ? Sum.toJSON(message.sum) : undefined);
    message.histogram !== undefined &&
      (obj.histogram = message.histogram
        ? Histogram.toJSON(message.histogram)
        : undefined);
    message.exponentialHistogram !== undefined &&
      (obj.exponentialHistogram = message.exponentialHistogram
        ? ExponentialHistogram.toJSON(message.exponentialHistogram)
        : undefined);
    message.summary !== undefined &&
      (obj.summary = message.summary
        ? Summary.toJSON(message.summary)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Metric>, I>>(base?: I): Metric {
    return Metric.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Metric>, I>>(object: I): Metric {
    const message = createBaseMetric();
    message.name = object.name ?? '';
    message.description = object.description ?? '';
    message.unit = object.unit ?? '';
    message.gauge =
      object.gauge !== undefined && object.gauge !== null
        ? Gauge.fromPartial(object.gauge)
        : undefined;
    message.sum =
      object.sum !== undefined && object.sum !== null
        ? Sum.fromPartial(object.sum)
        : undefined;
    message.histogram =
      object.histogram !== undefined && object.histogram !== null
        ? Histogram.fromPartial(object.histogram)
        : undefined;
    message.exponentialHistogram =
      object.exponentialHistogram !== undefined &&
      object.exponentialHistogram !== null
        ? ExponentialHistogram.fromPartial(object.exponentialHistogram)
        : undefined;
    message.summary =
      object.summary !== undefined && object.summary !== null
        ? Summary.fromPartial(object.summary)
        : undefined;
    return message;
  },
};

function createBaseGauge(): Gauge {
  return { dataPoints: [] };
}

export const Gauge = {
  encode(message: Gauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataPoints) {
      NumberDataPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Gauge {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataPoints.push(
            NumberDataPoint.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Gauge {
    return {
      dataPoints: Array.isArray(object?.dataPoints)
        ? object.dataPoints.map((e: any) => NumberDataPoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Gauge): unknown {
    const obj: any = {};
    if (message.dataPoints) {
      obj.dataPoints = message.dataPoints.map((e) =>
        e ? NumberDataPoint.toJSON(e) : undefined
      );
    } else {
      obj.dataPoints = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gauge>, I>>(base?: I): Gauge {
    return Gauge.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Gauge>, I>>(object: I): Gauge {
    const message = createBaseGauge();
    message.dataPoints =
      object.dataPoints?.map((e) => NumberDataPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSum(): Sum {
  return { dataPoints: [], aggregationTemporality: 0, isMonotonic: false };
}

export const Sum = {
  encode(message: Sum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataPoints) {
      NumberDataPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregationTemporality !== 0) {
      writer.uint32(16).int32(message.aggregationTemporality);
    }
    if (message.isMonotonic === true) {
      writer.uint32(24).bool(message.isMonotonic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sum {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataPoints.push(
            NumberDataPoint.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.aggregationTemporality = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isMonotonic = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Sum {
    return {
      dataPoints: Array.isArray(object?.dataPoints)
        ? object.dataPoints.map((e: any) => NumberDataPoint.fromJSON(e))
        : [],
      aggregationTemporality: isSet(object.aggregationTemporality)
        ? aggregationTemporalityFromJSON(object.aggregationTemporality)
        : 0,
      isMonotonic: isSet(object.isMonotonic)
        ? Boolean(object.isMonotonic)
        : false,
    };
  },

  toJSON(message: Sum): unknown {
    const obj: any = {};
    if (message.dataPoints) {
      obj.dataPoints = message.dataPoints.map((e) =>
        e ? NumberDataPoint.toJSON(e) : undefined
      );
    } else {
      obj.dataPoints = [];
    }
    message.aggregationTemporality !== undefined &&
      (obj.aggregationTemporality = aggregationTemporalityToJSON(
        message.aggregationTemporality
      ));
    message.isMonotonic !== undefined &&
      (obj.isMonotonic = message.isMonotonic);
    return obj;
  },

  create<I extends Exact<DeepPartial<Sum>, I>>(base?: I): Sum {
    return Sum.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Sum>, I>>(object: I): Sum {
    const message = createBaseSum();
    message.dataPoints =
      object.dataPoints?.map((e) => NumberDataPoint.fromPartial(e)) || [];
    message.aggregationTemporality = object.aggregationTemporality ?? 0;
    message.isMonotonic = object.isMonotonic ?? false;
    return message;
  },
};

function createBaseHistogram(): Histogram {
  return { dataPoints: [], aggregationTemporality: 0 };
}

export const Histogram = {
  encode(
    message: Histogram,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dataPoints) {
      HistogramDataPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregationTemporality !== 0) {
      writer.uint32(16).int32(message.aggregationTemporality);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Histogram {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistogram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataPoints.push(
            HistogramDataPoint.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.aggregationTemporality = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Histogram {
    return {
      dataPoints: Array.isArray(object?.dataPoints)
        ? object.dataPoints.map((e: any) => HistogramDataPoint.fromJSON(e))
        : [],
      aggregationTemporality: isSet(object.aggregationTemporality)
        ? aggregationTemporalityFromJSON(object.aggregationTemporality)
        : 0,
    };
  },

  toJSON(message: Histogram): unknown {
    const obj: any = {};
    if (message.dataPoints) {
      obj.dataPoints = message.dataPoints.map((e) =>
        e ? HistogramDataPoint.toJSON(e) : undefined
      );
    } else {
      obj.dataPoints = [];
    }
    message.aggregationTemporality !== undefined &&
      (obj.aggregationTemporality = aggregationTemporalityToJSON(
        message.aggregationTemporality
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Histogram>, I>>(base?: I): Histogram {
    return Histogram.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Histogram>, I>>(
    object: I
  ): Histogram {
    const message = createBaseHistogram();
    message.dataPoints =
      object.dataPoints?.map((e) => HistogramDataPoint.fromPartial(e)) || [];
    message.aggregationTemporality = object.aggregationTemporality ?? 0;
    return message;
  },
};

function createBaseExponentialHistogram(): ExponentialHistogram {
  return { dataPoints: [], aggregationTemporality: 0 };
}

export const ExponentialHistogram = {
  encode(
    message: ExponentialHistogram,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dataPoints) {
      ExponentialHistogramDataPoint.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.aggregationTemporality !== 0) {
      writer.uint32(16).int32(message.aggregationTemporality);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExponentialHistogram {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialHistogram();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataPoints.push(
            ExponentialHistogramDataPoint.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.aggregationTemporality = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExponentialHistogram {
    return {
      dataPoints: Array.isArray(object?.dataPoints)
        ? object.dataPoints.map((e: any) =>
            ExponentialHistogramDataPoint.fromJSON(e)
          )
        : [],
      aggregationTemporality: isSet(object.aggregationTemporality)
        ? aggregationTemporalityFromJSON(object.aggregationTemporality)
        : 0,
    };
  },

  toJSON(message: ExponentialHistogram): unknown {
    const obj: any = {};
    if (message.dataPoints) {
      obj.dataPoints = message.dataPoints.map((e) =>
        e ? ExponentialHistogramDataPoint.toJSON(e) : undefined
      );
    } else {
      obj.dataPoints = [];
    }
    message.aggregationTemporality !== undefined &&
      (obj.aggregationTemporality = aggregationTemporalityToJSON(
        message.aggregationTemporality
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<ExponentialHistogram>, I>>(
    base?: I
  ): ExponentialHistogram {
    return ExponentialHistogram.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExponentialHistogram>, I>>(
    object: I
  ): ExponentialHistogram {
    const message = createBaseExponentialHistogram();
    message.dataPoints =
      object.dataPoints?.map((e) =>
        ExponentialHistogramDataPoint.fromPartial(e)
      ) || [];
    message.aggregationTemporality = object.aggregationTemporality ?? 0;
    return message;
  },
};

function createBaseSummary(): Summary {
  return { dataPoints: [] };
}

export const Summary = {
  encode(
    message: Summary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dataPoints) {
      SummaryDataPoint.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Summary {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dataPoints.push(
            SummaryDataPoint.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Summary {
    return {
      dataPoints: Array.isArray(object?.dataPoints)
        ? object.dataPoints.map((e: any) => SummaryDataPoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Summary): unknown {
    const obj: any = {};
    if (message.dataPoints) {
      obj.dataPoints = message.dataPoints.map((e) =>
        e ? SummaryDataPoint.toJSON(e) : undefined
      );
    } else {
      obj.dataPoints = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Summary>, I>>(base?: I): Summary {
    return Summary.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Summary>, I>>(object: I): Summary {
    const message = createBaseSummary();
    message.dataPoints =
      object.dataPoints?.map((e) => SummaryDataPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNumberDataPoint(): NumberDataPoint {
  return {
    attributes: [],
    startTimeUnixNano: '0',
    timeUnixNano: '0',
    asDouble: undefined,
    asInt: undefined,
    exemplars: [],
    flags: 0,
  };
}

export const NumberDataPoint = {
  encode(
    message: NumberDataPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.startTimeUnixNano !== '0') {
      writer.uint32(17).fixed64(message.startTimeUnixNano);
    }
    if (message.timeUnixNano !== '0') {
      writer.uint32(25).fixed64(message.timeUnixNano);
    }
    if (message.asDouble !== undefined) {
      writer.uint32(33).double(message.asDouble);
    }
    if (message.asInt !== undefined) {
      writer.uint32(49).sfixed64(message.asInt);
    }
    for (const v of message.exemplars) {
      Exemplar.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(64).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NumberDataPoint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.startTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.asDouble = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.asInt = longToString(reader.sfixed64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.exemplars.push(Exemplar.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.flags = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    if (message.asDouble === undefined) delete message.asDouble;
    if (message.asInt === undefined) delete message.asInt;
    return message;
  },

  fromJSON(object: any): NumberDataPoint {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? String(object.startTimeUnixNano)
        : '0',
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : '0',
      asDouble: isSet(object.asDouble) ? Number(object.asDouble) : undefined,
      asInt: isSet(object.asInt) ? String(object.asInt) : undefined,
      exemplars: Array.isArray(object?.exemplars)
        ? object.exemplars.map((e: any) => Exemplar.fromJSON(e))
        : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: NumberDataPoint): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.startTimeUnixNano !== undefined &&
      (obj.startTimeUnixNano = message.startTimeUnixNano);
    message.timeUnixNano !== undefined &&
      (obj.timeUnixNano = message.timeUnixNano);
    message.asDouble !== undefined && (obj.asDouble = message.asDouble);
    message.asInt !== undefined && (obj.asInt = message.asInt);
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map((e) =>
        e ? Exemplar.toJSON(e) : undefined
      );
    } else {
      obj.exemplars = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create<I extends Exact<DeepPartial<NumberDataPoint>, I>>(
    base?: I
  ): NumberDataPoint {
    return NumberDataPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NumberDataPoint>, I>>(
    object: I
  ): NumberDataPoint {
    const message = createBaseNumberDataPoint();
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.startTimeUnixNano = object.startTimeUnixNano ?? '0';
    message.timeUnixNano = object.timeUnixNano ?? '0';
    message.asDouble = object.asDouble ?? undefined;
    message.asInt = object.asInt ?? undefined;
    message.exemplars =
      object.exemplars?.map((e) => Exemplar.fromPartial(e)) || [];
    message.flags = object.flags ?? 0;
    return message;
  },
};

function createBaseHistogramDataPoint(): HistogramDataPoint {
  return {
    attributes: [],
    startTimeUnixNano: '0',
    timeUnixNano: '0',
    count: '0',
    sum: undefined,
    bucketCounts: [],
    explicitBounds: [],
    exemplars: [],
    flags: 0,
    min: undefined,
    max: undefined,
  };
}

export const HistogramDataPoint = {
  encode(
    message: HistogramDataPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.startTimeUnixNano !== '0') {
      writer.uint32(17).fixed64(message.startTimeUnixNano);
    }
    if (message.timeUnixNano !== '0') {
      writer.uint32(25).fixed64(message.timeUnixNano);
    }
    if (message.count !== '0') {
      writer.uint32(33).fixed64(message.count);
    }
    if (message.sum !== undefined) {
      writer.uint32(41).double(message.sum);
    }
    writer.uint32(50).fork();
    for (const v of message.bucketCounts) {
      writer.fixed64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.explicitBounds) {
      writer.double(v);
    }
    writer.ldelim();
    for (const v of message.exemplars) {
      Exemplar.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(80).uint32(message.flags);
    }
    if (message.min !== undefined) {
      writer.uint32(89).double(message.min);
    }
    if (message.max !== undefined) {
      writer.uint32(97).double(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistogramDataPoint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistogramDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.startTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.count = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.sum = reader.double();
          continue;
        case 6:
          if (tag === 49) {
            message.bucketCounts.push(longToString(reader.fixed64() as Long));

            continue;
          }

          if (tag === 50) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bucketCounts.push(longToString(reader.fixed64() as Long));
            }

            continue;
          }

          break;
        case 7:
          if (tag === 57) {
            message.explicitBounds.push(reader.double());

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.explicitBounds.push(reader.double());
            }

            continue;
          }

          break;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.exemplars.push(Exemplar.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 11:
          if (tag !== 89) {
            break;
          }

          message.min = reader.double();
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.max = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    if (message.max === undefined) delete message.max;
    if (message.min === undefined) delete message.min;
    if (message.sum === undefined) delete message.sum;
    return message;
  },

  fromJSON(object: any): HistogramDataPoint {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? String(object.startTimeUnixNano)
        : '0',
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : '0',
      count: isSet(object.count) ? String(object.count) : '0',
      sum: isSet(object.sum) ? Number(object.sum) : undefined,
      bucketCounts: Array.isArray(object?.bucketCounts)
        ? object.bucketCounts.map((e: any) => String(e))
        : [],
      explicitBounds: Array.isArray(object?.explicitBounds)
        ? object.explicitBounds.map((e: any) => Number(e))
        : [],
      exemplars: Array.isArray(object?.exemplars)
        ? object.exemplars.map((e: any) => Exemplar.fromJSON(e))
        : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      min: isSet(object.min) ? Number(object.min) : undefined,
      max: isSet(object.max) ? Number(object.max) : undefined,
    };
  },

  toJSON(message: HistogramDataPoint): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.startTimeUnixNano !== undefined &&
      (obj.startTimeUnixNano = message.startTimeUnixNano);
    message.timeUnixNano !== undefined &&
      (obj.timeUnixNano = message.timeUnixNano);
    message.count !== undefined && (obj.count = message.count);
    message.sum !== undefined && (obj.sum = message.sum);
    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map((e) => e);
    } else {
      obj.bucketCounts = [];
    }
    if (message.explicitBounds) {
      obj.explicitBounds = message.explicitBounds.map((e) => e);
    } else {
      obj.explicitBounds = [];
    }
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map((e) =>
        e ? Exemplar.toJSON(e) : undefined
      );
    } else {
      obj.exemplars = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  create<I extends Exact<DeepPartial<HistogramDataPoint>, I>>(
    base?: I
  ): HistogramDataPoint {
    return HistogramDataPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HistogramDataPoint>, I>>(
    object: I
  ): HistogramDataPoint {
    const message = createBaseHistogramDataPoint();
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.startTimeUnixNano = object.startTimeUnixNano ?? '0';
    message.timeUnixNano = object.timeUnixNano ?? '0';
    message.count = object.count ?? '0';
    message.sum = object.sum ?? undefined;
    message.bucketCounts = object.bucketCounts?.map((e) => e) || [];
    message.explicitBounds = object.explicitBounds?.map((e) => e) || [];
    message.exemplars =
      object.exemplars?.map((e) => Exemplar.fromPartial(e)) || [];
    message.flags = object.flags ?? 0;
    message.min = object.min ?? undefined;
    message.max = object.max ?? undefined;
    return message;
  },
};

function createBaseExponentialHistogramDataPoint(): ExponentialHistogramDataPoint {
  return {
    attributes: [],
    startTimeUnixNano: '0',
    timeUnixNano: '0',
    count: '0',
    sum: undefined,
    scale: 0,
    zeroCount: '0',
    positive: undefined,
    negative: undefined,
    flags: 0,
    exemplars: [],
    min: undefined,
    max: undefined,
    zeroThreshold: 0,
  };
}

export const ExponentialHistogramDataPoint = {
  encode(
    message: ExponentialHistogramDataPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.startTimeUnixNano !== '0') {
      writer.uint32(17).fixed64(message.startTimeUnixNano);
    }
    if (message.timeUnixNano !== '0') {
      writer.uint32(25).fixed64(message.timeUnixNano);
    }
    if (message.count !== '0') {
      writer.uint32(33).fixed64(message.count);
    }
    if (message.sum !== undefined) {
      writer.uint32(41).double(message.sum);
    }
    if (message.scale !== 0) {
      writer.uint32(48).sint32(message.scale);
    }
    if (message.zeroCount !== '0') {
      writer.uint32(57).fixed64(message.zeroCount);
    }
    if (message.positive !== undefined) {
      ExponentialHistogramDataPoint_Buckets.encode(
        message.positive,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.negative !== undefined) {
      ExponentialHistogramDataPoint_Buckets.encode(
        message.negative,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(80).uint32(message.flags);
    }
    for (const v of message.exemplars) {
      Exemplar.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.min !== undefined) {
      writer.uint32(97).double(message.min);
    }
    if (message.max !== undefined) {
      writer.uint32(105).double(message.max);
    }
    if (message.zeroThreshold !== 0) {
      writer.uint32(113).double(message.zeroThreshold);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExponentialHistogramDataPoint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialHistogramDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.startTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.count = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.sum = reader.double();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.scale = reader.sint32();
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.zeroCount = longToString(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.positive = ExponentialHistogramDataPoint_Buckets.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.negative = ExponentialHistogramDataPoint_Buckets.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.flags = reader.uint32();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.exemplars.push(Exemplar.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 97) {
            break;
          }

          message.min = reader.double();
          continue;
        case 13:
          if (tag !== 105) {
            break;
          }

          message.max = reader.double();
          continue;
        case 14:
          if (tag !== 113) {
            break;
          }

          message.zeroThreshold = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    if (message.max === undefined) delete message.max;
    if (message.min === undefined) delete message.min;
    if (message.sum === undefined) delete message.sum;
    return message;
  },

  fromJSON(object: any): ExponentialHistogramDataPoint {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? String(object.startTimeUnixNano)
        : '0',
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : '0',
      count: isSet(object.count) ? String(object.count) : '0',
      sum: isSet(object.sum) ? Number(object.sum) : undefined,
      scale: isSet(object.scale) ? Number(object.scale) : 0,
      zeroCount: isSet(object.zeroCount) ? String(object.zeroCount) : '0',
      positive: isSet(object.positive)
        ? ExponentialHistogramDataPoint_Buckets.fromJSON(object.positive)
        : undefined,
      negative: isSet(object.negative)
        ? ExponentialHistogramDataPoint_Buckets.fromJSON(object.negative)
        : undefined,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      exemplars: Array.isArray(object?.exemplars)
        ? object.exemplars.map((e: any) => Exemplar.fromJSON(e))
        : [],
      min: isSet(object.min) ? Number(object.min) : undefined,
      max: isSet(object.max) ? Number(object.max) : undefined,
      zeroThreshold: isSet(object.zeroThreshold)
        ? Number(object.zeroThreshold)
        : 0,
    };
  },

  toJSON(message: ExponentialHistogramDataPoint): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.startTimeUnixNano !== undefined &&
      (obj.startTimeUnixNano = message.startTimeUnixNano);
    message.timeUnixNano !== undefined &&
      (obj.timeUnixNano = message.timeUnixNano);
    message.count !== undefined && (obj.count = message.count);
    message.sum !== undefined && (obj.sum = message.sum);
    message.scale !== undefined && (obj.scale = Math.round(message.scale));
    message.zeroCount !== undefined && (obj.zeroCount = message.zeroCount);
    message.positive !== undefined &&
      (obj.positive = message.positive
        ? ExponentialHistogramDataPoint_Buckets.toJSON(message.positive)
        : undefined);
    message.negative !== undefined &&
      (obj.negative = message.negative
        ? ExponentialHistogramDataPoint_Buckets.toJSON(message.negative)
        : undefined);
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map((e) =>
        e ? Exemplar.toJSON(e) : undefined
      );
    } else {
      obj.exemplars = [];
    }
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    message.zeroThreshold !== undefined &&
      (obj.zeroThreshold = message.zeroThreshold);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExponentialHistogramDataPoint>, I>>(
    base?: I
  ): ExponentialHistogramDataPoint {
    return ExponentialHistogramDataPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExponentialHistogramDataPoint>, I>>(
    object: I
  ): ExponentialHistogramDataPoint {
    const message = createBaseExponentialHistogramDataPoint();
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.startTimeUnixNano = object.startTimeUnixNano ?? '0';
    message.timeUnixNano = object.timeUnixNano ?? '0';
    message.count = object.count ?? '0';
    message.sum = object.sum ?? undefined;
    message.scale = object.scale ?? 0;
    message.zeroCount = object.zeroCount ?? '0';
    message.positive =
      object.positive !== undefined && object.positive !== null
        ? ExponentialHistogramDataPoint_Buckets.fromPartial(object.positive)
        : undefined;
    message.negative =
      object.negative !== undefined && object.negative !== null
        ? ExponentialHistogramDataPoint_Buckets.fromPartial(object.negative)
        : undefined;
    message.flags = object.flags ?? 0;
    message.exemplars =
      object.exemplars?.map((e) => Exemplar.fromPartial(e)) || [];
    message.min = object.min ?? undefined;
    message.max = object.max ?? undefined;
    message.zeroThreshold = object.zeroThreshold ?? 0;
    return message;
  },
};

function createBaseExponentialHistogramDataPoint_Buckets(): ExponentialHistogramDataPoint_Buckets {
  return { offset: 0, bucketCounts: [] };
}

export const ExponentialHistogramDataPoint_Buckets = {
  encode(
    message: ExponentialHistogramDataPoint_Buckets,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offset !== 0) {
      writer.uint32(8).sint32(message.offset);
    }
    writer.uint32(18).fork();
    for (const v of message.bucketCounts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExponentialHistogramDataPoint_Buckets {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialHistogramDataPoint_Buckets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.offset = reader.sint32();
          continue;
        case 2:
          if (tag === 16) {
            message.bucketCounts.push(longToString(reader.uint64() as Long));

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bucketCounts.push(longToString(reader.uint64() as Long));
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExponentialHistogramDataPoint_Buckets {
    return {
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      bucketCounts: Array.isArray(object?.bucketCounts)
        ? object.bucketCounts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ExponentialHistogramDataPoint_Buckets): unknown {
    const obj: any = {};
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map((e) => e);
    } else {
      obj.bucketCounts = [];
    }
    return obj;
  },

  create<
    I extends Exact<DeepPartial<ExponentialHistogramDataPoint_Buckets>, I>
  >(base?: I): ExponentialHistogramDataPoint_Buckets {
    return ExponentialHistogramDataPoint_Buckets.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<ExponentialHistogramDataPoint_Buckets>, I>
  >(object: I): ExponentialHistogramDataPoint_Buckets {
    const message = createBaseExponentialHistogramDataPoint_Buckets();
    message.offset = object.offset ?? 0;
    message.bucketCounts = object.bucketCounts?.map((e) => e) || [];
    return message;
  },
};

function createBaseSummaryDataPoint(): SummaryDataPoint {
  return {
    attributes: [],
    startTimeUnixNano: '0',
    timeUnixNano: '0',
    count: '0',
    sum: 0,
    quantileValues: [],
    flags: 0,
  };
}

export const SummaryDataPoint = {
  encode(
    message: SummaryDataPoint,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.startTimeUnixNano !== '0') {
      writer.uint32(17).fixed64(message.startTimeUnixNano);
    }
    if (message.timeUnixNano !== '0') {
      writer.uint32(25).fixed64(message.timeUnixNano);
    }
    if (message.count !== '0') {
      writer.uint32(33).fixed64(message.count);
    }
    if (message.sum !== 0) {
      writer.uint32(41).double(message.sum);
    }
    for (const v of message.quantileValues) {
      SummaryDataPoint_ValueAtQuantile.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.flags !== 0) {
      writer.uint32(64).uint32(message.flags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SummaryDataPoint {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummaryDataPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag !== 58) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.startTimeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.count = longToString(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.sum = reader.double();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.quantileValues.push(
            SummaryDataPoint_ValueAtQuantile.decode(reader, reader.uint32())
          );
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.flags = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SummaryDataPoint {
    return {
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      startTimeUnixNano: isSet(object.startTimeUnixNano)
        ? String(object.startTimeUnixNano)
        : '0',
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : '0',
      count: isSet(object.count) ? String(object.count) : '0',
      sum: isSet(object.sum) ? Number(object.sum) : 0,
      quantileValues: Array.isArray(object?.quantileValues)
        ? object.quantileValues.map((e: any) =>
            SummaryDataPoint_ValueAtQuantile.fromJSON(e)
          )
        : [],
      flags: isSet(object.flags) ? Number(object.flags) : 0,
    };
  },

  toJSON(message: SummaryDataPoint): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.attributes = [];
    }
    message.startTimeUnixNano !== undefined &&
      (obj.startTimeUnixNano = message.startTimeUnixNano);
    message.timeUnixNano !== undefined &&
      (obj.timeUnixNano = message.timeUnixNano);
    message.count !== undefined && (obj.count = message.count);
    message.sum !== undefined && (obj.sum = message.sum);
    if (message.quantileValues) {
      obj.quantileValues = message.quantileValues.map((e) =>
        e ? SummaryDataPoint_ValueAtQuantile.toJSON(e) : undefined
      );
    } else {
      obj.quantileValues = [];
    }
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    return obj;
  },

  create<I extends Exact<DeepPartial<SummaryDataPoint>, I>>(
    base?: I
  ): SummaryDataPoint {
    return SummaryDataPoint.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SummaryDataPoint>, I>>(
    object: I
  ): SummaryDataPoint {
    const message = createBaseSummaryDataPoint();
    message.attributes =
      object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.startTimeUnixNano = object.startTimeUnixNano ?? '0';
    message.timeUnixNano = object.timeUnixNano ?? '0';
    message.count = object.count ?? '0';
    message.sum = object.sum ?? 0;
    message.quantileValues =
      object.quantileValues?.map((e) =>
        SummaryDataPoint_ValueAtQuantile.fromPartial(e)
      ) || [];
    message.flags = object.flags ?? 0;
    return message;
  },
};

function createBaseSummaryDataPoint_ValueAtQuantile(): SummaryDataPoint_ValueAtQuantile {
  return { quantile: 0, value: 0 };
}

export const SummaryDataPoint_ValueAtQuantile = {
  encode(
    message: SummaryDataPoint_ValueAtQuantile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.quantile !== 0) {
      writer.uint32(9).double(message.quantile);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SummaryDataPoint_ValueAtQuantile {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSummaryDataPoint_ValueAtQuantile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.quantile = reader.double();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SummaryDataPoint_ValueAtQuantile {
    return {
      quantile: isSet(object.quantile) ? Number(object.quantile) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: SummaryDataPoint_ValueAtQuantile): unknown {
    const obj: any = {};
    message.quantile !== undefined && (obj.quantile = message.quantile);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create<I extends Exact<DeepPartial<SummaryDataPoint_ValueAtQuantile>, I>>(
    base?: I
  ): SummaryDataPoint_ValueAtQuantile {
    return SummaryDataPoint_ValueAtQuantile.fromPartial(base ?? {});
  },

  fromPartial<
    I extends Exact<DeepPartial<SummaryDataPoint_ValueAtQuantile>, I>
  >(object: I): SummaryDataPoint_ValueAtQuantile {
    const message = createBaseSummaryDataPoint_ValueAtQuantile();
    message.quantile = object.quantile ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseExemplar(): Exemplar {
  return {
    filteredAttributes: [],
    timeUnixNano: '0',
    asDouble: undefined,
    asInt: undefined,
    spanId: new Uint8Array(),
    traceId: new Uint8Array(),
  };
}

export const Exemplar = {
  encode(
    message: Exemplar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.filteredAttributes) {
      KeyValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeUnixNano !== '0') {
      writer.uint32(17).fixed64(message.timeUnixNano);
    }
    if (message.asDouble !== undefined) {
      writer.uint32(25).double(message.asDouble);
    }
    if (message.asInt !== undefined) {
      writer.uint32(49).sfixed64(message.asInt);
    }
    if (message.spanId.length !== 0) {
      writer.uint32(34).bytes(message.spanId);
    }
    if (message.traceId.length !== 0) {
      writer.uint32(42).bytes(message.traceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exemplar {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExemplar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          if (tag !== 58) {
            break;
          }

          message.filteredAttributes.push(
            KeyValue.decode(reader, reader.uint32())
          );
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.timeUnixNano = longToString(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.asDouble = reader.double();
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.asInt = longToString(reader.sfixed64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spanId = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.traceId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    if (message.asDouble === undefined) delete message.asDouble;
    if (message.asInt === undefined) delete message.asInt;
    return message;
  },

  fromJSON(object: any): Exemplar {
    return {
      filteredAttributes: Array.isArray(object?.filteredAttributes)
        ? object.filteredAttributes.map((e: any) => KeyValue.fromJSON(e))
        : [],
      timeUnixNano: isSet(object.timeUnixNano)
        ? String(object.timeUnixNano)
        : '0',
      asDouble: isSet(object.asDouble) ? Number(object.asDouble) : undefined,
      asInt: isSet(object.asInt) ? String(object.asInt) : undefined,
      spanId: isSet(object.spanId)
        ? bytesFromBase64(object.spanId)
        : new Uint8Array(),
      traceId: isSet(object.traceId)
        ? bytesFromBase64(object.traceId)
        : new Uint8Array(),
    };
  },

  toJSON(message: Exemplar): unknown {
    const obj: any = {};
    if (message.filteredAttributes) {
      obj.filteredAttributes = message.filteredAttributes.map((e) =>
        e ? KeyValue.toJSON(e) : undefined
      );
    } else {
      obj.filteredAttributes = [];
    }
    message.timeUnixNano !== undefined &&
      (obj.timeUnixNano = message.timeUnixNano);
    message.asDouble !== undefined && (obj.asDouble = message.asDouble);
    message.asInt !== undefined && (obj.asInt = message.asInt);
    message.spanId !== undefined &&
      (obj.spanId = base64FromBytes(
        message.spanId !== undefined ? message.spanId : new Uint8Array()
      ));
    message.traceId !== undefined &&
      (obj.traceId = base64FromBytes(
        message.traceId !== undefined ? message.traceId : new Uint8Array()
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Exemplar>, I>>(base?: I): Exemplar {
    return Exemplar.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Exemplar>, I>>(object: I): Exemplar {
    const message = createBaseExemplar();
    message.filteredAttributes =
      object.filteredAttributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.timeUnixNano = object.timeUnixNano ?? '0';
    message.asDouble = object.asDouble ?? undefined;
    message.asInt = object.asInt ?? undefined;
    message.spanId = object.spanId ?? new Uint8Array();
    message.traceId = object.traceId ?? new Uint8Array();
    return message;
  },
};

function createBaseExportMetricsServiceRequest(): ExportMetricsServiceRequest {
  return { resourceMetrics: [] };
}

export const ExportMetricsServiceRequest = {
  encode(
    message: ExportMetricsServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resourceMetrics) {
      ResourceMetrics.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExportMetricsServiceRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMetricsServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceMetrics.push(
            ResourceMetrics.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportMetricsServiceRequest {
    return {
      resourceMetrics: Array.isArray(object?.resourceMetrics)
        ? object.resourceMetrics.map((e: any) => ResourceMetrics.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExportMetricsServiceRequest): unknown {
    const obj: any = {};
    if (message.resourceMetrics) {
      obj.resourceMetrics = message.resourceMetrics.map((e) =>
        e ? ResourceMetrics.toJSON(e) : undefined
      );
    } else {
      obj.resourceMetrics = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportMetricsServiceRequest>, I>>(
    base?: I
  ): ExportMetricsServiceRequest {
    return ExportMetricsServiceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportMetricsServiceRequest>, I>>(
    object: I
  ): ExportMetricsServiceRequest {
    const message = createBaseExportMetricsServiceRequest();
    message.resourceMetrics =
      object.resourceMetrics?.map((e) => ResourceMetrics.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExportMetricsServiceResponse(): ExportMetricsServiceResponse {
  return { partialSuccess: undefined };
}

export const ExportMetricsServiceResponse = {
  encode(
    message: ExportMetricsServiceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.partialSuccess !== undefined) {
      ExportMetricsPartialSuccess.encode(
        message.partialSuccess,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExportMetricsServiceResponse {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMetricsServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.partialSuccess = ExportMetricsPartialSuccess.decode(
            reader,
            reader.uint32()
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportMetricsServiceResponse {
    return {
      partialSuccess: isSet(object.partialSuccess)
        ? ExportMetricsPartialSuccess.fromJSON(object.partialSuccess)
        : undefined,
    };
  },

  toJSON(message: ExportMetricsServiceResponse): unknown {
    const obj: any = {};
    message.partialSuccess !== undefined &&
      (obj.partialSuccess = message.partialSuccess
        ? ExportMetricsPartialSuccess.toJSON(message.partialSuccess)
        : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportMetricsServiceResponse>, I>>(
    base?: I
  ): ExportMetricsServiceResponse {
    return ExportMetricsServiceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportMetricsServiceResponse>, I>>(
    object: I
  ): ExportMetricsServiceResponse {
    const message = createBaseExportMetricsServiceResponse();
    message.partialSuccess =
      object.partialSuccess !== undefined && object.partialSuccess !== null
        ? ExportMetricsPartialSuccess.fromPartial(object.partialSuccess)
        : undefined;
    return message;
  },
};

function createBaseExportMetricsPartialSuccess(): ExportMetricsPartialSuccess {
  return { rejectedDataPoints: '0', errorMessage: '' };
}

export const ExportMetricsPartialSuccess = {
  encode(
    message: ExportMetricsPartialSuccess,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rejectedDataPoints !== '0') {
      writer.uint32(8).int64(message.rejectedDataPoints);
    }
    if (message.errorMessage !== '') {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExportMetricsPartialSuccess {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportMetricsPartialSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rejectedDataPoints = longToString(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportMetricsPartialSuccess {
    return {
      rejectedDataPoints: isSet(object.rejectedDataPoints)
        ? String(object.rejectedDataPoints)
        : '0',
      errorMessage: isSet(object.errorMessage)
        ? String(object.errorMessage)
        : '',
    };
  },

  toJSON(message: ExportMetricsPartialSuccess): unknown {
    const obj: any = {};
    message.rejectedDataPoints !== undefined &&
      (obj.rejectedDataPoints = message.rejectedDataPoints);
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportMetricsPartialSuccess>, I>>(
    base?: I
  ): ExportMetricsPartialSuccess {
    return ExportMetricsPartialSuccess.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportMetricsPartialSuccess>, I>>(
    object: I
  ): ExportMetricsPartialSuccess {
    const message = createBaseExportMetricsPartialSuccess();
    message.rejectedDataPoints = object.rejectedDataPoints ?? '0';
    message.errorMessage = object.errorMessage ?? '';
    return message;
  },
};

export interface MetricsService {
  Export(
    request: ExportMetricsServiceRequest
  ): Promise<ExportMetricsServiceResponse>;
}

export class MetricsServiceClientImpl implements MetricsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || 'MetricsService';
    this.rpc = rpc;
    this.Export = this.Export.bind(this);
  }
  Export(
    request: ExportMetricsServiceRequest
  ): Promise<ExportMetricsServiceResponse> {
    const data = ExportMetricsServiceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, 'Export', data);
    return promise.then((data) =>
      ExportMetricsServiceResponse.decode(_m0.Reader.create(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(''));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ParsedKeyValue = Record<string, any>;

export interface ParsedInstrumentationScope {
  name: string;
  version: string;
  attributes: ParsedKeyValue;
  droppedAttributesCount: number;
}

export interface ParsedResource {
  attributes: ParsedKeyValue;
  droppedAttributesCount: number;
}

export interface ParsedMetricsData {
  resourceMetrics: ParsedResourceMetrics[];
}

export interface ParsedResourceMetrics {
  resource: ParsedResource;
  scopeMetrics: ParsedScopeMetrics[];
  schemaUrl: string;
}

export interface ParsedScopeMetrics {
  scope: ParsedInstrumentationScope | InstrumentationScope | undefined;
  metrics: ParsedMetric[];
  schemaUrl: string;
}

export interface ParsedMetric {
  name: string;
  description: string;
  unit: string;
  gauge?: ParsedGauge | undefined;
  sum?: ParsedSum | undefined;
  histogram?: ParsedHistogram | undefined;
  exponentialHistogram?:
    | ParsedExponentialHistogram
    | ExponentialHistogram
    | undefined;
  summary?: ParsedSummary | undefined;
}

export interface ParsedGauge {
  dataPoints: ParsedNumberDataPoint[];
}

export interface ParsedSum {
  dataPoints: ParsedNumberDataPoint[];
  aggregationTemporality: AggregationTemporality;
  isMonotonic: boolean;
}

export interface ParsedHistogram {
  dataPoints: ParsedHistogramDataPoint[];
  aggregationTemporality: AggregationTemporality;
}

export interface ParsedExponentialHistogram {
  dataPoints: ParsedExponentialHistogramDataPoint[];
  aggregationTemporality: AggregationTemporality;
}

export interface ParsedSummary {
  dataPoints: ParsedSummaryDataPoint[];
}

export interface ParsedNumberDataPoint {
  attributes: ParsedKeyValue;
  startTimeUnixNano: string;
  timeUnixNano: string;
  asDouble?: number | undefined | null;
  asInt?: string | undefined;
  exemplars: ParsedExemplar[];
  flags: number;
}

export interface ParsedHistogramDataPoint {
  attributes: ParsedKeyValue;
  startTimeUnixNano: string;
  timeUnixNano: string;
  count: string;
  sum?: number | undefined;
  bucketCounts: string[];
  explicitBounds: number[];
  exemplars: ParsedExemplar[];
  flags: number;
  min?: number | undefined;
  max?: number | undefined;
}

export interface ParsedExponentialHistogramDataPoint {
  attributes: ParsedKeyValue;
  startTimeUnixNano: number;
  timeUnixNano: number;
  count: number;
  sum?: number | undefined;
  scale: number;
  zeroCount: number;
  positive: ExponentialHistogramDataPoint_Buckets | undefined;
  negative: ExponentialHistogramDataPoint_Buckets | undefined;
  flags: number;
  exemplars: ParsedExemplar[];
  min?: number | undefined;
  max?: number | undefined;
  zeroThreshold: number;
}

export interface ParsedSummaryDataPoint {
  attributes: ParsedKeyValue;
  startTimeUnixNano: number;
  timeUnixNano: number;
  count: number;
  sum: number;
  quantileValues: SummaryDataPoint_ValueAtQuantile[];
  flags: number;
}

export interface ParsedExemplar {
  filteredAttributes: ParsedKeyValue;
  timeUnixNano: number;
  asDouble?: number | undefined;
  asInt?: number | undefined;
  spanId: Uint8Array;
  traceId: Uint8Array;
}

export type DataPoint =
  | NumberDataPoint
  | SummaryDataPoint
  | HistogramDataPoint
  | ExponentialHistogramDataPoint;

export type ParsedDataPoint =
  | DataPoint
  | ParsedNumberDataPoint
  | ParsedSummaryDataPoint
  | ParsedHistogramDataPoint
  | ParsedExponentialHistogramDataPoint;
