import React from 'react';

import logo from '../images/logo.jpg';
import podcast from '../audio/test.mp3';

const Config = {
  IS_IOS: !!navigator.userAgent.match(/iPhone|iPad|iPod/i),
}

const Header = (props) => {
  let extraProps = {}
  if(Config.IS_IOS) {
    extraProps.target = '_blank';
  }

  return (
    <header>
      <img src={logo} alt="wvvy Community Radio 96.7 lpfm" />
      <h1>Martha's Vineyard Community Radio</h1>
      <div className="text">
        <p>Welcome to WVVY. We are a fully volunteer-run radio station located on Martha's Vineyard, MA.</p>
        <p>Check out the <a href="#calendar">DJ schedule</a>, <a href="#listen">what's playing now</a>, and <a href="#contact">our support options</a> below. We are accepting requests and feedback all the time. Thank you for tuning in.</p>
      </div>
      <a style={{ fontSize: '30px', color: 'dodgerblue' }} download href={podcast} {...extraProps}>Download Test, Click</a>
    </header>
  )
}

export default Header;
