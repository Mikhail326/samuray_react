import { profileAPI, profileStatusAPI, updateStatusAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  posts: [
    {
      id: 1,
      img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
      text: 'How are you?',
      likes: 3
    }
  ],
  newPostText: '',
  profile: {},
  status: ''
}

export const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 1,
      img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
      text: state.newPostText,
      likes: 3
    }
    return {
      ...state,
      posts: [...state.posts, newPost],
      newPostText: ''
    }
  }
  if (action.type === ON_CHANGE_POST_TEXT) {
    return {
      ...state,
      newPostText: action.text
    }
  }
  if (action.type === SET_USER_PROFILE) {
    return {
      ...state,
      profile: { ...action.profile }
    }
  }
  if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status
    }
  }
  return state
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const onChangePostTextActionCreator = (text) => {
  return {
    type: ON_CHANGE_POST_TEXT,
    text: text
  }
}

export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getProfile = (id) => {
  return (dispatch) => {
    profileAPI(id)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export const getStatus = (id) => {
  return (dispatch) => {
    profileStatusAPI(id)
    .then(data => {
      dispatch(setStatus(data))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    updateStatusAPI(status)
    .then(data => {
      dispatch(setStatus(data))
    })
  }
}

