const { NxWebpackPlugin } = require('@nx/webpack');
const { join } = require('path');
const { codecovWebpackPlugin } = require('@codecov/webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/cms-api'),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
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
      bundleName: 'Case-Management-System-Api',
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
};
