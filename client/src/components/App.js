import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import ServiceCategories from '../containers/ServiceCategories';
import NavCurrentUser from '../containers/NavCurrentUser';
import Footer from './Footer';
import UserNew from '../containers/UserNew';
import UserProfileEdit from '../containers/UserProfileEdit';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';
import UserShow from '../containers/UserShow';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavCurrentUser />
          <div id="wrapper">
            <Route path="/services" component={ServiceCategories} />
            <Route path="/signup" component={UserNew} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={SignOut} />
            <Route path="/profile/:userId" component={UserProfileEdit} />
            <Route path="/users/:userId" component={UserShow} />
          </div>

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;