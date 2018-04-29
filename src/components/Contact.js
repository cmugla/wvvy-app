import React from 'react';

const Contact = props => {
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
            <img src="images/black_facebook.png" onMouseOver="this.src='images/black_facebook-hover.png'" onMouseOut="this.src='images/black_facebook.png'" alt="Check us out on facebook!" />
          </a>
        </li>
        <li>
          <a href="mailto:stationmanager@wvvy.org">
            <img src="images/email-icon-hi.png" onMouseOver="this.src='images/email-icon-hi-hover.png'" onMouseOut="this.src='images/email-icon-hi.png'" alt="Contact us via e-mail" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/wvvy" target="_new">
            <img src="images/twitter.png" onMouseOver="this.src='images/twitter-hover.jpg'" onMouseOut="this.src='images/twitter.png'" alt="Check us out on Twitter!" />
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
};

export default Contact;