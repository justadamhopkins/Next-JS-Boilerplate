const webpack = require('webpack');
const env = require('./configs');

const nextConfig = {
  swcMinify: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({ ...env }));

    return config;
  },
};

module.exports = nextConfig;
