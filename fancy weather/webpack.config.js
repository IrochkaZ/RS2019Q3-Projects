const path  =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
mode: 'production',
entry: './src/js/index.js',
output:{
  filename: 'main.js',
  path: path.resolve(__dirname,'dist')
},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap:true,
          }
        }
        ]
      }
    ],
  },
plugins: [
  new HtmlWebpackPlugin({
    title: 'Fancy Weather App',
    filename: 'index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: "./style.css",
  })
]
}
