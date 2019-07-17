import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    constructor() {
      super();
      this.state = {
        timesClicked: 0}
    }

    handleIncrement=()=>{
      this.setState({
        timesClicked: this.state.timesClicked + 1
      })
    }


  render () {
    return (
      <button onClick={this.handleIncrement}>{this.state.timesClicked}</button>
    )
  }
}
