### Run the following steps to deploy an OpenTelemetry Demo App to your Kubernetes cluster, and connect it to the Galvr instance available in the same cluster to view the demo app's OTEL metrics.

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
