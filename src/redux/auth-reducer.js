const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

export const authReducer = (state = initialState, action) => {
  if (action.type === SET_AUTH_USER_DATA) {
    return {
      ...state,
     ...action.userData,
     isAuth: true
    }
  }

  return state
}
export const setAuthUserData = (userData) => {
  return {
    type: SET_AUTH_USER_DATA,
    userData
  }
}

