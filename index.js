'use strict';

let express = require('express');
let bodyParser = require('body-parser');
const RandomBot = require('./RandomBot');
const RegistryApi = require ('./RegistryApi');
const nameGenerator = require('docker-namesgenerator');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = express.Router();

router.post('/', (req, res) => {
    const requestBody = req.body;
    const sessionname = requestBody.sessionName;
    const url = requestBody.wsUrl;
    const botName = nameGenerator();
    console.log('entered rest -jass bot');
    console.log(requestBody);
    RandomBot.create(botName, url, sessionname);

    res.send(200);
});

app.use('/api', router);

app.listen(1337);

RegistryApi.registerBotToRegistry();

console.log('server listening on port 1337');
