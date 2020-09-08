import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    triggerOnFocus = () => {
        console.log("Good!");
    }

    triggerOnBlur = () => {
        console.log("Hey! Eyes on me!");
    }
  
    render() {
        return (
        <div>
              <button onFocus={this.triggerOnFocus} onBlur={this.triggerOnBlur}>Enter</button>
        </div>
        )
    }
  
}