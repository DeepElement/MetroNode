var uuid = require("uuid");

exports.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.getUUID = function(){
    return uuid.v4();
}