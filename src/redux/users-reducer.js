const FOOLOW = 'FOLLOW';
const UNFOOLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_PAGE = 'SET_USERS_PAGE'
const COUNT_ALL_USERS = 'COUNT_ALL_USERS'

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  selectedPage: 1
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
    console.log(action)
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

  return state
}

export const followAC = (id) => {
  return { type: FOOLOW, id }
}

export const unfollowAC = (id) => {
  return { type: UNFOOLOW, id }
}

export const setUsersAC = (users) => {
  return { type: SET_USERS, users}
}

export const setUsersPageAC = (selectedPage) => {
  return { type: SET_USERS_PAGE, selectedPage }
}

export const countAllUsersAC = (countUsers) => {
  return { type: COUNT_ALL_USERS, countUsers }
}