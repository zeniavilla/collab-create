import { combineReducers } from 'redux';
import { servicesReducer } from './servicesReducer';
import { userFormData } from './userFormData';
import { usersReducer } from './usersReducer';
import { userServiceReducer } from './userServiceReducer';

export default combineReducers({
  services: servicesReducer,
  userFormData: userFormData,
  currentUser: usersReducer,
  selectedUserService: userServiceReducer
});