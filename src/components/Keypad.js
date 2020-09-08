import React, { Component } from 'react';


export default class Keypad extends Component {

    triggerMessage = () => {
        console.log("Entering password...");
    }
  
  
    render() {
    return (
      <div>
          <input type="password" onKeyUp={this.triggerMessage}/>
      </div>
    )
  }
  
}
