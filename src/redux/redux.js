import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { messagesReducer } from './messages-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from "./users-reducer"
import { authReducer } from "./auth-reducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store