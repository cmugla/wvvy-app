import React, { PureComponent } from 'react';

import ListenButton from './ListenButton';

import boom100 from '../images/boom-100.jpg';
import boomColor from '../images/listen-color.jpg';

class Boombox extends PureComponent {
  state = {
    isHovered: false,
  }

  handleHover = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    })
  }

  render() {
    return (
      <div style={{ width: '80vw', margin: '0 auto' }}>
        <ListenButton onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <img style={{ width: '100%' }} src={this.state.isHovered ? boomColor : boom100} alt="Click here to listen!" />
        </ListenButton>
      </div>
    )
  }
}

export default Boombox;
