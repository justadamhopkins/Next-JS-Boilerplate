const webpack = require('webpack');
const env = require('./configs');
const aliases = require('./configs/webpack/aliases');
const path = require('path');

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
    config.resolve.alias = Object.assign(config.resolve.alias, aliases);

    config.module.rules.push({
      test: /\.s(a|c)ss$/,
      include: path.resolve(__dirname, '../'),
      use: [
        'isomorphic-style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    });

    config.module.rules.push({
      test: /\.scss$/,
      loader: 'sass-resources-loader',
      options: {
        sourceMap: true,
        resources: [`${aliases.sass}/_core.scss`],
      },
    });

    return config;
  },
};

module.exports = nextConfig;
