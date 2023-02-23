const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const path = require('path');
const prodConfig = {
  mode: 'production',
  output: {
    library: {
      name: '[name].min',
      type: 'umd',
    },
  },
};

module.exports = merge(baseConfig, prodConfig);
