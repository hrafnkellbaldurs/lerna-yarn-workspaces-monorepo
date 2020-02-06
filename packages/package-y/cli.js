const packageY = require('./index').default;

exports.default = function(args) {
    return packageY(args ? args[0] : null);
}