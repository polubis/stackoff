/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, { mode }) => {
  const [DEV, PROD] = ['development', 'production'];

  console.log(`Lib is running in ${mode} mode`);

  const config = {
    mode,

    entry: path.resolve(__dirname, 'src/index.tsx'),

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },

    output: {
      path: __dirname + '/dist',
      filename: '[name].[chunkhash].js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
      ],
    },

    plugins: [new CleanWebpackPlugin()],
  };

  return config;
};
