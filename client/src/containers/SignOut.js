import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteSession } from '../actions/userActions';

class SignOut extends Component {

  componentDidMount = () => {
    deleteSession();
    const { history } = this.props;
    history.push('/sign_in');
  }

  render() {
    return null
  }
}

export default connect (null, { deleteSession })(SignOut);