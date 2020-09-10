// Code Keypad Component Here
import React, {Component} from 'react';


export default class Keypad extends Component {

    keyUpHandler(e) {
     return   console.log('Entering password...')
    }
    render() {
        return( 
            <input onKeyUp={this.keyUpHandler} type="password" />
        )
    }
}