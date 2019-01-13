import React from 'react';
import AudioPlayer from './AudioPlayer';
import DonateMessage from './DonateMessage';
import { getEpNumber } from '../util';
import AlKooper from './AlKooper';

const Config = {
  IS_IOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
}

class Featured extends React.Component {
  state = {
    isPlaying: false,
    showMessage: false,
    showDownloads: false,
  }

  setPlay = e => {
    if(Config.IS_IOS) e.preventDefault();
    this.setState({
      isPlaying: true
    })
    this.showDownloadMessage();
    this.audioPlayer.audio.play();
  }

  showDownloadMessage = () => {
    this.setState({
      showMessage: true
    })
  }

  showDownloads = () => {
    this.setState({
      showDownloads: true,
      showMessage: true,
    })
  }

  render() {
    const shouldShowFeaturedShow = true;
    const epNumber = getEpNumber();
    const podcast = `/downloads/newmusicforoldpeople${epNumber}.mp3`;    

    return (
      <React.Fragment>
        {
          this.props.renderFeatured({
            setPlay: this.setPlay,
            showDownloadMessage: this.showDownloadMessage,
            podcast,
            epNumber,
            shouldShowFeaturedShow,
            Config,
            showDownloads: this.showDownloads,
          })
        }

        {
          this.state.showDownloads &&
          <AlKooper />
        }

        {
          this.state.showMessage &&
          <DonateMessage />
        }

        <AudioPlayer ref={node => this.audioPlayer = node} podcast={podcast} isPlaying={this.state.isPlaying} />
      </React.Fragment>
    )
  }
}

export default Featured;
