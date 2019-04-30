import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePlayer extends Component {
    constructor(props) {
        super(props);

        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            player_name: '',
        }
    }

    onChangePlayerName(e) {
        this.setState({
            player_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Player Name: ${this.state.player_name}`);
     
        const newPlayer = {
            player_name: this.state.player_name
        };

        axios.post('http://localhost:4000/players/add', newPlayer)
            .then(res => console.log(res.data));

        this.setState({
            player_name: ''
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.player_name}
                                onChange={this.onChangePlayerName}
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