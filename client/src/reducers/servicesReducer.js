export const servicesReducer = (state = [], action) => {
  switch(action.type) {

    case 'GET_SERVICES':
      return (action.services);

    default:
      return state;

  }
}