import React, { Component } from 'react'

export default class Keypad extends React.Component {
    handleKeyUp(e) {
        console.log('Entering password...')
    }
    render() {
        
        return(
            <div id="keypad-container">
                <input type="password" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
