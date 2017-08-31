import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm';

import { updateUserFormData, createSession } from '../actions/userActions';

class SessionNew extends Component {

  handleOnChange = event => {
    const { id, value } = event.target;
    const currentUserFormData = Object.assign({},
      this.props.userFormData, {
        [id]: value
      })
    
    Object.keys(currentUserFormData).forEach((key) => (currentUserFormData[key] == '') && delete currentUserFormData[key]);
    this.props.updateUserFormData(currentUserFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createSession } = this.props;
    createSession(this.props.userFormData);
  }
 
  componentDidUpdate = (prevProps, prevState) => {
    const { history } = this.props;
    if (this.props.currentUser.id) {
      history.push(`/profile/${this.props.currentUser.id}`);
    }
  }

  render() {
    return(
      <SignInForm userFormData={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
    )
  }
}

const mapStateToProps = state => {
  return ({
    userFormData: state.userFormData,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { updateUserFormData, createSession })(SessionNew);