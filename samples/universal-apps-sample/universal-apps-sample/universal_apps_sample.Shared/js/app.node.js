var api = require('./api/db/index.node'),
    moment = require('moment');

console.log("The NodeJS App-code has started running at " + moment().toISOString());

// Sample call into the API module
api.db.users.getById({
    id: 'toddpi314'
},
    function (err, user) {
        if (err)
            console.error(err);
        // Found some users from the web!
        console.log(user);
    });