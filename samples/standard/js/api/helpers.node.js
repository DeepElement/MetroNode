var uuid = require("uuid");
console.log(uuid.v4());

exports.doSomeWork = function () {
    console.log('work done!');
};

console.log("js.helpers loaded");