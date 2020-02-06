const packageX = require('./index').default;

exports.default = function(args) {
    return packageX(args ? args[0] : null);
}