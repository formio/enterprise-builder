const fs = require('fs');
const srcPackageJson = require('./package.json');
const packageJson = require('./package.root.json');
packageJson.version = srcPackageJson.version;
fs.writeFileSync('./build/package.json', JSON.stringify(packageJson, null, 2));