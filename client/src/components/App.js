import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Services from '../containers/Services';
import NavCurrentUser from '../containers/NavCurrentUser';
import Footer from './Footer';
import UserNew from '../containers/UserNew';
import UserProfileEdit from '../containers/UserProfileEdit';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavCurrentUser />
          <div id="wrapper">
            <Route path="/services" component={Services} />
            <Route path="/sign_up" component={UserNew} />
            <Route path="/sign_in" component={SignIn} />
            <Route path="/sign_out" component={SignOut} />
            <Route path="/profile/:user_id" component={UserProfileEdit} />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;