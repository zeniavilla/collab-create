import { combineReducers } from 'redux';
import { servicesReducer } from './servicesReducer';
import { userFormData } from './userFormData';

export default combineReducers({
  services: servicesReducer,
  userFormData: userFormData
});