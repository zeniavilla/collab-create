import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Services from '../containers/Services';
import NavBar from './NavBar';
import Footer from './Footer';
import UserNew from '../containers/UserNew';
import UserProfileEdit from '../containers/UserProfileEdit';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <div id="wrapper">
            <NavBar />
            <Route path="/services" component={Services} />
            <Route path="/sign_up" component={UserNew} />
            <Route path="/profile/:user_id" component={UserProfileEdit} />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;