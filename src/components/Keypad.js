// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
    
    handlePass = () => {
        console.log('Entering password...')
    }

    render() {
        return(
            <div>
                <input onKeyUp={this.handlePass} type="password" />
            </div>
        )
    }
}