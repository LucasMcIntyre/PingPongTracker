import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.onChangeGamePlayer1 = this.onChangeGamePlayer1.bind(this);
        this.onChangeGamePlayer2 = this.onChangeGamePlayer2.bind(this);
        this.onChangeGameWinner = this.onChangeGameWinner.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            player1_name: '',
            player2_name: '',
            winner_name: ''
        }
    }

    onChangeGamePlayer1(e) {
        this.setState({
            player1_name: e.target.value
        });
    }

    onChangeGamePlayer2(e) {
        this.setState({
            player2_name: e.target.value
        });
    }

    onChangeGameWinner(e) {
        this.setState({
            winner_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Game Player 1: ${this.state.player1_name}`);
        console.log(`Game Player 2: ${this.state.player2_name}`);
        console.log(`Game Winner: ${this.state.winner_name}`);
     
        const newGame = {
            player1_name: this.state.player1_name,
            player2_name: this.state.player2_name,
            winner_name: this.state.winner_name
        };

        axios.post('http://localhost:4000/games/add', newGame)
            .then(res => console.log(res.data));

        this.setState({
            player1_name: '',
            player2_name: '',
            winner_name: ''
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First Player: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player1_name}
                                onChange={this.onChangeGamePlayer1}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Second Player: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player2_name}
                                onChange={this.onChangeGamePlayer2}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Winner: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.winner_name}
                                onChange={this.onChangeGameWinner}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Player" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}