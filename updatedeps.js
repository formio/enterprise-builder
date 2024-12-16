const fs = require('fs');
const packageJson = require('./package.json');
function updatePackage(packageSrc) {
    const packageBuild = require(packageSrc);
    packageBuild.version = packageJson.version;
    if (packageBuild.dependencies?.hasOwnProperty('@formio/enterprise-builder')) {
        packageBuild.dependencies['@formio/enterprise-builder'] = packageJson.version;
    }
    if (packageBuild.devDependencies?.hasOwnProperty('@formio/enterprise-builder')) {
        packageBuild.devDependencies['@formio/enterprise-builder'] = packageJson.version;
    }
    if (packageBuild.peerDependencies?.hasOwnProperty('@formio/enterprise-builder')) {
        packageBuild.peerDependencies['@formio/enterprise-builder'] = packageJson.version;
    }
    for (let dep in packageJson.dependencies) {
        const version = packageJson.dependencies[dep];
        if (packageBuild.dependencies?.hasOwnProperty(dep)) {
            packageBuild.dependencies[dep] = version;
        }
        if (packageBuild.devDependencies?.hasOwnProperty(dep)) {
            packageBuild.devDependencies[dep] = version;
        }
        if (packageBuild.peerDependencies?.hasOwnProperty(dep)) {
            packageBuild.peerDependencies[dep] = version;
        }
    }
    fs.writeFileSync(packageSrc, JSON.stringify(packageBuild, null, 2));
}

updatePackage('./package-build.json');
updatePackage('./angular/src/package.json');
updatePackage('./angular/src/projects/enterprise-builder/package.json')
updatePackage('./angular/demo/package.json');
