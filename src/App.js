import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Thumbs from './components/Thumbs';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import ListenButton from './components/ListenButton';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Schedule />
      </Fragment>
    );
  }
}

export default App;
