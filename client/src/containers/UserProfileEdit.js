import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserEditForm from '../components/UserEditForm';

import { updateUserFormData, editUser } from '../actions/userActions';

class UserProfileEdit extends Component {

  handleOnChange = event => {
    const { id, value } = event.target;
    const currentUserFormData = Object.assign({},
      this.props.userFormData, {
        [id]: value
      })
  
    this.props.updateUserFormData(currentUserFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.editUser(this.props.userFormData, this.props.currentUser.id);
  }

  render() {
    return (
      <UserEditForm currentUser={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
    )
  }
}

const mapStateToProps = state => {
  return ({ 
    currentUser: state.currentUser,
    userFormData: state.userFormData
  })
}

export default connect(mapStateToProps, { updateUserFormData, editUser })(UserProfileEdit);