const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,

  entry: path.resolve(__dirname, '/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.html',
      }
    )
  ],

  devServer: {
    static : {
      directory: path.resolve(__dirname, 'public'),
    },
    // proxy
    compress: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        },
      }
    ]
  }
};