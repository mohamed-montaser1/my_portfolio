// importing loaders and plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// the export object
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/javascript/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main_bundle.js",
    clean: true,
    // when building app will rename all images to be the same real filename
    assetModuleFilename: "imgs/[name][ext]",
  },
  // dev server configuration
  devServer: {
    static: "./build",
    hot: true,
    open: true,
    port: 2000,
    compress: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      // convert the es6 javascript to old javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // html-loader
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      // css and sass loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // images loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // font loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  // to minimize the css and javascript files
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },

  plugins: [
    // to make html files in build folder
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    // to make all sass files in on file "style.css" in css folder in build folder
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
