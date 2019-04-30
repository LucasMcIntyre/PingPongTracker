import React, { Component } from 'react';
import PlayerList from './players-list.component'
import CreatePlayer from './create-player.component' 

export default class PlayerPage extends Component {
    state = {

    };
    
    render() {
        return (
            <div>
                <CreatePlayer />
                <PlayerList />
            </div>
        )
    }
}