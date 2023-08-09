### Run the following steps to deploy an OpenTelemetry Demo App to your Kubernetes cluster, and connect it to the Galvr instance in the same cluster to view OTEL metrics with this demo app.

- Install HELM per Helm's documentation(https://helm.sh/docs/)

- Run the following command to add OpenTelemetry Helm repository:

  ```
  helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
  ```

- If not already, change to Galvr/demo/demo-otel directory.

- Run the following command to install the demo app with a release name (e.g. demo-otel) plus the custom galvrValuesFile.yaml values file to connect the demo app with Galvr.

  ```
  helm install demo-otel open-telemetry/opentelemetry-demo --values galvrValuesFile.yaml
  ```
