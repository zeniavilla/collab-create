const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **

const setServices = services => {
  return {
    type: 'GET_SERVICES',
    services
  }
}

// ** Async Actions **

export const getServices = () => {
  return dispatch => {
    return fetch(`${API_URL}/services`)
      .then(response => response.json())
      .then(services => dispatch(setServices(services)))
      .catch(error => console.log(error));
  }
}