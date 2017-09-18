const initialState = {
  name: '',
  email: '',
  password: '',
  bio: '',
  bio_img: '',
  location: '',
  phone_number: '',
  website: '',
  instagram: '',
  service_ids: []
}

export const userFormData = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_USER_DATA':
      return action.userFormData
    case 'RESET_USER_FORM':
      return initialState

    default:
      return state;
  }
}