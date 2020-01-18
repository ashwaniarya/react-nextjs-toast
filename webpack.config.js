// Webpack config
var path = require('path')

module.exports = {
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