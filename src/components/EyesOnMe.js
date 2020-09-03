import React, { Component } from 'react'

export default class EyesOnMe extends React.Component {

    handleOnFocus(e) {
        console.log('Good!')
    }

    handleOnBlur(e) {
        console.log('Hey! Eyes on me!')
    }

    render() {
        
        return(
            <div id="EyesOnMe-container">
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}> Eyes On Me </button>
            </div>
        )
    }
}
