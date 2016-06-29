'use strict';

let Bot = require('javascript-jass-bot');

class BotStrategy {
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
}

module.exports = {
    create(name, url, sessionName) {
        new Bot(name).withStrategy(new BotStrategy()).connect(url);
        new Bot(name).withStrategy(new BotStrategy()).connect(url);
    }
};
