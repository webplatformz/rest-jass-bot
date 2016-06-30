'use strict';

let express = require('express');
let bodyParser = require('body-parser');
const RandomBot = require('./RandomBot');
const RegistryApi = require ('./RegistryApi');
const nameGenerator = require('docker-namesgenerator');

const port = process.env.PORT || 3002;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let router = express.Router();

router.post('/', (req, res) => {
    const requestBody = req.body;
    console.log(requestBody);
    const sessionname = requestBody.sessionName;
    const url = requestBody.wsUrl;
    const botName = nameGenerator();
    const mode = requestBody.mode;
    RandomBot.create(botName, url, mode, sessionname);

    res.sendStatus(200);
});

app.use('/api', router);

app.listen(port);

//RegistryApi.registerBotToRegistry();

console.log('server listening on port ' + port);
