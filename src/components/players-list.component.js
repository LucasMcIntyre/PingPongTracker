import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Player = props => (
    <tr>
        <td>{props.player.player_name}</td>
    </tr>
)

export default class PlayersList extends Component {

    constructor(props) {
        super(props);
        this.state = {players: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/players/')
            .then(response => {
                this.setState({ players: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    playerList() {
        return this.state.players.map(function(currentPlayer, i){
            return <Player player={currentPlayer} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Players List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.playerList() }
                    </tbody>
                </table>
            </div>
        )
    }
}