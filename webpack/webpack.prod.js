const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        IS_DEV: false,
        IS_PROD: true,
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [ 
      new TerserPlugin({ parallel: true })
  ]}
};
