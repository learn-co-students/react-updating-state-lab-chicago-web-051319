// Code DigitalClicker Component Here
import React, { Component } from 'react';
export default class DigitalClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            timesClicked: 0
         }
    }

    updateState = () => {
        let clicks = this.state.timesClicked + 1
        this.setState({
            timesClicked: clicks
        })
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.updateState}>{this.state.timesClicked}</button>
            </div>
         );
    }
}
 
