import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSelectedUserService } from '../../actions/userActions';
import { getServices } from '../../actions/serviceActions';

import UserPublicProfile from './UserPublicProfile';
import ServicesNav from '../ServicesNav/ServicesNav';
import '../../styles/components/UserShow.css';

class UserShow extends Component {
  
  componentDidMount = () => {
    const { userId } = this.props.match.params;
    this.props.getSelectedUserService(userId);
    this.props.getServices();
  }

  render() {
    return (
      <div>
      <div id="wrapper" className="clearfix">
        <UserPublicProfile user={this.props.selectedUserService} services={this.props.services} />
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    selectedUserService: state.selectedUserService,
    services: state.services
  })
}

export default connect(mapStateToProps, { getSelectedUserService, getServices })(UserShow);