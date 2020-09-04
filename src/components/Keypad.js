import React from 'react'

class KeyPad extends React.Component{

    handleKeyUp = ()=> console.log('Entering password...');

    render() {
        return (
            <input onKeyUp={this.handleKeyUp} type="password"/>
        )
    }
}
export default KeyPad;