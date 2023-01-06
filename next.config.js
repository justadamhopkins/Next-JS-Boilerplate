const webpack = require('webpack');
const env = require('./configs');
const aliases = require('./configs/webpack/aliases');
const path = require('path');

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    additionalData: '@use "@sass/core" as *;',
  },
  compiler: {
    styledComponents: true,
  },

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({ ...env }));
    config.resolve.alias = Object.assign(config.resolve.alias, aliases);

    return config;
  },
};

module.exports = nextConfig;
