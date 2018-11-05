const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  context: path.resolve(__dirname, "../"),
  // webpack入口
  entry: {
    app: "./src/main.js",
    opsUtils: './src/opsUtils/index.js'
  },
  // webpack输出
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js"
  },
  module: {
    // 配置webpack各种loader
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.less$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader",
            "less-loader"
        ]
      },
      {
        test: /\.css$/,
        use:[
            // "style-loader",
            MiniCssExtractPlugin.loader,
            {loader: "css-loader",options:{sourceMap: true, importLoaders: 1}},
            "postcss-loader"
        ]
      },

    ]
  },
  plugins: {

  }
};
