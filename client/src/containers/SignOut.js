import { Component } from 'react';
import { connect } from 'react-redux';

import { removeCurrentUser } from '../actions/userActions';

class SignOut extends Component {
  componentWillMount = () => {
    this.props.removeCurrentUser();
    const { history } = this.props;
    history.push('/sign_in');
  }

  render() {
    return null
  }
}

export default connect(null, { removeCurrentUser })(SignOut);