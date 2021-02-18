const path = require('path');

const rootPath = process.cwd();
const resolvePath = path.resolve.bind(path, rootPath);
const sourcePath = resolvePath('src');
const publicPath = resolvePath('public');
const buildPath = resolvePath('dist');

module.exports = {
  rootPath,
  resolvePath,
  sourcePath,
  publicPath,
  buildPath
};
