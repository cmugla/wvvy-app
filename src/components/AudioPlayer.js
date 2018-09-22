import React from 'react';

class AudioPlayer extends React.Component {
  render() {
    const { podcast, isPlaying } = this.props;

    let audioStyles = { 
      width: '100%',
      textAlign: 'center', 
      position: 'fixed', 
      bottom: '0', 
      height: '40px', 
      transform: isPlaying ? 'translateY(0)' : 'translateY(40px)', 
      transition: 'all 200ms ease',
      left: '0',
    };

    return (
      <div style={audioStyles}>
        <audio ref={node => this.audio = node} controls preload="auto">
          <source src={podcast} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    )
  }
}

export default AudioPlayer;
