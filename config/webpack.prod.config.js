const webpack = require('webpack')
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseWebpackConfig = require("./webpack.base.config")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require("path")

const distPath = path.resolve(__dirname, '../dist')
module.exports = merge(baseWebpackConfig,{
    // webpack 打包输出的配置
    output:{
        path: distPath,
        // js文件提取路径 path.posix 跨平台兼容路径
        filename: path.posix.join('static','js/[name].[chunkhash].js'),
        // 公共文件提取路径
        chunkFilename: path.posix.join('static','js/[name].[chunkhash].js')
    },
    // webpack打包时的插件配置
    plugins:[
        // 清理dist陌路
        new CleanWebpackPlugin([distPath],{root: path.resolve(__dirname, '../')}),
        // 混淆压缩js
        new UglifyJSPlugin(),
        // html处理
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
              // more options:
              // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
          })
    ]
})
