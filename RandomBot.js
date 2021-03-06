'use strict';

let Bot = require('javascript-jass-bot');

class BotStrategy {

    constructor(sessionName) {
        this.sessionName = sessionName;
    }

    requestTrumpf(cards, isGeschoben) {
        // e.g. choose TRUMPF SPADES
        let response = {};
        response.mode = 'TRUMPF';
        response.trumpfColor = 'SPADES';
        return response;
    }

    playCard(myCards, playedCards, gameState) {
        // e.g. play random
        return myCards[Math.floor(Math.random()*myCards.length)];
    }


    gameFinished(data) {
        console.log(data);
    }

    notifyError(error) {
        console.log(error);
    }

    requestSessionChoice() {
        return {
            sessionName: this.sessionName,
            sessionChoice: 'JOIN_EXISTING'
        }
    }
}

module.exports = {
    create(name, url, mode,sessionName) {
        console.log('Name: ' + name);
        console.log('Url: ' + url);
        console.log('Mode: ' + mode);
        console.log('SessionName: ' + sessionName);
        
        new Bot(name).withStrategy(new BotStrategy(sessionName)).connect(url);
        new Bot(name).withStrategy(new BotStrategy(sessionName)).connect(url);
    }
};
