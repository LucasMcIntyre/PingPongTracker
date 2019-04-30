const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Player = new Schema({
    player_name: {
        type: String
    }
});

module.exports = mongoose.model('Player', Player);