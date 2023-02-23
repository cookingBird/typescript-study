const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');
const devConfig = {
  mode: 'development',
  output: {
    library: {
      name: '[name]',
      type: 'var',
    },
  },
};

module.exports = merge(baseConfig, devConfig);
