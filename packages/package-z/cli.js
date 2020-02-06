const packageZ = require('./index').default;

exports.default = function(args) {
    return packageZ(args ? args[0] : null);
}