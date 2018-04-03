const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/promise-fix.js', './src/entry.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'entry.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: false // Disable name mangling to avoid this issue: https://github.com/espruino/Espruino/issues/1367
        },
        sourceMap: true
      })
    ]
  },
};