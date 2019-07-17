// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor(){
        super();
        this.state={
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

    handleBitrateClicked = () => {
        this.setState({settings:{...this.state.settings, bitrate: 12}})
        console.log(this.state)
    }
    handleResolutionClicked = () => {
        this.setState({settings:{...this.state.settings,video:{resolution: '720p'}}})
    }
    render(){
        return(
            <div>
                <button className='bitrate' onClick={this.handleBitrateClicked}>Click Me to update bitrate!</button>
                <button className='resolution' onClick={this.handleResolutionClicked}>Click Me to update resolution!</button>
            </div>
        )
    }
}

export default YouTubeDebugger;