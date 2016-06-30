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
        console.log('here i am');
        return {
            sessionName: this.sessionName,
            sessionChoice: 'JOIN_EXISTING'
        }
    }
}

module.exports = {
    create(name, url, sessionName) {
        new Bot(name).withStrategy(new BotStrategy(sessionName)).connect(url);
        new Bot(name).withStrategy(new BotStrategy(sessionName)).connect(url);
    }
};
