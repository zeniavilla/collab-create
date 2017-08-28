import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserSignUpForm from '../components/UserSignUpForm';

import { updateUserFormData } from '../actions/userActions';

class UserNew extends Component {
  
  handleOnClick = event => {
    const { id, value } = event.target;
  }
  
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
  }

  render() {
    return (
      <UserSignUpForm userFormData={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} handleOnSubmit={this.handleOnSubmit} />
    )
  }
}

const mapStateToProps = state => {
  return ({ userFormData: state.userFormData })
}

export default connect (mapStateToProps, { updateUserFormData })(UserNew);