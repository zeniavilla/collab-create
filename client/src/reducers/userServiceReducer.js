export const userServiceReducer = (state = [], action) => {
  switch(action.type) {

    case 'SET_USER_SERVICE':
      return (action.userService);

    default:
      return state;

  }
}