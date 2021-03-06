import React from 'react';

import AudioPlayer from './AudioPlayer';
import DonateMessage from './DonateMessage';

const podcast = 'http://50.252.252.209:8000/listen.plssid=1';

class ListenButton extends React.Component {
  state = {
    isPlaying: false
  }

  setPlay = e => {
    this.setState({
      isPlaying: true
    })
    if (this.audioPlayer.audio.readyState !== 4) {
      this.audioPlayer.audio.load();
    }
    this.audioPlayer.audio.play();
  }

  render() {
    const { children = <button>Listen via live stream ►</button>, ...rest } = this.props;

    return (
      <React.Fragment>
        <a onClick={this.setPlay} {...rest}>
          {children}
        </a>
        {
          this.state.isPlaying &&
          <DonateMessage />
        }

        <AudioPlayer ref={node => this.audioPlayer = node} isPlaying={this.state.isPlaying} podcast={podcast} />
      </React.Fragment>
    )
  }
}

export default ListenButton;
