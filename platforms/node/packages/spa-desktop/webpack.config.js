/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const DefinePlugin = require('webpack').DefinePlugin;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, { mode }) => {
  const [DEV, PROD] = ['development', 'production'];

  console.log(`App is running in ${mode} mode`);

  const config = {
    mode,

    devtool: mode === PROD ? false : 'inline-source-map',

    entry: path.resolve(__dirname, 'src/index.tsx'),

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
      },
      plugins: [],
    },

    output: {
      path: __dirname + '/dist',
      filename: '[name].[hash].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.scss$/,
          exclude: path.resolve(__dirname, 'src/styles/'),
          use: [
            'style-loader',
            'css-modules-typescript-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: mode === DEV ? true : false,
                modules: {
                  localIdentName: '[local]___[hash:base64:5]',
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'src/styles/'),
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            limit: 10 * 1024,
            noquotes: true,
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          enforce: 'pre',
        },
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        inject: 'body',
        hash: true,
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: 'public',
      }),
      new DefinePlugin({
        __IMAGES_PATH__: mode === DEV ? "'public/images'" : "'images'",
        __CORE_API_PATH__: "'https://pillar-api-dev.azurewebsites.net/api/'",
        // TODO UNCOMMENT THIS AFTER FE PROD ENVIRONMENT READY
        // mode === DEV
        //   ? "'https://pillar-api-dev.azurewebsites.net/api/'"
        //   : "'https://pillar-api.azurewebsites.net/api/'"
      }),
      new CleanWebpackPlugin(),
    ],

    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
  };

  if (mode === PROD) {
    config.optimization = {
      minimize: true,
      concatenateModules: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        cacheGroups: {
          default: false, // Removes default config

          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // We creating here node_modules single package name
              return `npm.${module.context
                .match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                .replace('@', '')}`;
            },
            minSize: 0,
          },
        },
      },
    };
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            context: './public/',
            from: '**/*png',
            to: './',
          },
          {
            context: './public/',
            from: '**/*json',
            to: './',
          },
        ],
      })
    );
  }

  return config;
};
