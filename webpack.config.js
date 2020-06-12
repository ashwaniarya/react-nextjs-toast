// Webpack config
const path = require('path')
const webpack = require('webpack');
module.exports = (env, argv) => {
    if(argv.mode === "development") {
        return module.exports = {
            entry: "./src/index.js",
            mode: "production",
            module: {
              rules: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: "babel-loader",
                }
              ]
            },
            resolve: { extensions: ["*", ".js", ".jsx"] },
            output: {
              path: path.resolve(__dirname, "dist/"),
              publicPath: "/dist/",
              filename: "bundle.js"
            },
            devServer: {
              contentBase: __dirname,
              port: 3000,
              publicPath: "http://192.168.0.102:3000/dist/",
              hotOnly: true
            },
            plugins: [new webpack.HotModuleReplacementPlugin()]
          };
    }   
    if(argv.mode === 'production') {
      if(argv.type === 'package') {
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
      if(argv.type === "demo") {
          return module.exports = {
            entry: "./src/index.js",
            mode: "production",
            module: {
              rules: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: "babel-loader",
                }
              ]
            },
            resolve: { extensions: ["*", ".js", ".jsx"] },
            output: {
              path: path.resolve(__dirname, "dist/"),
              publicPath: "/dist/",
              filename: "bundle.js"
            }
          };
      }
    }
}