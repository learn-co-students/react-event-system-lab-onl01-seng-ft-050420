import React, { Component } from 'react'

export default class Keypad extends Component {
    handleKeyup = () => {
        console.log('Entering password...')
    }

    render (){
        return (
            <input onKeyUp={this.handleKeyup} type='password'/>
        )
    }
}