'use strict';

const http = require('http');

function registerBotToRegistry() {
    const post_data = {
        host: 'localhost',
        port: 1337,
        path: '/api',
        owner: 'daniboy',
        id: 'daniboyscrazyrandombot'
    };

    const post_options = {
        host: 'localhost',
        port: 1338,
        path: '/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

// Set up the request
    const post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    post_req.write(JSON.stringify(post_data));
    post_req.end();

}

module.exports = {
    registerBotToRegistry
};
