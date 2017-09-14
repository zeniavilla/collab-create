import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Nav.css';
import NavBar from '../components/NavBar';

class NavCurrentUser extends Component {
  render() {
    return(
      <NavBar currentUser={this.props.currentUser} />
    )
  }
}

const mapStateToProps = state => {
  return ({ currentUser: state.currentUser })
}

export default connect (mapStateToProps)(NavCurrentUser);