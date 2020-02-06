const packageX = require('@my-scope/package-x').default;

function packageY() {
    return 'Hello from package-y, ' + packageX();
};

exports.default = packageY;
exports.packageY = packageY; 