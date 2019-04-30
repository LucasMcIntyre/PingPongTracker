import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Game = props => (
    <tr>
        <td>{props.game.player1_name}</td>
        <td>{props.game.player2_name}</td>
        <td>{props.game.winner_name}</td>
    </tr>
)

export default class GamesList extends Component {

    constructor(props) {
        super(props);
        this.state = {games: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/games/')
            .then(response => {
                this.setState({ games: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    gameList() {
        return this.state.games.map(function(currentGame, i){
            return <Game game={currentGame} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Games List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>First Player</th>
                            <th>Second Player</th>
                            <th>Winner</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.gameList() }
                    </tbody>
                </table>
            </div>
        )
    }
}