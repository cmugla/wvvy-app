import React from 'react';

const DonateMessage = props => (
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
);

export default DonateMessage;
