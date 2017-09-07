import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserSignUpForm from '../components/UserSignUpForm';

import { updateUserFormData, createOmniauthUser, createUser } from '../actions/userActions';

class UserNew extends Component {
  
  handleOnClick = event => {
    const provider = event.target.name;

    this.props.createOmniauthUser(provider);
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
    const { createUser } = this.props;

    createUser(this.props.userFormData);
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    const { history } = this.props;
    if (this.props.currentUser.id) {
      history.push(`/profile/${this.props.currentUser.id}`);
    }

  }

  render() {
    return (
      <UserSignUpForm userFormData={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} handleOnSubmit={this.handleOnSubmit} currentUser={this.props.currentUser} />
    )
  }
}

const mapStateToProps = state => {
  return ({ 
    userFormData: state.userFormData,
    currentUser: state.currentUser
  })
}

export default connect (mapStateToProps, { updateUserFormData, createOmniauthUser, createUser })(UserNew);