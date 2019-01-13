import React, { Component } from 'react';

import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    console.log(global.location.protocol)
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
