import React from 'react';

import logo from '../images/logo.jpg';
import podcast from '../audio/test.mp3';

const Config = {
  IS_IOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
}

class Header extends React.Component {
  state = {
    isPlaying: false,
  }

  setPlay = e => {
    if(Config.IS_IOS) e.preventDefault();
    this.setState({
      isPlaying: true
    })
    this.audio.play();
  }

  render() {
    let audioStyles = { 
      width: '100%',
      textAlign: 'center', 
      position: 'fixed', 
      bottom: '0', 
      height: '40px', 
      transform: this.state.isPlaying ? 'translateY(0)' : 'translateY(40px)', 
      transition: 'all 200ms ease' 
    };

    const n = new Date();
    const shouldShowFeaturedShow = true || n.getDate() > 23 && n.getMonth() >= 8 && n.getYear() >= 118

    return (
      <header>
        <img src={logo} alt="wvvy Community Radio 96.7 lpfm" />
        <h1>Martha's Vineyard Community Radio</h1>
        <div className="text">
          <p>Welcome to WVVY. We are a fully volunteer-run radio station located on Martha's Vineyard, MA.</p>
          <p>Check out the <a href="#calendar">DJ schedule</a>, <a href="#listen">what's playing now</a>, and <a href="#contact">our support options</a> below. We are accepting requests and feedback all the time. Thank you for tuning in.</p>
        </div>

        {
          shouldShowFeaturedShow
          &&
          <section className="gradiant-background">
            <div className="text">
              <p>Featured Show:</p>
              <h2>
                DJ Al Kooper <br />
                (musician, producer, <a href="https://en.wikipedia.org/wiki/Al_Kooper" target="_blank" rel="noopener noreferrer">and more</a>)
                </h2><p><span role="img" aria-label="satellite">📡</span> Air date: Sept 23, 2018 <span role="img" aria-label="satellite">📡</span></p>
                <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.setPlay}
                >
                  Listen
                </a>
                {!Config.IS_IOS &&
                  <React.Fragment>
                    <span style={{ padding: '0 1em' }}>|</span>
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
        }
        {
          this.state.isPlaying &&
          <div className="text">
            <p>Thanks so much for listening!</p>
            <p>
              While you wait, win some karma points and consider giving something back to the station. Its tax deductable and very very easy to do with your PayPal account:
            </p>
            <div id="contact">
              <ul>
                <li className="gradiant-background button">
                  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PFTS9Z9VF67RC" target="_new" className="contact-btn">Donate $1 to wVvy</a>
                </li>
              </ul>
            </div>
            <p>Enjoy the show. We're very excited about this one.</p>
          </div>
        }
        
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

/*
  USING SOUNDCLOUD:
  <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/500448357%3Fsecret_token%3Ds-H9Hh0&auto_play=${this.state.isPlaying}&hide_related=true`}></iframe>
*/
