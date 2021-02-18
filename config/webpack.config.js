const { buildPath, sourcePath } = require('./config.const');
const RemoveWebpackPlugin = require('remove-webpack-plugin');
const CreateBuildPackageJsonPlugin = require('./create-build-package-json-plugin');

module.exports = {
  entry: {
    index: `${sourcePath}/index.ts`
  },

  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },

  target: 'web',

  optimization: {
    minimize: true
  },

  resolve: {
    extensions: ['.ts'],
    modules: ['node_modules', sourcePath]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: sourcePath,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      }
    ]
  },

  plugins: [new RemoveWebpackPlugin([buildPath], 'hide'), new CreateBuildPackageJsonPlugin()],

  mode: 'production',

  devtool: false,

  performance: { hints: false }
};
