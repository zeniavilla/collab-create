import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignInForm from '../components/SignInForm';

import { updateUserFormData } from '../actions/userActions';

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
  }

  render() {
    return(
      <SignInForm userFormData={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} />
    )
  }
}

const mapStateToProps = state => {
  return ({ userFormData: state.userFormData })
}

export default connect(mapStateToProps, { updateUserFormData })(SessionNew);