import { followAPI, getUsersAPI, unfollowAPI } from "../api/api";

const FOOLOW = 'FOLLOW';
const UNFOOLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGE = 'SET_USERS_PAGE'
const COUNT_ALL_USERS = 'COUNT_ALL_USERS'
const TOGGLE_STATUS_PRELOADER = 'TOGGLE_STATUS_PRELOADER'
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  selectedPage: 1,
  statusPreloader: false,
  following: []
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === FOOLOW) {
    return {
      ...state,
      users: state.users.map(el => {
        if (el.id === action.id) {
          return {
            ...el,
            followed: true
          }
        }
        return el
      })
    }
  }

  if (action.type === UNFOOLOW) {
    return {
      ...state,
      users: state.users.map(el => {
        if (el.id === action.id) {
          return {
            ...el,
            followed: false
          }
        }
        return el
      })
    }
  }

  if (action.type === SET_USERS) {
    return {
      ...state,
      users: [...action.users],
    }
  }

  if (action.type === SET_USERS_PAGE) {
    return {
      ...state,
      selectedPage: action.selectedPage
    }
  }

  if (action.type === COUNT_ALL_USERS) {
    return {
      ...state,
      totalUsersCount: action.countUsers / 150 // 150 чтобы уменьшить количество страниц (очень много пользователей)
    }
  }

  if(action.type === TOGGLE_STATUS_PRELOADER) {
    return {
      ...state,
      statusPreloader: action.status
    }
  }

  if(action.type === FOLLOWING_PROGRESS) {
    return {
      ...state,
      following: action.following ? [...state.following, action.id] : state.following.filter(id => id !== action.id)
    }
  }

  return state
}

export const followSuccess = (id) => {
  return { type: FOOLOW, id }
}

export const unfollowSuccess = (id) => {
  return { type: UNFOOLOW, id }
}

export const setUsers = (users) => {
  return { type: SET_USERS, users}
}

export const setUsersPage = (selectedPage) => {
  return { type: SET_USERS_PAGE, selectedPage }
}

export const countAllUsers = (countUsers) => {
  return { type: COUNT_ALL_USERS, countUsers }
}

export const toggleStatusPreloader = (status) => {
  return { type: TOGGLE_STATUS_PRELOADER, status }
}

export const followingProgress = (following, id) => {
  return { type: FOLLOWING_PROGRESS, following, id }
}

export const getUsers = (selectedPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleStatusPreloader(true))
    getUsersAPI(selectedPage, pageSize)
        .then(data => {
          dispatch(setUsers(data.items))
          dispatch(countAllUsers(data.totalCount))
          dispatch(toggleStatusPreloader(false))
        })
  }
}

export const selectedUsersPage = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleStatusPreloader(true))
    dispatch(setUsersPage(page))
    getUsersAPI(page, pageSize)
      .then(data => {
        dispatch(toggleStatusPreloader(false))
        dispatch(setUsers(data.items))
      })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(followingProgress(true, id))
    unfollowAPI(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(id))
        }
        dispatch(followingProgress(false, id))
      })
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(followingProgress(true, id))
    followAPI(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(id))
        }
        dispatch(followingProgress(false, id))
      })
  }
}