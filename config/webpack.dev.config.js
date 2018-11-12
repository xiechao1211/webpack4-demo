const webpack = require('webpack')
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require("./webpack.base.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseWebpackConfig, {
  // webpack-dev-server相关配置
  devServer: {
    hot: true,
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8000',
    publicPath: '/',
    proxy: {
        '/api': {
            //去除环境变量的双引号
            target: 'https://www.jianshu.com',
            // target: 'http://118.31.176.215:9999',
            // target: prod.BASE_API.replace(/\"/g, '') + '/api',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    }
  },
  // webpack dev模式下的插件配置
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
        filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ]
})
