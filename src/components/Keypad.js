import React, { Component } from 'react'

export class Keypad extends Component {
    handleKeyUp = () => {
        console.log('Entering password...')
    }

    render() {
        return (
                <input 
                type="password"
                onKeyUp={this.handleKeyUp}
                />
        )
    }
}

export default Keypad