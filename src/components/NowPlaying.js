import React from 'react';

const NowPlaying = props => {
  return (
    <div className="nowplaying">
      <div className='embed-container'>
        <iframe src='http://wvvy.org/nowplaying.html' style={{ border: '0' }} />
      </div>
    </div>
  )
}

export default NowPlaying;
