const path  =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
mode: 'production',
entry: './index.js',
output:{
  filename: 'main.js',
  path: path.resolve(__dirname,'dist')
},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
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
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
            loader: 'file-loader',
            options: {
                outputPath: './assets/img/'
            }
        }
    },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src']
          }
        }
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
