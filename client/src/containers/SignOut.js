import { Component } from 'react';
import { connect } from 'react-redux';

import { clearSession } from '../actions/userActions';

class SignOut extends Component {
  componentWillMount = () => {
    this.props.clearSession();
    const { history } = this.props;
    history.push('/sign_in');
  }

  render() {
    return null
  }
}

export default connect(null, { clearSession })(SignOut);