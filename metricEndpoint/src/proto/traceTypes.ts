/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface AnyValue {
  stringValue?: string | undefined;
  boolValue?: boolean | undefined;
  intValue?: number | undefined;
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

export interface TracesData {
  resourceSpans: ResourceSpans[];
}

export interface ResourceSpans {
  resource: Resource | undefined;
  scopeSpans: ScopeSpans[];
  schemaUrl: string;
}

export interface ScopeSpans {
  scope: InstrumentationScope | undefined;
  spans: Span[];
  schemaUrl: string;
}

export interface Span {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceState: string;
  parentSpanId: Uint8Array;
  name: string;
  kind: Span_SpanKind;
  startTimeUnixNano: number;
  endTimeUnixNano: number;
  attributes: KeyValue[];
  droppedAttributesCount: number;
  events: Span_Event[];
  droppedEventsCount: number;
  links: Span_Link[];
  droppedLinksCount: number;
  status: TraceStatus | undefined;
}

export enum Span_SpanKind {
  SPAN_KIND_UNSPECIFIED = 0,
  SPAN_KIND_INTERNAL = 1,
  SPAN_KIND_SERVER = 2,
  SPAN_KIND_CLIENT = 3,
  SPAN_KIND_PRODUCER = 4,
  SPAN_KIND_CONSUMER = 5,
  UNRECOGNIZED = -1,
}

export function span_SpanKindFromJSON(object: any): Span_SpanKind {
  switch (object) {
    case 0:
    case "SPAN_KIND_UNSPECIFIED":
      return Span_SpanKind.SPAN_KIND_UNSPECIFIED;
    case 1:
    case "SPAN_KIND_INTERNAL":
      return Span_SpanKind.SPAN_KIND_INTERNAL;
    case 2:
    case "SPAN_KIND_SERVER":
      return Span_SpanKind.SPAN_KIND_SERVER;
    case 3:
    case "SPAN_KIND_CLIENT":
      return Span_SpanKind.SPAN_KIND_CLIENT;
    case 4:
    case "SPAN_KIND_PRODUCER":
      return Span_SpanKind.SPAN_KIND_PRODUCER;
    case 5:
    case "SPAN_KIND_CONSUMER":
      return Span_SpanKind.SPAN_KIND_CONSUMER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Span_SpanKind.UNRECOGNIZED;
  }
}

export function span_SpanKindToJSON(object: Span_SpanKind): string {
  switch (object) {
    case Span_SpanKind.SPAN_KIND_UNSPECIFIED:
      return "SPAN_KIND_UNSPECIFIED";
    case Span_SpanKind.SPAN_KIND_INTERNAL:
      return "SPAN_KIND_INTERNAL";
    case Span_SpanKind.SPAN_KIND_SERVER:
      return "SPAN_KIND_SERVER";
    case Span_SpanKind.SPAN_KIND_CLIENT:
      return "SPAN_KIND_CLIENT";
    case Span_SpanKind.SPAN_KIND_PRODUCER:
      return "SPAN_KIND_PRODUCER";
    case Span_SpanKind.SPAN_KIND_CONSUMER:
      return "SPAN_KIND_CONSUMER";
    case Span_SpanKind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Span_Event {
  timeUnixNano: number;
  name: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface Span_Link {
  traceId: Uint8Array;
  spanId: Uint8Array;
  traceState: string;
  attributes: KeyValue[];
  droppedAttributesCount: number;
}

export interface TraceStatus {
  message: string;
  code: TraceStatus_StatusCode;
}

export enum TraceStatus_StatusCode {
  STATUS_CODE_UNSET = 0,
  STATUS_CODE_OK = 1,
  STATUS_CODE_ERROR = 2,
  UNRECOGNIZED = -1,
}

export function traceStatus_StatusCodeFromJSON(object: any): TraceStatus_StatusCode {
  switch (object) {
    case 0:
    case "STATUS_CODE_UNSET":
      return TraceStatus_StatusCode.STATUS_CODE_UNSET;
    case 1:
    case "STATUS_CODE_OK":
      return TraceStatus_StatusCode.STATUS_CODE_OK;
    case 2:
    case "STATUS_CODE_ERROR":
      return TraceStatus_StatusCode.STATUS_CODE_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TraceStatus_StatusCode.UNRECOGNIZED;
  }
}

export function traceStatus_StatusCodeToJSON(object: TraceStatus_StatusCode): string {
  switch (object) {
    case TraceStatus_StatusCode.STATUS_CODE_UNSET:
      return "STATUS_CODE_UNSET";
    case TraceStatus_StatusCode.STATUS_CODE_OK:
      return "STATUS_CODE_OK";
    case TraceStatus_StatusCode.STATUS_CODE_ERROR:
      return "STATUS_CODE_ERROR";
    case TraceStatus_StatusCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ExportTraceServiceRequest {
  resourceSpans: ResourceSpans[];
}

export interface ExportTraceServiceResponse {
  partialSuccess: ExportTracePartialSuccess | undefined;
}

export interface ExportTracePartialSuccess {
  rejectedSpans: number;
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
  encode(message: AnyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      KeyValueList.encode(message.kvlistValue, writer.uint32(50).fork()).ldelim();
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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

          message.intValue = longToNumber(reader.int64() as Long);
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
    return message;
  },

  fromJSON(object: any): AnyValue {
    return {
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      intValue: isSet(object.intValue) ? Number(object.intValue) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      arrayValue: isSet(object.arrayValue) ? ArrayValue.fromJSON(object.arrayValue) : undefined,
      kvlistValue: isSet(object.kvlistValue) ? KeyValueList.fromJSON(object.kvlistValue) : undefined,
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined,
    };
  },

  toJSON(message: AnyValue): unknown {
    const obj: any = {};
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.intValue !== undefined && (obj.intValue = Math.round(message.intValue));
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.arrayValue !== undefined &&
      (obj.arrayValue = message.arrayValue ? ArrayValue.toJSON(message.arrayValue) : undefined);
    message.kvlistValue !== undefined &&
      (obj.kvlistValue = message.kvlistValue ? KeyValueList.toJSON(message.kvlistValue) : undefined);
    message.bytesValue !== undefined &&
      (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
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
    message.arrayValue = (object.arrayValue !== undefined && object.arrayValue !== null)
      ? ArrayValue.fromPartial(object.arrayValue)
      : undefined;
    message.kvlistValue = (object.kvlistValue !== undefined && object.kvlistValue !== null)
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
  encode(message: ArrayValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      AnyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArrayValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => AnyValue.fromJSON(e)) : [] };
  },

  toJSON(message: ArrayValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e ? AnyValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArrayValue>, I>>(base?: I): ArrayValue {
    return ArrayValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArrayValue>, I>>(object: I): ArrayValue {
    const message = createBaseArrayValue();
    message.values = object.values?.map((e) => AnyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeyValueList(): KeyValueList {
  return { values: [] };
}

export const KeyValueList = {
  encode(message: KeyValueList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValueList {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
    return { values: Array.isArray(object?.values) ? object.values.map((e: any) => KeyValue.fromJSON(e)) : [] };
  },

  toJSON(message: KeyValueList): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map((e) => e ? KeyValue.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValueList>, I>>(base?: I): KeyValueList {
    return KeyValueList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeyValueList>, I>>(object: I): KeyValueList {
    const message = createBaseKeyValueList();
    message.values = object.values?.map((e) => KeyValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseKeyValue(): KeyValue {
  return { key: "", value: undefined };
}

export const KeyValue = {
  encode(message: KeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      AnyValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? AnyValue.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: KeyValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? AnyValue.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValue>, I>>(base?: I): KeyValue {
    return KeyValue.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<KeyValue>, I>>(object: I): KeyValue {
    const message = createBaseKeyValue();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? AnyValue.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseInstrumentationScope(): InstrumentationScope {
  return { name: "", version: "", attributes: [], droppedAttributesCount: 0 };
}

export const InstrumentationScope = {
  encode(message: InstrumentationScope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== "") {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentationScope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => KeyValue.fromJSON(e)) : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount) ? Number(object.droppedAttributesCount) : 0,
    };
  },

  toJSON(message: InstrumentationScope): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? KeyValue.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<InstrumentationScope>, I>>(base?: I): InstrumentationScope {
    return InstrumentationScope.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InstrumentationScope>, I>>(object: I): InstrumentationScope {
    const message = createBaseInstrumentationScope();
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.attributes = object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseResource(): Resource {
  return { attributes: [], droppedAttributesCount: 0 };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(16).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => KeyValue.fromJSON(e)) : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount) ? Number(object.droppedAttributesCount) : 0,
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? KeyValue.toJSON(e) : undefined);
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
    message.attributes = object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseTracesData(): TracesData {
  return { resourceSpans: [] };
}

export const TracesData = {
  encode(message: TracesData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceSpans) {
      ResourceSpans.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TracesData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTracesData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceSpans.push(ResourceSpans.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TracesData {
    return {
      resourceSpans: Array.isArray(object?.resourceSpans)
        ? object.resourceSpans.map((e: any) => ResourceSpans.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TracesData): unknown {
    const obj: any = {};
    if (message.resourceSpans) {
      obj.resourceSpans = message.resourceSpans.map((e) => e ? ResourceSpans.toJSON(e) : undefined);
    } else {
      obj.resourceSpans = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TracesData>, I>>(base?: I): TracesData {
    return TracesData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TracesData>, I>>(object: I): TracesData {
    const message = createBaseTracesData();
    message.resourceSpans = object.resourceSpans?.map((e) => ResourceSpans.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResourceSpans(): ResourceSpans {
  return { resource: undefined, scopeSpans: [], schemaUrl: "" };
}

export const ResourceSpans = {
  encode(message: ResourceSpans, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.scopeSpans) {
      ScopeSpans.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== "") {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceSpans {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceSpans();
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

          message.scopeSpans.push(ScopeSpans.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ResourceSpans {
    return {
      resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
      scopeSpans: Array.isArray(object?.scopeSpans) ? object.scopeSpans.map((e: any) => ScopeSpans.fromJSON(e)) : [],
      schemaUrl: isSet(object.schemaUrl) ? String(object.schemaUrl) : "",
    };
  },

  toJSON(message: ResourceSpans): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    if (message.scopeSpans) {
      obj.scopeSpans = message.scopeSpans.map((e) => e ? ScopeSpans.toJSON(e) : undefined);
    } else {
      obj.scopeSpans = [];
    }
    message.schemaUrl !== undefined && (obj.schemaUrl = message.schemaUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ResourceSpans>, I>>(base?: I): ResourceSpans {
    return ResourceSpans.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ResourceSpans>, I>>(object: I): ResourceSpans {
    const message = createBaseResourceSpans();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    message.scopeSpans = object.scopeSpans?.map((e) => ScopeSpans.fromPartial(e)) || [];
    message.schemaUrl = object.schemaUrl ?? "";
    return message;
  },
};

function createBaseScopeSpans(): ScopeSpans {
  return { scope: undefined, spans: [], schemaUrl: "" };
}

export const ScopeSpans = {
  encode(message: ScopeSpans, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scope !== undefined) {
      InstrumentationScope.encode(message.scope, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.spans) {
      Span.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaUrl !== "") {
      writer.uint32(26).string(message.schemaUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScopeSpans {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScopeSpans();
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

          message.spans.push(Span.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ScopeSpans {
    return {
      scope: isSet(object.scope) ? InstrumentationScope.fromJSON(object.scope) : undefined,
      spans: Array.isArray(object?.spans) ? object.spans.map((e: any) => Span.fromJSON(e)) : [],
      schemaUrl: isSet(object.schemaUrl) ? String(object.schemaUrl) : "",
    };
  },

  toJSON(message: ScopeSpans): unknown {
    const obj: any = {};
    message.scope !== undefined && (obj.scope = message.scope ? InstrumentationScope.toJSON(message.scope) : undefined);
    if (message.spans) {
      obj.spans = message.spans.map((e) => e ? Span.toJSON(e) : undefined);
    } else {
      obj.spans = [];
    }
    message.schemaUrl !== undefined && (obj.schemaUrl = message.schemaUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<ScopeSpans>, I>>(base?: I): ScopeSpans {
    return ScopeSpans.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ScopeSpans>, I>>(object: I): ScopeSpans {
    const message = createBaseScopeSpans();
    message.scope = (object.scope !== undefined && object.scope !== null)
      ? InstrumentationScope.fromPartial(object.scope)
      : undefined;
    message.spans = object.spans?.map((e) => Span.fromPartial(e)) || [];
    message.schemaUrl = object.schemaUrl ?? "";
    return message;
  },
};

function createBaseSpan(): Span {
  return {
    traceId: new Uint8Array(),
    spanId: new Uint8Array(),
    traceState: "",
    parentSpanId: new Uint8Array(),
    name: "",
    kind: 0,
    startTimeUnixNano: 0,
    endTimeUnixNano: 0,
    attributes: [],
    droppedAttributesCount: 0,
    events: [],
    droppedEventsCount: 0,
    links: [],
    droppedLinksCount: 0,
    status: undefined,
  };
}

export const Span = {
  encode(message: Span, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceId.length !== 0) {
      writer.uint32(10).bytes(message.traceId);
    }
    if (message.spanId.length !== 0) {
      writer.uint32(18).bytes(message.spanId);
    }
    if (message.traceState !== "") {
      writer.uint32(26).string(message.traceState);
    }
    if (message.parentSpanId.length !== 0) {
      writer.uint32(34).bytes(message.parentSpanId);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.kind !== 0) {
      writer.uint32(48).int32(message.kind);
    }
    if (message.startTimeUnixNano !== 0) {
      writer.uint32(57).fixed64(message.startTimeUnixNano);
    }
    if (message.endTimeUnixNano !== 0) {
      writer.uint32(65).fixed64(message.endTimeUnixNano);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(80).uint32(message.droppedAttributesCount);
    }
    for (const v of message.events) {
      Span_Event.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.droppedEventsCount !== 0) {
      writer.uint32(96).uint32(message.droppedEventsCount);
    }
    for (const v of message.links) {
      Span_Link.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.droppedLinksCount !== 0) {
      writer.uint32(112).uint32(message.droppedLinksCount);
    }
    if (message.status !== undefined) {
      TraceStatus.encode(message.status, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanId = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.traceState = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parentSpanId = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.startTimeUnixNano = longToNumber(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.endTimeUnixNano = longToNumber(reader.fixed64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.droppedAttributesCount = reader.uint32();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.events.push(Span_Event.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.droppedEventsCount = reader.uint32();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.links.push(Span_Link.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.droppedLinksCount = reader.uint32();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.status = TraceStatus.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Span {
    return {
      traceId: isSet(object.traceId) ? bytesFromBase64(object.traceId) : new Uint8Array(),
      spanId: isSet(object.spanId) ? bytesFromBase64(object.spanId) : new Uint8Array(),
      traceState: isSet(object.traceState) ? String(object.traceState) : "",
      parentSpanId: isSet(object.parentSpanId) ? bytesFromBase64(object.parentSpanId) : new Uint8Array(),
      name: isSet(object.name) ? String(object.name) : "",
      kind: isSet(object.kind) ? span_SpanKindFromJSON(object.kind) : 0,
      startTimeUnixNano: isSet(object.startTimeUnixNano) ? Number(object.startTimeUnixNano) : 0,
      endTimeUnixNano: isSet(object.endTimeUnixNano) ? Number(object.endTimeUnixNano) : 0,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => KeyValue.fromJSON(e)) : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount) ? Number(object.droppedAttributesCount) : 0,
      events: Array.isArray(object?.events) ? object.events.map((e: any) => Span_Event.fromJSON(e)) : [],
      droppedEventsCount: isSet(object.droppedEventsCount) ? Number(object.droppedEventsCount) : 0,
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Span_Link.fromJSON(e)) : [],
      droppedLinksCount: isSet(object.droppedLinksCount) ? Number(object.droppedLinksCount) : 0,
      status: isSet(object.status) ? TraceStatus.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: Span): unknown {
    const obj: any = {};
    message.traceId !== undefined &&
      (obj.traceId = base64FromBytes(message.traceId !== undefined ? message.traceId : new Uint8Array()));
    message.spanId !== undefined &&
      (obj.spanId = base64FromBytes(message.spanId !== undefined ? message.spanId : new Uint8Array()));
    message.traceState !== undefined && (obj.traceState = message.traceState);
    message.parentSpanId !== undefined &&
      (obj.parentSpanId = base64FromBytes(
        message.parentSpanId !== undefined ? message.parentSpanId : new Uint8Array(),
      ));
    message.name !== undefined && (obj.name = message.name);
    message.kind !== undefined && (obj.kind = span_SpanKindToJSON(message.kind));
    message.startTimeUnixNano !== undefined && (obj.startTimeUnixNano = Math.round(message.startTimeUnixNano));
    message.endTimeUnixNano !== undefined && (obj.endTimeUnixNano = Math.round(message.endTimeUnixNano));
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? KeyValue.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    if (message.events) {
      obj.events = message.events.map((e) => e ? Span_Event.toJSON(e) : undefined);
    } else {
      obj.events = [];
    }
    message.droppedEventsCount !== undefined && (obj.droppedEventsCount = Math.round(message.droppedEventsCount));
    if (message.links) {
      obj.links = message.links.map((e) => e ? Span_Link.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }
    message.droppedLinksCount !== undefined && (obj.droppedLinksCount = Math.round(message.droppedLinksCount));
    message.status !== undefined && (obj.status = message.status ? TraceStatus.toJSON(message.status) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<Span>, I>>(base?: I): Span {
    return Span.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Span>, I>>(object: I): Span {
    const message = createBaseSpan();
    message.traceId = object.traceId ?? new Uint8Array();
    message.spanId = object.spanId ?? new Uint8Array();
    message.traceState = object.traceState ?? "";
    message.parentSpanId = object.parentSpanId ?? new Uint8Array();
    message.name = object.name ?? "";
    message.kind = object.kind ?? 0;
    message.startTimeUnixNano = object.startTimeUnixNano ?? 0;
    message.endTimeUnixNano = object.endTimeUnixNano ?? 0;
    message.attributes = object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    message.events = object.events?.map((e) => Span_Event.fromPartial(e)) || [];
    message.droppedEventsCount = object.droppedEventsCount ?? 0;
    message.links = object.links?.map((e) => Span_Link.fromPartial(e)) || [];
    message.droppedLinksCount = object.droppedLinksCount ?? 0;
    message.status = (object.status !== undefined && object.status !== null)
      ? TraceStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseSpan_Event(): Span_Event {
  return { timeUnixNano: 0, name: "", attributes: [], droppedAttributesCount: 0 };
}

export const Span_Event = {
  encode(message: Span_Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.timeUnixNano !== 0) {
      writer.uint32(9).fixed64(message.timeUnixNano);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(32).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span_Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan_Event();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.timeUnixNano = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): Span_Event {
    return {
      timeUnixNano: isSet(object.timeUnixNano) ? Number(object.timeUnixNano) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => KeyValue.fromJSON(e)) : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount) ? Number(object.droppedAttributesCount) : 0,
    };
  },

  toJSON(message: Span_Event): unknown {
    const obj: any = {};
    message.timeUnixNano !== undefined && (obj.timeUnixNano = Math.round(message.timeUnixNano));
    message.name !== undefined && (obj.name = message.name);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? KeyValue.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Span_Event>, I>>(base?: I): Span_Event {
    return Span_Event.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Span_Event>, I>>(object: I): Span_Event {
    const message = createBaseSpan_Event();
    message.timeUnixNano = object.timeUnixNano ?? 0;
    message.name = object.name ?? "";
    message.attributes = object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseSpan_Link(): Span_Link {
  return {
    traceId: new Uint8Array(),
    spanId: new Uint8Array(),
    traceState: "",
    attributes: [],
    droppedAttributesCount: 0,
  };
}

export const Span_Link = {
  encode(message: Span_Link, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.traceId.length !== 0) {
      writer.uint32(10).bytes(message.traceId);
    }
    if (message.spanId.length !== 0) {
      writer.uint32(18).bytes(message.spanId);
    }
    if (message.traceState !== "") {
      writer.uint32(26).string(message.traceState);
    }
    for (const v of message.attributes) {
      KeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.droppedAttributesCount !== 0) {
      writer.uint32(40).uint32(message.droppedAttributesCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Span_Link {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpan_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.traceId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spanId = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.traceState = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.attributes.push(KeyValue.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): Span_Link {
    return {
      traceId: isSet(object.traceId) ? bytesFromBase64(object.traceId) : new Uint8Array(),
      spanId: isSet(object.spanId) ? bytesFromBase64(object.spanId) : new Uint8Array(),
      traceState: isSet(object.traceState) ? String(object.traceState) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => KeyValue.fromJSON(e)) : [],
      droppedAttributesCount: isSet(object.droppedAttributesCount) ? Number(object.droppedAttributesCount) : 0,
    };
  },

  toJSON(message: Span_Link): unknown {
    const obj: any = {};
    message.traceId !== undefined &&
      (obj.traceId = base64FromBytes(message.traceId !== undefined ? message.traceId : new Uint8Array()));
    message.spanId !== undefined &&
      (obj.spanId = base64FromBytes(message.spanId !== undefined ? message.spanId : new Uint8Array()));
    message.traceState !== undefined && (obj.traceState = message.traceState);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => e ? KeyValue.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    message.droppedAttributesCount !== undefined &&
      (obj.droppedAttributesCount = Math.round(message.droppedAttributesCount));
    return obj;
  },

  create<I extends Exact<DeepPartial<Span_Link>, I>>(base?: I): Span_Link {
    return Span_Link.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Span_Link>, I>>(object: I): Span_Link {
    const message = createBaseSpan_Link();
    message.traceId = object.traceId ?? new Uint8Array();
    message.spanId = object.spanId ?? new Uint8Array();
    message.traceState = object.traceState ?? "";
    message.attributes = object.attributes?.map((e) => KeyValue.fromPartial(e)) || [];
    message.droppedAttributesCount = object.droppedAttributesCount ?? 0;
    return message;
  },
};

function createBaseTraceStatus(): TraceStatus {
  return { message: "", code: 0 };
}

export const TraceStatus = {
  encode(message: TraceStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.code !== 0) {
      writer.uint32(24).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TraceStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TraceStatus {
    return {
      message: isSet(object.message) ? String(object.message) : "",
      code: isSet(object.code) ? traceStatus_StatusCodeFromJSON(object.code) : 0,
    };
  },

  toJSON(message: TraceStatus): unknown {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.code !== undefined && (obj.code = traceStatus_StatusCodeToJSON(message.code));
    return obj;
  },

  create<I extends Exact<DeepPartial<TraceStatus>, I>>(base?: I): TraceStatus {
    return TraceStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TraceStatus>, I>>(object: I): TraceStatus {
    const message = createBaseTraceStatus();
    message.message = object.message ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseExportTraceServiceRequest(): ExportTraceServiceRequest {
  return { resourceSpans: [] };
}

export const ExportTraceServiceRequest = {
  encode(message: ExportTraceServiceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceSpans) {
      ResourceSpans.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportTraceServiceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportTraceServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceSpans.push(ResourceSpans.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportTraceServiceRequest {
    return {
      resourceSpans: Array.isArray(object?.resourceSpans)
        ? object.resourceSpans.map((e: any) => ResourceSpans.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ExportTraceServiceRequest): unknown {
    const obj: any = {};
    if (message.resourceSpans) {
      obj.resourceSpans = message.resourceSpans.map((e) => e ? ResourceSpans.toJSON(e) : undefined);
    } else {
      obj.resourceSpans = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportTraceServiceRequest>, I>>(base?: I): ExportTraceServiceRequest {
    return ExportTraceServiceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportTraceServiceRequest>, I>>(object: I): ExportTraceServiceRequest {
    const message = createBaseExportTraceServiceRequest();
    message.resourceSpans = object.resourceSpans?.map((e) => ResourceSpans.fromPartial(e)) || [];
    return message;
  },
};

function createBaseExportTraceServiceResponse(): ExportTraceServiceResponse {
  return { partialSuccess: undefined };
}

export const ExportTraceServiceResponse = {
  encode(message: ExportTraceServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.partialSuccess !== undefined) {
      ExportTracePartialSuccess.encode(message.partialSuccess, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportTraceServiceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportTraceServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.partialSuccess = ExportTracePartialSuccess.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExportTraceServiceResponse {
    return {
      partialSuccess: isSet(object.partialSuccess)
        ? ExportTracePartialSuccess.fromJSON(object.partialSuccess)
        : undefined,
    };
  },

  toJSON(message: ExportTraceServiceResponse): unknown {
    const obj: any = {};
    message.partialSuccess !== undefined && (obj.partialSuccess = message.partialSuccess
      ? ExportTracePartialSuccess.toJSON(message.partialSuccess)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportTraceServiceResponse>, I>>(base?: I): ExportTraceServiceResponse {
    return ExportTraceServiceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportTraceServiceResponse>, I>>(object: I): ExportTraceServiceResponse {
    const message = createBaseExportTraceServiceResponse();
    message.partialSuccess = (object.partialSuccess !== undefined && object.partialSuccess !== null)
      ? ExportTracePartialSuccess.fromPartial(object.partialSuccess)
      : undefined;
    return message;
  },
};

function createBaseExportTracePartialSuccess(): ExportTracePartialSuccess {
  return { rejectedSpans: 0, errorMessage: "" };
}

export const ExportTracePartialSuccess = {
  encode(message: ExportTracePartialSuccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejectedSpans !== 0) {
      writer.uint32(8).int64(message.rejectedSpans);
    }
    if (message.errorMessage !== "") {
      writer.uint32(18).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExportTracePartialSuccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportTracePartialSuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rejectedSpans = longToNumber(reader.int64() as Long);
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

  fromJSON(object: any): ExportTracePartialSuccess {
    return {
      rejectedSpans: isSet(object.rejectedSpans) ? Number(object.rejectedSpans) : 0,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: ExportTracePartialSuccess): unknown {
    const obj: any = {};
    message.rejectedSpans !== undefined && (obj.rejectedSpans = Math.round(message.rejectedSpans));
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExportTracePartialSuccess>, I>>(base?: I): ExportTracePartialSuccess {
    return ExportTracePartialSuccess.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExportTracePartialSuccess>, I>>(object: I): ExportTracePartialSuccess {
    const message = createBaseExportTracePartialSuccess();
    message.rejectedSpans = object.rejectedSpans ?? 0;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

export interface TraceService {
  Export(request: ExportTraceServiceRequest): Promise<ExportTraceServiceResponse>;
}

export class TraceServiceClientImpl implements TraceService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "TraceService";
    this.rpc = rpc;
    this.Export = this.Export.bind(this);
  }
  Export(request: ExportTraceServiceRequest): Promise<ExportTraceServiceResponse> {
    const data = ExportTraceServiceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Export", data);
    return promise.then((data) => ExportTraceServiceResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
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
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
