const x = require('@my-scope/package-x');

module.exports = function y() {
    return 'Hello from y, ' + x();
};