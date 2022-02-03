// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
    
    displayMessage = () => {
        console.log('Entering password...')
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="password" onKeyUp={this.displayMessage}/>
                </form>
            </div>
        );
    }
}

export default Keypad;