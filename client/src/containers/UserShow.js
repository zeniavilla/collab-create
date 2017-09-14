import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectedUserService } from '../actions/userActions';

import UserPublicProfile from '../components/UserPublicProfile';
import './UserShow.css';

class UserShow extends Component {
  
  componentDidMount = () => {
    const { userId } = this.props.match.params;
    this.props.getSelectedUserService(userId);
  }

  render() {
    return (
      <div>
        <UserPublicProfile user={this.props.selectedUserService} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({ selectedUserService: state.selectedUserService })
}

export default connect(mapStateToProps, { getSelectedUserService })(UserShow);