import React from 'react';

class NowPlaying extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="nowplaying">
        <div className="embed-container">
          <iframe title="wvvy now playing" src="http://wvvy.org/nowplaying.html" style={{ border: '0' }} />
        </div>
      </div>
    )
  }
}

export default NowPlaying;
