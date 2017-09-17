const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **

export const updateUserFormData = userFormData => {
  return {
    type: 'UPDATED_USER_DATA',
    userFormData
  }
}

const resetUserForm = () => {
  return {
    type: 'RESET_USER_FORM'
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
    type: 'SET_CURRENT_USER',
    user
  }
}

const clearSession = () => {
  return {
    type: 'CLEAR_CURRENT_USER',
  }
}

const setUserService = userService => {
  return {
    type: 'SET_USER_SERVICE',
    userService
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
      .then(user => {
        dispatch(addUser(user))

      })
      .catch(error => console.log(error))
  }
}

export const editUser = (user, userId) => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => dispatch(addUser(user)))
      .catch(error => console.log(error))
  }
}

export const createSession = user => {
  return dispatch => {
    return fetch(`${API_URL}/users/sign_in.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
      .then(response => response.json())
      .then(user => {
        dispatch(addUser(user))

      })
      .catch(error => console.log(error))
  }
}

export const removeCurrentUser = () => {
  return dispatch => {
    dispatch(clearSession())
    dispatch(resetUserForm())
  }
}

export const getSelectedUserService = userId => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}`)
      .then(response => response.json())
      .then(userService => dispatch(setUserService(userService)))
      .catch(error => console.log(error))
  }
}