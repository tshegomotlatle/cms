const { NxWebpackPlugin } = require('@nx/webpack');
const { join } = require('path');
const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/cms-api'),
  },
  plugins: [
    new NxWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      outputPath: '../../dist/apps/cms-api',
      outputFileName: 'main.js',
    }),
    codecovWebpackPlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'cms-api',
      uploadToken: process.env.CODECOV_TOKEN,
      apiUrl: 'https://codecov.io',
    }),
  ],
};
