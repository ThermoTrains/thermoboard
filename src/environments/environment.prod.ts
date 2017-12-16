const packageJson = require('../../package.json');

export const environment = {
  appName: 'Thermoboard',
  production: true,
  versions: {
    app: packageJson.version,
  }
};
