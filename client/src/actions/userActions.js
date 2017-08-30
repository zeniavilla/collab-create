const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **

export const updateUserFormData = userFormData => {
  return {
    type: 'UPDATED_USER_DATA',
    userFormData
  }
}

const addOmniauthUser = user => {
  return {
    type: 'CREATE_OMNIAUTH_USER',
    user
  }
}

const addUser = user => {
  return {
    type: 'CREATE_USER',
    user
  }
}

// ** Async Actions **

export const createOmniauthUser = provider => {
  return dispatch => {
    return fetch(`${API_URL}/users/auth/${provider}`)
      .then(response => response.json())
      .then(user => dispatch(addOmniauthUser(user)))
      .catch(error => console.log(error));
  }
}

export const createUser = user => {
  return dispatch => {
    return fetch(`${API_URL}/users.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => dispatch(addUser(user)))
      .catch(error => console.log(error))
  }
}