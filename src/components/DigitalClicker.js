// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor(){
        super();
        this.state={
            timesClicked: 0
        }
    }

    handleTimesClicked = () => {
        let oldClicks = this.state.timesClicked
        this.setState({
            timesClicked: oldClicks + 1
        })
    }
    render(){
        return(
            <button onClick={this.handleTimesClicked}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;