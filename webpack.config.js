const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/javascript/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "main_bundle.js",
    clean: true,
  },

  devServer: {
    static: "./public",
    hot: true,
    open: true,
    port: 2000,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
            loader: 'js',
            target: 'es2015'
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
  ],
},

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
  ],
};
