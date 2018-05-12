import React from 'react';

const ListenButton = ({ children = <button>Listen via live stream ►</button>, ...props }) => {
  return (
    <a href="http://50.252.252.209:8000/listen.pls" {...props}>
      {children}
    </a>
  )
}

export default ListenButton;
