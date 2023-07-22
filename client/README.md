### This directory is the frontend of Galvr, built with React and Next.js framework.

**Contributing to Galvr Frontend Codebase**

- To develop the application locally,

  1. Clone this repository.

  2. Make sure you are in Galvr/client directory, and run the following command to install the latest dependencies for frontend codebase.

  ```
  npm install
  ```

  2. Start the development server with hot-module reloading

  ```
  npm run dev
  ```

- To build a docker image for frontend locally, run the following command while in this client directory. (Note that galvr-nextjs is the default image name, which can be changed. If use other name, the client.yaml file in Galvr/k8s/galvr directory needs to be updated accordingly to correctly refer to the new image name.)

  ```
  docker built -t galvr-nextjs .
  ```

- To deploy Galvr frontend image built locally (step above) to your Kubernetes cluster, change to Galvr/k8s/galvr directory and run the following commend.

  ```
  kubectl apply -f client.yaml
  ```

- After deployed in Kubernetes, visit url: http://localhost:30003/ to view the Galvr in your browser.
