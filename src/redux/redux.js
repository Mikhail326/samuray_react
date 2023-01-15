import { combineReducers, legacy_createStore } from "redux"
import { messagesReducer } from './messages-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from "./users-reducer"

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export let store = legacy_createStore(reducers)