const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "[name]_bundle.js",
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
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   type: "asset",
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "imgs/[name].[ext]"
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|otf)$/,
        use: 'file-loader?name=assets/[name].[ext]'
      }
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
