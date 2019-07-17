// Code YouTubeDebugger Component Here
import React, { Component } from 'react';
export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    updateBitrate = () => {
        const settings = {...this.state.settings}
        settings.bitrate = 12
        this.setState({settings})
    }

    updateResolution = () => {
        const settings = {...this.state.settings}
        settings.video.resolution = '720p'
        this.setState({settings})
    }



    render() { 
        return ( 
            <div>
                <button className="bitrate" onClick={this.updateBitrate}></button>
                <button className="resolution" onClick={this.updateResolution}></button>
            </div>
         );
    }
}
 
