const packageY = require('@my-scope/package-y').default;

function packageZ(message) {
    return 'Hello from package-z, ' + packageY() + (message || '');
}

exports.default = packageZ;
exports.packageZ = packageZ; 

