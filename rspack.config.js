const { composePlugins, withNx, withReact } = require('@nx/rspack');
const { join } = require('node:path');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  if (process.env.CI) {
    config.output.path = join(__dirname, 'build/__ci_build__');
  } else if (process.env.NODE_ENV === 'production'){
    config.output.path = join(__dirname, 'build/__prod_build__');
  } else {
    config.output.path = join(__dirname, 'build/__dev_build__');
  }
  return config;
});
