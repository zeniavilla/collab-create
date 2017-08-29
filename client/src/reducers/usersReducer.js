export const usersReducer = (state = [], action) {
  switch(action.type) {
    case 'CREATE_USER':
      return state.concat(action.user);

    default:
      return state;
  }
}