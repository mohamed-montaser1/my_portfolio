const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/javascript/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main_bundle.js",
    clean: true,
    assetModuleFilename: 'imgs/[name][ext]'
  },

  devServer: {
    static: "./build",
    hot: true,
    open: true,
    port: 2000,
    compress: true,
    devMiddleware: {
        writeToDisk: true
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
optimization: {
  minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
  ],
},

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
