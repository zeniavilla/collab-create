import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../styles/components/App.css';
import ServiceGrid from './ServiceGrid/ServiceGrid';
import NavCurrentUser from './Navbar/NavCurrentUser';
import ServicesNav from './ServicesNav/ServicesNav';
import Footer from './Footer/Footer';
import UserNew from './SignUpForm/UserNew';
import UserProfileEdit from './UserEdit/UserProfileEdit';
import SignIn from './SignInForm/SignIn';
import SignOut from './SignOut/SignOut';
import UserShow from './UserPublicProfile/UserShow';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <NavCurrentUser />
          <ServicesNav services={this.props.services} />
          <div id="wrapper">
            <Route path="/services" component={ServiceGrid} />
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

const mapStateToProps = state => {
  return({ services: state.services })
}

export default connect(mapStateToProps)(App);