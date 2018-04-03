const path = require('path'); 

const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 
  template: './public/index.html', 
  filename: 'index.html', 
  inject: 'body' 
});

module.exports = { 
    entry: './src/index.js', 
    output: { 
      path: path.resolve('dist'), 
      filename: 'bundle.js' 
    }, 
    module: { 
      rules: [ 
        { test: /\.css$/, 
          use: [ 
            { loader: "style-loader" }, 
            { loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            } 
          } 
          ] 
        }, 
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: "babel-loader" 
        }, { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          use: "babel-loader" 
        } 
      ] 
    },
    devServer : {
        port: 9000
    },
    plugins: [HtmlWebpackPluginConfig]
  }