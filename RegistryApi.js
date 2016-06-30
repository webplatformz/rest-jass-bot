'use strict';

const http = require('http');
//https://jasschallenge-registry.herokuapp.com

function registerBotToRegistry() {
    const botRegistrationData = {
        host: 'localhost',
        port: 3002,
        path: '/api',
        owner: 'daniboy',
        id: 'daniboyscrazyrandombot'
    };

    const addBotToRegistryOptions = {
        host: 'localhost',
        port: 3001,
        path: '/api',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

// Set up the request
    const post_req = http.request(addBotToRegistryOptions, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    post_req.on('error', (chunk) => {
        console.log('ErrorResponse: ' + chunk);
    });

    post_req.write(JSON.stringify(botRegistrationData));
    post_req.end();

}

module.exports = {
    registerBotToRegistry
};
