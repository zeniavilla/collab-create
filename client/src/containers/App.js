import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Services from './Services';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <div id="wrapper">
          <Route path="/services" component={Services} />
          </div>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return ({ services: state.services })
}

export default connect (mapStateToProps)(App);