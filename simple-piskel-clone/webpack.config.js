const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: ['regenerator-runtime/runtime', './app.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { enforce: 'pre', test: /.js$/, loader: 'eslint-loader' },
      {
        test: /.js$/,
        exclude: [
          /(node_modules)/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img/',
          },
        },
      },
      {
        test: /.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts/',
          },
        }],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':src'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple piskel clone',
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/assets/img/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: './src/style.css',
      hot: true,
      orderWarning: true,
      reloadAll: true,
      cssModules: true,
    }),
  ],
};
