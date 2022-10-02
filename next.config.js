const { parsed: localEnv } = require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  serverRuntimeConfig: {
    SERVER_ADDR : process.env.SERVER_ADDR,
    PORT        : process.env.PORT
  },
  publicRuntimeConfig: {
    API_ADDR    : process.env.API_ADDR,
    SERVER_ADDR : process.env.SERVER_ADDR,
    PORT        : process.env.PORT
  },
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
});
