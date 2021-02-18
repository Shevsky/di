const fs = require('fs');
const { buildPath, resolvePath } = require('./config.const');
const packageJson = require('../package.json');

class CreateBuildPackageJsonPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('CreateBuildPackageJsonPlugin', this.main);
  }

  main() {
    const { devDependencies, scripts, ...buildPackageJson } = packageJson;

    fs.copyFileSync(resolvePath('package.json'), `${buildPath}/package.json`);

    fs.writeFileSync(`${buildPath}/package.json`, JSON.stringify(buildPackageJson, null, 2));
  }
}

module.exports = CreateBuildPackageJsonPlugin;
