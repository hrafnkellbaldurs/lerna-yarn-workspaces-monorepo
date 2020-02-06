(function () {
    var defines = {};
    var entry = [null];
    function define(name, dependencies, factory) {
        defines[name] = { dependencies: dependencies, factory: factory };
        entry[0] = name;
    }
    define("require", ["exports"], function (exports) {
        Object.defineProperty(exports, "__cjsModule", { value: true });
        Object.defineProperty(exports, "default", { value: function (name) { return resolve(name); } });
    });
    define("src/example1", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        function greeter(person) {
            return "Hello, " + person;
        }
        exports.greeter = greeter;
        var user = "Jane User";
        console.log(greeter(user));
        exports.default = greeter;
    });
    define("src/example2", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        function greeter(person) {
            return "Hello, " + person;
        }
        exports.greeter = greeter;
        var user = "Jane User";
        console.log(greeter(user));
        exports.default = greeter;
    });
    define("src/example3", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        function greeter(person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }
        exports.greeter = greeter;
        var user = { firstName: "Jane", lastName: "User" };
        console.log(greeter(user));
        exports.default = greeter;
    });
    define("src/example4", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var Student = /** @class */ (function () {
            function Student(firstName, middleInitial, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.middleInitial = middleInitial;
                this.fullName = firstName + " " + middleInitial + " " + lastName;
            }
            return Student;
        }());
        exports.Student = Student;
        // Example for using the 'public' keyword on constructor arguments
        var Student2 = /** @class */ (function () {
            // The use of 'public' on arguments to the constructor 
            // is a shorthand for automatically creating properties with that name
            function Student2(firstName, middleInitial, lastName) {
                this.firstName = firstName;
                this.middleInitial = middleInitial;
                this.lastName = lastName;
                this.fullName = firstName + " " + middleInitial + " " + lastName;
            }
            return Student2;
        }());
        exports.Student2 = Student2;
        function greeter(person) {
            return "Hello, " + person.firstName + " " + person.lastName;
        }
        exports.greeter = greeter;
        var user1 = new Student("Jane", "M.", "User");
        var user2 = new Student2("Sam", "F.", "Johnson");
        console.log(greeter(user1));
        console.log(greeter(user2));
        exports.default = greeter;
    });
    define("src/example5", ["require", "exports"], function (require, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        function greeter(person) {
            if (typeof person === 'string') {
                return greeter(JSON.parse(person));
            }
            ;
            return 'Hello, ' + person.firstName + " " + person.lastName;
        }
        exports.greeter = greeter;
        exports.default = greeter;
    });
    define("src/index", ["require", "exports", "src/example1", "src/example2", "src/example3", "src/example4", "src/example5"], function (require, exports, example1_1, example2_1, example3_1, example4_1, example5_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.example1 = example1_1.default;
        exports.example2 = example2_1.default;
        exports.example3 = example3_1.default;
        exports.example4 = example4_1.default;
        exports.example5 = example5_1.default;
    });
    define("index", ["require", "exports", "src/index"], function (require, exports, index_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        var exampleResults = [
            index_1.example1('Example 1'),
            index_1.example2('Example 2'),
            index_1.example3({ firstName: 'Example', lastName: '3' }),
            index_1.example4({ firstName: 'Example', lastName: '4' }),
            index_1.example5({ firstName: 'Example', lastName: '5' }),
            index_1.example5('{ "firstName": "Example", "lastName": "5" }'),
        ];
        exampleResults.forEach(function (result) {
            document.body.innerHTML += "\n        <div class=\"result\">" + result + "</div>\n    ";
        });
    });
    
    'marker:resolver';

    function get_define(name) {
        if (defines[name]) {
            return defines[name];
        }
        else if (defines[name + '/index']) {
            return defines[name + '/index'];
        }
        else {
            var dependencies = ['exports'];
            var factory = function (exports) {
                try {
                    Object.defineProperty(exports, "__cjsModule", { value: true });
                    Object.defineProperty(exports, "default", { value: require(name) });
                }
                catch (_a) {
                    throw Error(['module "', name, '" not found.'].join(''));
                }
            };
            return { dependencies: dependencies, factory: factory };
        }
    }
    var instances = {};
    function resolve(name) {
        if (instances[name]) {
            return instances[name];
        }
        if (name === 'exports') {
            return {};
        }
        var define = get_define(name);
        instances[name] = {};
        var dependencies = define.dependencies.map(function (name) { return resolve(name); });
        define.factory.apply(define, dependencies);
        var exports = dependencies[define.dependencies.indexOf('exports')];
        instances[name] = (exports['__cjsModule']) ? exports.default : exports;
        return instances[name];
    }
    if (entry[0] !== null) {
        return resolve(entry[0]);
    }
})();