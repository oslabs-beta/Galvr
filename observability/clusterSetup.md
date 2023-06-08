### Run these to set up your K8 cluster

Install cert-manager, which is required for the Otel and Jaeger operators.

```
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.11.0/cert-manager.yaml
```

Install Otel and Jaeger operators. Jaeger operator needs to be in the Observability namespace.

```
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
kubectl create namespace observability
kubectl create -f https://github.com/jaegertracing/jaeger-operator/releases/download/v1.45.0/jaeger-operator.yaml -n observability
```

Start Jaeger all-in-one:

```
kubectl apply -f jaeger.yaml
```

Start the Otel collector and auto-instrumentation for node-js:

```
kubectl apply -f otelCol.yaml
kubectl apply -f otelNode.yaml
```

Make sure you have built the image for each service in our app using:

```
docker build -t todo-<service name> .
```

Now start our app:

```
kubectl apply -f app.yaml
```

Our app should now be visible at localhost:30002!

In a separate shell, run the following:

```
kubectl port-forward services/jaeger-query 16686:16686
```

Navigate to localhost:16686 to view the Jaeger UI!
