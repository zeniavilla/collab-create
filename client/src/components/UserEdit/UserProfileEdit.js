import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { updateUserFormData, editUser } from '../../actions/userActions';
import { getServices } from '../../actions/serviceActions';

// components
import UserEditForm from './UserEditForm';

class UserProfileEdit extends Component {

  componentDidMount = () => {
    this.props.getServices();
  }

  handleOnChange = event => {
    const { id, value } = event.target;
    let index;
    const currentUserFormData = Object.assign({},
      this.props.userFormData, {
        [id]: value
      })

    Object.keys(currentUserFormData).forEach(key => (currentUserFormData[key] === "") &&(delete currentUserFormData[key]))
        
    if (event.target.checked) {
      this.props.userFormData['service_ids'].push(event.target.value);
    } else {
      index = this.props.userFormData['service_ids'].indexOf(event.target.value)
      this.props.userFormData['service_ids'].splice(index, 1);
    }
    
    this.props.updateUserFormData(currentUserFormData);
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.editUser(this.props.userFormData, this.props.currentUser.id);
  }

  render() {
    return (
      <UserEditForm userFormData={this.props.userFormData} currentUser={this.props.currentUser} handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} services={this.props.services} />
    )
  }
}

const mapStateToProps = state => {
  return ({ 
    currentUser: state.currentUser,
    userFormData: state.userFormData,
    services: state.services
  })
}

export default connect(mapStateToProps, { updateUserFormData, editUser, getServices })(UserProfileEdit);