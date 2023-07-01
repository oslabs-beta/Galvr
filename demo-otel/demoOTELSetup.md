### Run these steps to set up the OTEL Demo App in your K8 cluster (with built-in instrumentation and OTEL collector)

- Install HELM per Helm's documentation(https://helm.sh/docs/)

- Add OpenTelemetry Helm repository:

  ```
  helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
  ```

- Change to galvr/demo-otel directory

- Install the helm chart with a release name (i.e. demo-otel) and the custom galvrValuesFile.yaml values file

  ```
  helm install demo-otel open-telemetry/opentelemetry-demo --values galvrValuesFile.yaml
  ```
