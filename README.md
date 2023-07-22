# Galvr

### Quick Start

This guide assumes you have a k8s cluster up and running.

Install cert-manager, which is required for the Otel (and Jaeger) operators:

```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
```

Install the openTelemetry operator:

```
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
```

Start the openTelemetry collector:

```
kubectl apply -f https://github.com/oslabs-beta/Galvr/releases/download/latest/otelCol.yaml
```

If your services are not already instrumented, openTelemetry has a number of autoinstrumentation options (https://opentelemetry.io/docs/kubernetes/operator/automatic/). Autoinstrumentation for services written in Node.js can be added to your cluster with:

```
kubectl apply -f https://github.com/oslabs-beta/Galvr/releases/download/latest/otelNode.yaml
```

If you would like to use Jaeger for request tracing (recommended), replace the default openTelemetry collector with:

```
kubectl apply -f https://github.com/oslabs-beta/Galvr/releases/download/latest/otelCol-jaeger.yaml
```

and start up the Jaeger collector, and a basic all-in-one Jaeger instance:

```
kubectl create namespace observability
kubectl create -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.45.0/jaeger-operator.yaml -n observability
kubectl apply -f https://github.com/oslabs-beta/releases/download/latest/jaeger.yaml
```

For the Jaeger client to be available outside the cluster, you made need to port forward it:
`kubectl port-forward services/jaeger-query 16686:16686`

Finally, start Galvr! The client will be available at local port 30003.

```
kubectl apply -f https://github.com/oslabs-beta/Galvr/releases/download/latest/galvr.yml
```
