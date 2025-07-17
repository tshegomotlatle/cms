const { NxWebpackPlugin } = require('@nx/webpack');
const { join } = require('path');
const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');

const plugins = [
  new NxWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.scss'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
];

if (process.env.ENVIRONMENT === 'development') {
  const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');
  plugins.push(
    codecovWebpackPlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'cms',
      uploadToken: process.env.CODECOV_TOKEN,
      apiUrl: 'https://codecov.io',
    })
  );
}

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/cms'),
  },
  devServer: {
    port: 4200,
  },
  plugins,
};