import React from 'react';

const ListenButton = ({ children = <button>Listen via live stream ►</button> }) => {
  return (
    <a href="http://50.252.252.209:8000/listen.pls">
      {children}
    </a>
  )
}

export default ListenButton;
