import React, { PureComponent } from 'react';

import img_black_facebook from '../images/black_facebook.png';
import img_email from '../images/email-icon-hi.png';
import img_twitter from '../images/twitter.png';
import img_black_facebook_hover from '../images/black_facebook-hover.png'
import img_email_hover from '../images/email-icon-hi-hover.png'
import img_twitter_hover from '../images/twitter-hover.jpg'

class Contact extends PureComponent {
  state = {
    hoveredId: '',
  }

  handleHover = (id) => {
    const { hoveredId } = this.state;

    if(hoveredId === id) {
      return () => this.setState({
        hoveredId: ''
      })
    }

    return () => this.setState({
      hoveredId: id,
    })
  }

  render() {
    const { hoveredId } = this.state;

    return (
      <div id="contact">
        <ul>
          <li className="donate">
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PFTS9Z9VF67RC" target="_new" className="contact-btn">DONATE HERE!</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/radiofreemv" target="_new">
              <img src={hoveredId === 'img_black_facebook' ? img_black_facebook_hover : img_black_facebook} onMouseOver={this.handleHover('img_black_facebook')} onMouseOut={this.handleHover('img_black_facebook')} alt="Check us out on facebook!" />
            </a>
          </li>
          <li>
            <a href="mailto:stationmanager@wvvy.org">
              <img src={hoveredId === 'img_email' ? img_email_hover : img_email} onMouseOver={this.handleHover('img_email')} onMouseOut={this.handleHover('img_email')} alt="Contact us via e-mail" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/wvvy" target="_new">
              <img src={hoveredId === 'img_twitter' ? img_twitter_hover : img_twitter} onMouseOver={this.handleHover('img_twitter')} onMouseOut={this.handleHover('img_twitter')} alt="Check us out on Twitter!" />
            </a>
          </li>
        </ul>
        <ul>
          <li className="donate">
            <a href="https://smile.amazon.com/ch/04-3502710" className="contact-btn">DONATE TO US USING AMAZON SMILE!</a>
          </li>
        </ul>
        <a href="#calendar"><button>DJ Schedule ⇧</button></a>
        <br /><br />
        <h1>508-693-9379</h1>
      </div>
    )
  }
};

export default Contact;
