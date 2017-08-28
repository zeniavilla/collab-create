import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Services from '../containers/Services';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <div id="wrapper">
            <NavBar />
            <Route path="/services" component={Services} />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;