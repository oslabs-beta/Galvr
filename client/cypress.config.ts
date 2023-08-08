import {defineConfig} from 'cypress'
import {configurePlugin} from 'cypress-mongodb';
// eslint-disable-next-line import/no-unresolved
// import path from 'path';
// import { NormalModuleReplacementPlugin } from 'webpack';

export default defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      // webpackConfig: {
      //   plugins: [
      //     new NormalModuleReplacementPlugin(
      //       /next\/image/,
      //       require.resolve(path.join(__dirname, 'cypress', 'mocks', 'next', 'image'))
      //     ),
      //   ],
      // },
    },
    // Viewport settings overridden for component tests
    viewportWidth: 1080,
    viewportHeight: 1000,
  },
  // Placeholder mongodb config for cypress tests
  "env": {
    "mongodb": {
      "uri": "mongodb://localhost:27017",
      "databaseName": "test",
      "collectionName": "test",
    },
  },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
    setupNodeEvents(on) {
      configurePlugin(on);
  }
    // experimentalStudio: true
  },

  
});
