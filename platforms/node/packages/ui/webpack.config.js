/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const DefinePlugin = require("webpack").DefinePlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, { mode }) => {
  const [DEV, PROD] = ["development", "production"];
  const [isDev, isProd] = [env === DEV, env === PROD];

  const config = {
    mode,

    devtool: "inline-source-map",

    entry: path.resolve(
      __dirname,
      isDev ? "src/Playground.local.tsx" : "src/index.tsx"
    ),

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        theme: path.resolve(__dirname, "src/style/theme.scss"),
      },
      plugins: [],
    },

    output: {
      path: __dirname + "/dist",
      filename: "[name].js",
      publicPath: "/",
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.scss$/,
          exclude: path.resolve(__dirname, "src/style/"),
          use: [
            "style-loader",
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: {
                  localIdentName: "[local]___[hash:base64:5]",
                },
              },
            },
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, "src/style/"),
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.html$/,
          use: ["html-loader"],
        },
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        inject: "body",
        hash: true,
      }),
      new CleanWebpackPlugin(),
    ],

    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
  };

  return config;
};
