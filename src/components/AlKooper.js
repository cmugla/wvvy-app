import React from 'react';

import { getEpNumber } from '../util';

const buildList = (epNumber) => {
  let list = []

  if(!epNumber) {
    return list
  }

  for(let i = 1; i <= epNumber; i++) {
    list.push({ src: `/downloads/newmusicforoldpeople${i}.mp3`, name: `New Music For Old People #${i}` })
  }
  return list
};

const epNumber = getEpNumber();
const downloadList = buildList(epNumber);

const AlKooper = props => {
  return (
    <React.Fragment>
      <h1>Download Al Kooper Shows!</h1>
      {
        downloadList.map(each => (
          <React.Fragment>
            <a href={each.src} download>{each.name}</a>
            <br />
            <br />
          </React.Fragment>
        ))
      }
      <br />
      <h5> ** Safari Users Must Right Click And Select  "Download Linked File" **</h5>
    </React.Fragment>
  )
}

export default AlKooper;