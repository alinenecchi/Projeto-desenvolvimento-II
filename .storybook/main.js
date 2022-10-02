const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
  stories: [
    "../pages/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/_stories/index.@(js|jsx|ts|tsx)",
    "../components/**/__stories__/index.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/builder-webpack5",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    "storybook-addon-jsx",
    "storybook-addon-designs",
    "@storybook/preset-typescript",
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
          modules: true,
        }
      }
    }
  ],
  webpackFinal: (config, {configType}) => {
    const newConfig = { ...config };
    newConfig.resolve.alias['~'] = path.resolve(__dirname, '../');
    newConfig.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    newConfig.devtool = 'inline-source-map';
    newConfig.module.rules.push({
      test: /\.jsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
            babelrc: false,
            presets: ['react-app']
          }
        }
      ],
    });

    return { ...newConfig };
  }
}
