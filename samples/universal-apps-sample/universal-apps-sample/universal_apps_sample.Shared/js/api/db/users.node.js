var moment = require('moment');
var db = [
    {
        "id" : "toddpi314",
        "name": {
            "first": "todd",
            "last": "morrison"
        },
        "age": 31
    }
];

exports.getAll = function (data, callback) {
    return callback(null, db);
};

exports.create = function (data, callback) {
    var name = data.name || {};
    var age = data.age;
    var id = data.id;

    // TODO: validation of data parms

    db.push({
        id: id,
        name: name,
        age: age
    });
};

exports.getById = function (data, callback) {
    var id = data.id;

    // TODO: validation of data parms

    var recordList = db.filter(function (a) {
        if (a.id == id)
            return true;
        return false;
    });
    if (recordList.length > 0.)
        return callback(null, recordList[0]);
    return callback('user-not-found');
};