import React from 'react';

import logo from '../images/logo.jpg';
import podcast from '../mp3/al_Kooper_podcast.mp3';

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
    this.showDownload();
    this.audio.play();
  }

  showDownload = () => {
    this.setState({
      showMessage: true
    })
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

    let urlParams = new URLSearchParams(window.location.search);
    let myParam = urlParams.get('show_me_al');

    const n = new Date();
    const shouldShowFeaturedShow = myParam === 'true' || (n.getDate() >= 23 && n.getMonth() >= 8 && n.getYear() >= 118 && n.getHours() >= 11);

    return (
      <header>
        <img src={logo} alt="wvvy Community Radio 96.7 lpfm" />
        <h1>Martha's Vineyard Community Radio</h1>
        <div className="text">
          <p>Welcome to WVVY. We are a fully volunteer-run radio station located on Martha's Vineyard, MA.</p>
          <p>Check out the <a href="#calendar">DJ schedule</a>, <a href="#listen">what's playing now</a>, and <a href="#contact">our support options</a> below. We are accepting requests and feedback all the time. Thank you for tuning in.</p>
        </div>
        <section className="gradiant-background">
          <div className="text">
            <p>Featured Show:</p>
            <h2>
              DJ Al Kooper <br />
              (musician, producer, <a href="https://en.wikipedia.org/wiki/Al_Kooper" target="_blank" rel="noopener noreferrer">and more</a>)</ br>
              "New Music for Old People"
              </h2><p><span role="img" aria-label="satellite">📡</span>Sundays at 11AM and Wednesdays at 11PM<span role="img" aria-label="satellite">📡</span></p>
              <p>
              {shouldShowFeaturedShow && 
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={this.setPlay}
                >
                  Listen
                </a>
              }
              {shouldShowFeaturedShow && !Config.IS_IOS &&
                <React.Fragment>
                  <span style={{ padding: '0 1em' }}>|</span>
                  <a
                    download
                    href={podcast}
                    onClick={this.showDownload}
                    target="_blank"
                  >
                    Download
                  </a>
                </React.Fragment>
              }
            </p>
          </div>
        </section>
        {
          this.state.showMessage &&
          <div className="text">
            <p>Thanks so much for listening!</p>
            <p>
              Win some karma points and consider giving something back to the station. WVVY is an all volunteer radio station and survives solely on your grace and generosity.  Its tax deductible (501(c)3) and very very easy to donate with PayPal or a regular ol credit/debit card:
            </p>
            <div id="contact">
              <ul>
                <li className="gradiant-background button">
                  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PFTS9Z9VF67RC" target="_new" className="contact-btn">Donate $1 to wVvy</a>
                </li>
              </ul>
            </div>
            <p>You can also send a check to WVVY, PO Box 1989, Vineyard Haven, MA  02568</p>
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
