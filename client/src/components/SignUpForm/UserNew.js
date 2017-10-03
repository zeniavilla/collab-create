import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { updateUserFormData, createOmniauthUser, createUser } from '../../actions/userActions';
import { getServices } from '../../actions/serviceActions';

// components
import UserSignUpForm from './UserSignUpForm';

class UserNew extends Component {
  
  handleOnClick = event => {
    const provider = event.target.name;

    this.props.createOmniauthUser(provider);
  }
  
  handleOnChange = event => {
    const { id, value } = event.target;
    let index;
    
    const currentUserFormData = Object.assign({},
      this.props.userFormData, {
        [id]: value
      })
      
      if (event.target.checked) {
        this.props.userFormData['service_ids'].push(event.target.value);
      } else {
        index = this.props.userFormData['service_ids'].indexOf(event.target.value)
        this.props.userFormData['service_ids'].splice(index, 1);
      }
      
    this.props.updateUserFormData(currentUserFormData);
  }

  handleOnSubmit = event => { 
    window.scrollTo(0,0);
    event.preventDefault();
    const { createUser } = this.props;

    createUser(this.props.userFormData);
  }

  componentDidMount = () => {
    this.props.getServices();
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    const { history } = this.props;
    if (this.props.currentUser.id) {
      history.push(`/profile/${this.props.currentUser.id}`);
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <UserSignUpForm userFormData={this.props.userFormData} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} handleOnSubmit={this.handleOnSubmit} currentUser={this.props.currentUser} services={this.props.services} />
    )
  }
}

const mapStateToProps = state => {
  return ({ 
    userFormData: state.userFormData,
    currentUser: state.currentUser,
    services: state.services
  })
}

export default connect (mapStateToProps, { updateUserFormData, createOmniauthUser, createUser, getServices })(UserNew);