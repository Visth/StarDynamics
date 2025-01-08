const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  return merge(commonConfig, require(`./webpack.${env}.js`));
};
