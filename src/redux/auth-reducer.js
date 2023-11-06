import { stopSubmit } from "redux-form"
import { authMeAPI } from "../api/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const LOGOUT_USER = 'LOGOUT_USER'

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

  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      id: null,
      email: null,
      login: null,
      isAuth: false
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

export const logoutAC = () => {
  return {
    type: LOGOUT_USER
  }
}

export const authMe = () => {
  return (dispatch) => {
    authMeAPI.me()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(data.data))
        }
      })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authMeAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(authMe())
        } else {
          dispatch(stopSubmit('login', {_error: 'Error'}))
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    authMeAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(logoutAC())
        }
      })
  }
}