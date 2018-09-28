const webpack = require('webpack')
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require("./webpack.base.config")

module.exports = merge(baseWebpackConfig, {
  // webpack-dev-server相关配置
  devServer: {
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8000',
    publicPath: '/'
  },
  // webpack dev模式下的插件配置
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
})
