import React from 'react';
import { connect } from 'react-redux';

import { updateUserFormData } from '../actions/userActions';

import '../components/UserSignUpForm';

const UserNew = event => {
  const handleOnClick = () => {
    update
  }
  
  const handleOnChange = event => {
    const { id, value } = event.target;

    const currentUserFormData = Object.assign({},
    this.props.userFormData, {
      [id]: value
    })

    this.props.updateUserFormData(currentUserFormData);
  }

  return (
    <UserSignUpForm handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
  )
}

const mapStateToProps = state => {
  return { userFormData: state.userFormData }
}

export default (mapStateToProps, { updateUserFormData })(UserNew);