import React from 'react';

import logo from '../images/logo.jpg';
import podcast from '../audio/test.mp3';

const Config = {
  IS_IOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
}

class Header extends React.Component {
  state = {
    iOSHitPlay: false,
  }

  setPlay = e => {
    if(Config.IS_IOS) e.preventDefault();
    this.setState({
      iOSHitPlay: true
    })
    this.audio.play();
  }

  render() {
    let extraProps = {}
    let audioStyles = { 
      width: '100%',
      textAlign: 'center', 
      position: 'fixed', 
      bottom: '0', 
      height: '40px', 
      transform: this.state.iOSHitPlay ? 'translateY(0)' : 'translateY(40px)', 
      transition: 'all 200ms ease' 
    };
    
    extraProps.target = '_blank';
    extraProps.rel = 'noopener noreferrer';
    extraProps.onClick = this.setPlay;

    return (
      <header>
        <img src={logo} alt="wvvy Community Radio 96.7 lpfm" />
        <h1>Martha's Vineyard Community Radio</h1>
        <div className="text">
          <p>Welcome to WVVY. We are a fully volunteer-run radio station located on Martha's Vineyard, MA.</p>
          <p>Check out the <a href="#calendar">DJ schedule</a>, <a href="#listen">what's playing now</a>, and <a href="#contact">our support options</a> below. We are accepting requests and feedback all the time. Thank you for tuning in.</p>
        </div>

        <section style={{ backgroundColor: 'beige', width: '100%', padding: '2em 0', marginTop: '1em' }}>
          <div className="text">
            <h2>Featured Show:</h2>
            <p>
              DJ Al Kooper <br />
              (musician, producer, <a href="https://en.wikipedia.org/wiki/Al_Kooper" target="_blank">and more</a>)
              </p><p>📡 Air date: Sept 23, 2018 📡</p>
              <p>
              <a
                {...extraProps}
              >
                Listen
              </a>
              {!Config.IS_IOS &&
                <React.Fragment>
                  <span style={{ padding: '0 1em' }}> | </span>
                  <a
                    download
                    href={podcast}
                  >
                    Download
                  </a>
                </React.Fragment>
              }
            </p>
          </div>
        </section>
        
        <div style={audioStyles}>
          <audio ref={node => this.audio = node} controls preload="auto">
            <source src={podcast} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </header>
    )
  }
}

export default Header;
