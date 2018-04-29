import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Thumbs from './components/Thumbs';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import ListenButton from './components/ListenButton';
import Contact from './components/Contact';
import NowPlaying from './components/NowPlaying';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ListenButton />
        <Thumbs />
        <Schedule />
        <div className="text">
          <p>All yet-to-be-filled slots are manned by DJ Auto, our radio robot.</p>
        </div>
        <NowPlaying />
        <p className="text">
          <em>**disclaimer: Song meta-data is not always accurate - specifically when a show goes live - but we are always working to improve :)</em>
        </p>
        <ListenButton />
        <Contact />
        <Footer />
        <Thumbs />
      </Fragment>
    );
  }
}

export default App;
