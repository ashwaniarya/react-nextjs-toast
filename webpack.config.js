// Webpack config
const path = require('path')
const webpack = require('webpack');
module.exports = (env, argv) => {
  return {
      mode: 'production',
      entry: './src/toast.js',
      output: {
          path: path.resolve('lib'),
          filename: 'toast.js',
          libraryTarget: 'commonjs2'
      },
      module: {
          rules: [
              {
                  test: /\.jsx?$/,
                  exclude: /(node_modules)/,
                  use: 'babel-loader'
              }
          ]
      }
    }
}