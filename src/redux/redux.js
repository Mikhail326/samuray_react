import { combineReducers, legacy_createStore } from "redux"
import { messagesReducer } from './messages-reducer'
import { profileReducer } from './profile-reducer'


const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer
})

export let store = legacy_createStore(reducers)