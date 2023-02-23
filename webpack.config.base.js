const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    Utils: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    scriptType: 'text/javascript',
  },
  resolve: {
    extensions: ['.ts', '.js', '.cjs', '.json'],
  },
  plugins: [new NodePolyfillPlugin(), new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          // {
          // 	loader: "babel-loader",
          // 	options: {
          // 		presets: ["@babel/preset-typescript"]
          // 	}
          // },
          'ts-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};
