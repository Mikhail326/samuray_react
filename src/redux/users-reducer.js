const FOOLOW = 'FOLLOW';
const UNFOOLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
   
  ]
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === FOOLOW) {
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

  if (action.type === UNFOOLOW) {
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

  if (action.type === SET_USERS) {
    return {
      ...state,
      users: [...state.users, ...action.users]
    }
  }
  return state
}

export const followAC = (id) => {
  return { type: FOOLOW, id }
}

export const unfollowAC = (id) => {
  return { type: UNFOOLOW, id }
}

export const setUsersAC = (users) => {
  return { type: SET_USERS, users }
}