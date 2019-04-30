const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Game = new Schema({
    player1_name: {
        type: String
    },
    player2_name: {
        type: String
    },
    winner_name: {
        type: String
    }
});

module.exports = mongoose.model('Game', Game);