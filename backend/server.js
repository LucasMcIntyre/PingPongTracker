const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const playerRoutes = express.Router();
const gameRoutes = express.Router();
const PORT = 4000;

let Player = require('./player.model');
let Game = require('./game.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/pingpongtracker', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

playerRoutes.route('/').get(function(req, res) {
    Player.find(function(err, players) {
        if (err) {
            console.log(err);
        } else {
            res.json(players);
        }
    });
});

gameRoutes.route('/').get(function(req, res) {
    Game.find(function(err, game) {
        if (err) {
            console.log(err);
        } else {
            res.json(game);
        }
    });
});

playerRoutes.route('/add').post(function(req, res) {
    let player = new Player(req.body);
    player.save()
        .then(player => {
            res.status(200).json({'player': 'player added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new player failed');
        });
});

gameRoutes.route('/add').post(function(req, res) {
    let game = new Game(req.body);
    game.save()
        .then(game => {
            res.status(200).json({'game': 'game added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new game failed');
        });
});

app.use('/players', playerRoutes);
app.use('/games', gameRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});