const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const packageJson = require('../package.json');
const jsObfuscator = require('./obfuscator.js');
module.exports = {
  entry: path.join(path.resolve(__dirname, '..', 'angular', 'dist', 'enterprise-builder', 'fesm2022'), 'formio-enterprise-builder-angular.mjs'),
  output: {
    library: {
      type: 'umd',
      name: 'EnterpriseBuilder',
      export: 'default'
    },
    path: path.resolve(__dirname, './../build/angular'),
    filename: 'enterprise-builder.js',
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
          {
              from: path.resolve(__dirname, '..', 'angular', 'projects', 'enterprise-builder', 'package.json'),
              to: path.resolve(__dirname, '..', 'build', 'angular'),
              transform(content) {
                return content
                  .toString()
                  .replace(/"version":\s*".+"/, '"version": "' + packageJson.version + '"')
              }
          },
          {
              from: path.resolve(__dirname, '..', 'angular', 'dist', 'enterprise-builder', '.npmignore'),
              to: path.resolve(__dirname, '..', 'build', 'angular'),
          },
          {
              from: path.resolve(__dirname, '..', 'angular', 'dist', 'enterprise-builder', 'README.md'),
              to: path.resolve(__dirname, '..', 'build', 'angular'),
          },
          {
              from: path.resolve(__dirname, '..', 'angular', 'dist', 'enterprise-builder', '**', '*.d.ts'),
              to: path.resolve(__dirname, '..', 'build', 'angular'),
              context: path.resolve(__dirname, '..', 'angular', 'dist', 'enterprise-builder')
          }
      ]
    }),
    jsObfuscator
  ],
  mode: 'production',
  externals: [
    nodeExternals({
      allowlist: ['@formio/license/library', 'jose']
    })
  ],
  performance: { hints: false }
};