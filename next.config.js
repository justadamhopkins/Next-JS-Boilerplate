const webpack = require('webpack');
const env = require('./configs');
import path from 'path';

const nextConfig = {
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  compiler: {
    styledComponents: true,
  },

  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin({ ...env }));

    return config;
  },
};

module.exports = nextConfig;
